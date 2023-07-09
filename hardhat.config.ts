import * as dotenv from "dotenv";

import type { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-network-helpers";
import "@nomicfoundation/hardhat-chai-matchers";
import "@nomicfoundation/hardhat-toolbox";
import "@nomicfoundation/hardhat-ethers";
import "@typechain/ethers-v6";
import "@typechain/hardhat";
import "solidity-coverage";

dotenv.config();

/** @type import('hardhat/config').HardhatUserConfig */
const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",
  networks: {
    // hardhat
    hardhat: {},
    // alchemy
    ethereum: {
      url: "https://eth-mainnet.alchemyapi.io/v2/" + process.env.ALCHEMY_ETHEREUM
    },
    polygon: {
      url: "https://polygon-mainnet.g.alchemy.com/v2/" + process.env.ALCHEMY_POLYGON
    },
    sepolia: {
      url: "https://eth-sepolia.alchemyapi.io/v2/" + process.env.ALCHEMY_SEPOLIA
    },
    mumbai: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/" + process.env.MUMBAI_API_KEY
    },
    //
    avalanche: {
      url: "https://api.avax.network/ext/bc/C/rpc"
    },
    fuji: {
      url: "https://api.avax-test.network/ext/C/rpc"
    },
    // tenderly
    tenderly_ethereum: {
      chainId: 1,
      url: "https://rpc.tenderly.co/fork/" + process.env.TENDERLY_ETHEREUM
    },
    tenderly_avalanche: {
      chainId: 43114,
      url: "https://rpc.tenderly.co/fork/" + process.env.TENDERLY_AVALANCHE
    },
    tenderly_polygon: {
      chainId: 137,
      url: "https://rpc.tenderly.co/fork/" + process.env.TENDERLY_POLYGON
    },
    // ganache
    ganache: {
      url: "http://127.0.0.1:7545",
      accounts: {
        mnemonic: process.env.GANACHE_MNEMONIC,
        count: 10
      }
    }
  },
  solidity: {
    compilers: [
      {
        version: "0.8.18",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200
          }
        }
      }
    ]
  },
  paths: {
    artifacts: "./artifacts",
    cache: "./cache",
    sources: "./contracts",
    tests: "./test",
  },
  etherscan: {
    apiKey: {
      mainnet: process.env.ETHERSCAN_ETHEREUM || "",
      sepolia: process.env.ETHERSCAN_ETHEREUM || "",
      avalanche: process.env.SNOWTRACE_AVALANCHE || "",
      goerli: process.env.SNOWTRACE_AVALANCHE || "",
      polygon: process.env.POLYGONSCAN_POLYGON || "",
      polygonMumbai: process.env.POLYGONSCAN_POLYGON || ""
    }
  }
};

export default config;