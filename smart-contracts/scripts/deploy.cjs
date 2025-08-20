const hre = require("hardhat");

async function main() {
  const CryptoXWallet = await hre.ethers.deployContract("CryptoXWallet");
  await CryptoXWallet.waitForDeployment();

  console.log("CryptoXWallet deployed to:", CryptoXWallet.target);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
