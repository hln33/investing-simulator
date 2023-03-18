import axios from 'axios';
import { Symbol } from 'enums/Stock';
import { Config } from 'Config'

const {SiteURL, Port} = Config;

/**
 * @memberof module:Stock
 *
 * @description Retrieve stock information from unofficial Yahoo Finance npm package
 *
 * @type {Symbol | Symbol[] | string[]} - Single symbol or list of symbols to retrieve.
 * @type {Object} - Optional query options to specify which fields to return, and in what format. More info in the documentation link below
 * @type {Object} - optional module options. More info in the documentation link below.
 * 
 * Documentation on API parameters here: https://github.com/gadicc/node-yahoo-finance2/blob/devel/docs/modules/quote.md
 *
 * @returns { object }
 */
async function getStockInformation(symbol: Symbol | Symbol[] | string[], queryOptions: Object | null = null, moduleOptions: Object | null = null) {
  if (!symbol || symbol.length === 0) {
    return null;
  }

  const params = {
    symbol,
    queryOptions,
    moduleOptions,
  };

  const response = await axios(`${SiteURL}:${Port}/stock`, { params });
  return response.data;
}

export {
  getStockInformation,
}