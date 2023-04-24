const hre = require("hardhat");
/*
  https://layerzero.gitbook.io/docs/technical-reference/testnet/testnet-addresses
  Goerli (Ethereum Testnet)
  chainId: 10121
  endpoint: 0xbfD2135BFfbb0B5378b56643c2Df8a87552Bfa23
   */
async function main() {
  const LayerZeroDemo1 = await hre.ethers.getContractFactory("LayerZeroDemo1");
  const layerZeroDemo1 = await LayerZeroDemo1.deploy(
      "0xbfD2135BFfbb0B5378b56643c2Df8a87552Bfa23" // goerli endpoint
  );
  await layerZeroDemo1.deployed();
  console.log("layerZeroDemo1 deployed to:", layerZeroDemo1.address);
  // test result 0xD96858f4ea9370317444a7C91a16782bB3F31a08
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});