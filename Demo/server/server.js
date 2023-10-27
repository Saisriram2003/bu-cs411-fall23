const express = require('express');
const axios = require('axios');
const app = express();
const port = 5001;

const cors = require('cors');


app.use(cors());

app.get('/news', async (req, res) => {
  try {
    const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=8cbeae5be4f7477b8fcd8ba091dfdcd3`);
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Unable to fetch news data' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
