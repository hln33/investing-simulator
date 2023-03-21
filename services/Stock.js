const prisma = require("../src/db");

async function getStockBySymbol(symbol) {
  const stock = await prisma.stock.findUnique({
    where: {
      symbol,
    },
  });
  return stock;
}

module.exports = {
  getStockBySymbol,
}
