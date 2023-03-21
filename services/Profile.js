const md5 = require ("md5");
const prisma = require("../src/db");

async function addProfile(keyValueObj) {
  const newProfile = await prisma.profile.create({
    keyValueObj,
  });

  const profileId = newProfile.profile_id;

  const portfolioKeyValueObj = {
    portfolio_type: 'main',
    base_balance: 10000,
    fk_profile: profileId,
  }

  await addPortfolio(portfolioKeyValueObj);
  return newProfile;
}

async function findProfileByLogin(username, password) {
  const portfolio = await prisma.portfolio.findUnique({
    where: {
      username,
      password_hash: md5(password),
    }
  });

  return portfolio;
}

module.exports = {
  addProfile,
  findProfileByLogin,
}
