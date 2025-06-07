const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 10000;

app.use(cors());
app.use(bodyParser.json());

const verifiedShopsPath = './backend/verifiedShops.json';
const inventoryPath = './backend/inventory.json';

function readJSON(path) {
  return JSON.parse(fs.readFileSync(path, 'utf-8'));
}

function writeJSON(path, data) {
  fs.writeFileSync(path, JSON.stringify(data, null, 2));
}

app.get('/', (req, res) => {
  res.send('✅ ACCIOMAI Backend is running!');
});

app.get('/verified-shops', (req, res) => {
  const shops = readJSON(verifiedShopsPath);
  res.json(shops);
});

app.post('/update-shops', (req, res) => {
  const { shops } = req.body;
  if (!Array.isArray(shops)) return res.status(400).json({ message: "Invalid format" });
  writeJSON(verifiedShopsPath, shops);
  res.json({ message: "Shop list updated" });
});

app.post('/search', async (req, res) => {
  const query = (req.body?.search || '').toLowerCase();
  if (!query) return res.status(400).json({ response: "Search term is missing." });

  const shops = readJSON(verifiedShopsPath);
  const mockResults = [
    { name: "Samsung Galaxy A14", price: "$199", source: "Jumia" },
    { name: "Infinix Smart", price: "$150", source: "Kilimall" },
    { name: "iPhone 11", price: "$450", source: "Alibaba" }
  ];
  const results = mockResults.filter(p =>
    p.name.toLowerCase().includes(query) && shops.includes(p.source)
  );

  res.json({ results: results.length ? results : [{ response: "No verified results found." }] });
});

app.get('/inventory/:shopId', (req, res) => {
  const inventory = readJSON(inventoryPath);
  const data = inventory[req.params.shopId] || [];
  res.json({ items: data.slice(0, 100) });
});

app.post('/confirm-order', (req, res) => {
  const { orderId, contact } = req.body;
  if (!orderId || !contact) return res.status(400).json({ message: "Missing data" });
  const logs = readJSON('./backend/logs.json');
  logs.push({ type: "order-confirmation", contact, time: Date.now() });
  writeJSON('./backend/logs.json', logs);
  res.json({ message: "Confirmation initiated" });
});

app.post('/ai/business-consult', (req, res) => {
  const { prompt } = req.body;
  if (!prompt) return res.status(400).json({ message: "Prompt required" });
  res.json({ suggestion: `Based on your idea '${prompt}', opening a digital shop in East Africa would be a great investment.` });
});

app.post('/ai/real-estate', (req, res) => {
  const { location, type } = req.body;
  if (!location || !type) return res.status(400).json({ message: "Missing location/type" });
  res.json({ results: [
    { title: `2 Bedroom ${type} in ${location}`, price: "$250/month", agent: "RealAgent KE" }
  ]});
});

app.listen(PORT, () => {
  console.log(`🚀 ACCIOMAI backend running on port ${PORT}`);
});
