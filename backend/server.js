const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const verifiedShops = JSON.parse(fs.readFileSync('./backend/verifiedShops.json', 'utf-8'));

const app = express();
const PORT = process.env.PORT || 10000;

app.use(cors());
app.use(bodyParser.json());

app.post('/search', (req, res) => {
  const searchQuery = (req.body?.search || '').toLowerCase();

  if (!searchQuery) {
    return res.status(400).json({ response: "Search term is missing." });
  }

  // Simulated AI response (for now)
  const fakeResults = [
    { name: 'Smartphone X', price: '$199', source: 'Jumia' },
    { name: 'Shoes Pro', price: '$49', source: 'Kilimall' },
    { name: 'TV Box Pro', price: '$69', source: 'Alibaba' },
    { name: 'Magic Pillow', price: '$12', source: 'UnknownShop' },
  ];

  const results = fakeResults.filter(item =>
  item.name.toLowerCase().includes(searchQuery) &&
  verifiedShops.includes(item.source)
);


  if (results.length === 0) {
    return res.json({
      response: "Sorry, I couldn’t find matching products. Try a different keyword."
    });
  }

  return res.json({ results });
});

app.get('/', (req, res) => {
  res.send('🚀 ACCIOM AI backend is running!');
});

app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
