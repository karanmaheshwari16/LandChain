require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

// Remove the '0x' prefix if present
const PRIVATE_KEY = process.env.PRIVATE_KEY.startsWith('0x') 
  ? process.env.PRIVATE_KEY.slice(2) 
  : process.env.PRIVATE_KEY;

module.exports = {
  solidity: "0.8.19",
  networks: {
    hardhat: {
    },
    sepolia: {
      url: process.env.SEPOLIA_URL,
      accounts: [process.env.PRIVATE_KEY]
    }
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY
  }
};