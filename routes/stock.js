const express = require('express');
const router = express.Router();
const yahooFinance = require('yahoo-finance2').default;

/* GET stock listing. */
router.get('/', async (req, res, next) => {
  const symbol = req.query.symbol;
  const queryOptions = req.query.queryOptions;
  const moduleOptions = req.query.moduleOptions

  const result = await yahooFinance.quote(symbol, queryOptions, moduleOptions);
  res.send(result);
});

module.exports = router;
