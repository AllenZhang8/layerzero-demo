const hre = require("hardhat");
/*
  https://layerzero.gitbook.io/docs/technical-reference/testnet/testnet-addresses
  Mumbai (Polygon Testnet)
  chainId: 10109
  endpoint: 0xf69186dfBa60DdB133E91E9A4B5673624293d8F8
   */
async function main() {
  const LayerZeroDemo1 = await hre.ethers.getContractFactory("LayerZeroDemo1");
  const layerZeroDemo1 = await LayerZeroDemo1.deploy(
      "0xf69186dfBa60DdB133E91E9A4B5673624293d8F8" // Mumbai endpoint
  );
  await layerZeroDemo1.deployed();
  console.log("layerZeroDemo1 deployed to:", layerZeroDemo1.address);
  // test result 0x964eC29DA1017CeCEe8fa8Cb1b92c01cB13A5E75
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});