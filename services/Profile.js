const md5 = require("md5");
const prisma = require("../src/db");
const { addPortfolio } = require("../services/Portfolio");

/**
 * 
 * model profile {
 * profile_id    String      @id @default(uuid())
 * username      String      @unique @db.VarChar(50)
 * password_hash String      @db.VarChar(50)
 * email         String      @db.VarChar(50)
 * phone_number  String      @db.VarChar(32)
 * points        Int?        @default(0)
 * portfolio     portfolio[]
 * }
 */
async function addProfile(keyValueObj) {
  try {
    const newProfile = await prisma.profile.create({
      data: keyValueObj,
    });

    const profileId = newProfile.profile_id;

    const portfolioKeyValueObj = {
      portfolio_type: 'main',
      base_balance: 10000,
      fk_profile: profileId,
    }

    if (profileId) {
      await addPortfolio(portfolioKeyValueObj);
    }

    return newProfile;
  } catch (error) {
    console.error(error);
  }
}

async function findProfileByLogin(email, password) {
  const portfolio = await prisma.profile.findFirst({
    where: {
      email: email,
      password_hash: password,
    }
  });

  return portfolio;
}

module.exports = {
  addProfile,
  findProfileByLogin,
}
