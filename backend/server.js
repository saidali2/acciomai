const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000; // ✅ Important for Render

app.use(cors());
app.use(bodyParser.json());

app.post('/search', (req, res) => {
  const query = (req.body?.search || '').toLowerCase();
  let response;

  if (query.includes("tv") && query.includes("nairobi")) {
    response = "You can find TVs on Jiji.co.ke, Kilimall, or local Nairobi shops.";
  } else if (query.includes("repair shop")) {
    response = "To open a repair shop in Eastleigh, you need tools, licensing, and permits.";
  } else if (query.includes("mtumba") || query.includes("kiswahili")) {
    response = "Unaweza kupata bidhaa za mtumba Gikomba au Jiji Kenya.";
  } else {
    response = "Sorry, I'm still learning. Please try another request.";
  }

  res.json({ response });
});

app.listen(port, () => {
  console.log(`✅ ACCIOMAI backend running on port ${port}`);
});
