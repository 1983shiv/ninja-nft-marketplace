require("@nomiclabs/hardhat-waffle");
const fs = require('fs');
const privateKey = fs.readFileSync(".secret").toString().trim();
// const privateKey = fs.readFileSync(".secret").toString().trim();
// const infuraId = fs.readFileSync(".infuraid").toString().trim() || "";

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },
    ropsten: {
      url : `https://ropsten.infura.io/v3/64df4c0b6f144711afee87125dbb3121`,
      accounts: ['bb672460c02fc77c4932a04134bb444fbab69821307eea1c053d82eae6a33c55']
    },
    // ropsten: {
    //   url : `https://ropsten.infura.io/v3/${env.process.PROJECTID}`,
    //   accounts: [privateKey]
    // },
    /*
    mumbai: {
      // Infura
      // url: `https://polygon-mumbai.infura.io/v3/${infuraId}`
      url: "https://rpc-mumbai.matic.today",
      accounts: [privateKey]
    },
    matic: {
      // Infura
      // url: `https://polygon-mainnet.infura.io/v3/${infuraId}`,
      url: "https://rpc-mainnet.maticvigil.com",
      accounts: [privateKey]
    }
    */
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};
