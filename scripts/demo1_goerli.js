const { formatBytes32String } = require("ethers/lib/utils");
const { ethers } = require("ethers");
const hre = require("hardhat");

async function main() {
    const LayerZeroDemo1 = await hre.ethers.getContractFactory("LayerZeroDemo1");
    const layerZeroDemo1 = await LayerZeroDemo1.attach(
        "0xD96858f4ea9370317444a7C91a16782bB3F31a08"
    );
    const fees = await layerZeroDemo1.estimateFees(
        10109,
        "0x964eC29DA1017CeCEe8fa8Cb1b92c01cB13A5E75",
        formatBytes32String("Hello LayerZero"),
        false,
        []
    );
    console.log(`estimateFees: ${ethers.utils.formatEther(fees[0].toString())}`);
    await layerZeroDemo1.sendMsg(
        10109,
        "0x964eC29DA1017CeCEe8fa8Cb1b92c01cB13A5E75",
        formatBytes32String("Hello LayerZero"),
        { value: ethers.utils.parseEther("1.9") }
    );
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});