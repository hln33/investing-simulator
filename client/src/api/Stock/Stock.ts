import axios from 'axios';
import { DataType, Interval, OutputSize, TimeSeries, Symbol } from 'enums/AlphaVantage';

/**
 * @memberof module:Stock
 *
 * @description Retrieve stock information from AlphaVantage
 *
 * @type {TimeSeries} - timeSeries
 * @type {Symbol} - symbol
 * @type {Interval} - interval
 * @type {Boolean} - adjusted - Optional
 * @type {OutputSize} outputSize - Optional
 * @type {DataType} dataType - Optional
 * 
 * Documentation on API parameters here: https://www.alphavantage.co/documentation/
 *
 * @returns { object }
 */
async function getStockInformation(timeSeries: TimeSeries, symbol: Symbol, interval: Interval, adjusted = true, outputSize: OutputSize.COMPACT, dataType: DataType.JSON) {
  const response = await axios(`http://localhost:8080/stock/?timeSeries=${timeSeries}&symbol=${symbol}&interval=${interval}&adjusted=${adjusted}&outputSize=${outputSize}&dataType=${dataType}`);
  return response.data;
}

export {
  getStockInformation,
}