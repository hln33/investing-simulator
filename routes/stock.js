const express = require('express');
const router = express.Router();
const yahooFinance = require('yahoo-finance2').default;

/* GET current stock listing. */
router.get('/current', async (req, res, next) => {
  const symbol = req.query.symbol;
  const queryOptions = req.query.queryOptions;
  const moduleOptions = req.query.moduleOptions

  const result = await yahooFinance.quote(symbol, queryOptions, moduleOptions);
  res.send(result);
});

/* GET historical stock listing. */
router.get('/current', async (req, res, next) => {
  const symbol = req.query.symbol;
  const queryOptions = req.query.queryOptions;
  const moduleOptions = req.query.moduleOptions

  const result = await yahooFinance.historical(symbol, queryOptions, moduleOptions);
  res.send(result);
});

module.exports = router;
