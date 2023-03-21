import axios from 'axios';
import { Symbol } from 'enums/Stock';
import { Config } from 'Config';

const {SiteURL, Port} = Config;
const EndPoint = `${SiteURL}:${Port}/stock`;

/**
 * @memberof module:Stock
 *
 * @description Retrieve stock information from unofficial Yahoo Finance npm package
 *
 * @type {Symbol} - Single symbol or list of symbols to retrieve.
 * @type {Object} - Optional query options to specify which fields to return, and in what format. More info in the documentation link below
 * @type {Object} - optional module options. More info in the documentation link below.
 * 
 * Documentation on API parameters here: https://github.com/gadicc/node-yahoo-finance2/blob/devel/docs/modules/quote.md
 *
 * @returns { object }
 */
async function getCurrentStockInfo(
  symbol: Symbol | Symbol[] | string | string[], 
  queryOptions: Object | null = null, 
  moduleOptions: Object | null = null)
{
  if (!symbol || symbol.length === 0) {
    return null;
  }

  const params = {
    symbol,
    queryOptions,
    moduleOptions,
  };
  const response = await axios(`${EndPoint}/current`, { params });
  return response.data;
}

/**
 * @memberof module:Stock
 *
 * @description Retrieve stock information from unofficial Yahoo Finance npm package
 *
 * @type {Symbol} - Single symbol
 * @type {Object} - query options to specify starting period1 (required), period2, interval, events, includeAdjustedClose
 * @type {Object} - optional module options. More info in the documentation link below.
 * 
 * Documentation on API parameters here: https://github.com/gadicc/node-yahoo-finance2/blob/devel/docs/modules/historical.md
 *
 * @returns { object }
 */
 async function getHistoricalStockInfo(
  symbol: Symbol | string,
  queryOptions: Object | null = null, 
  moduleOptions: Object | null = null)
{
  if (symbol == null) {
    return null;
  }

  const params = {
    symbol,
    queryOptions,
    moduleOptions,
  };
  const response = await axios(`${EndPoint}/historical`, { params });
  return response.data;
}

export {
  getCurrentStockInfo,
  getHistoricalStockInfo
};
