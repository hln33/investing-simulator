const express = require('express');
const router = express.Router();
const axios = require('axios');

const VANTAGE_API_KEY = process.env.VANTAGE_API_KEY;

const BASE_ALPHA_VANTAGE_URL = 'https://www.alphavantage.co';

/* GET stock listing. */
router.get('/', async (req, res, next) => {
  const timeSeries = req.query.timeSeries;
  const symbol = req.query.symbol;
  const interval = req.query.interval;

  // OPTIONAL PARAMS:
  // const adjusted = req.params.adjusted;
  // const outputSize = req.params.outputSize;
  // const dataType = req.params.dataType;

  const url = `${BASE_ALPHA_VANTAGE_URL}/query?function=${timeSeries}&symbol=${symbol}&interval=${interval}&apikey=${VANTAGE_API_KEY}`;

  const { data } = await axios.get(url, {    
    json: true,
    headers: { 'User-Agent': 'request' }
  });

  res.send(data);
});

module.exports = router;
