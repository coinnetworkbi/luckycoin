const { ethers } = require("hardhat");

async function main() {
  const initialSupply = 1000; // 1 triệu LUC ban đầu
  const [deployer] = await ethers.getSigners();

  console.log("🚀 Deploying Lucky Coin (LUC) with account:", deployer.address);

  const LuckyCoin = await ethers.getContractFactory("LuckyCoin");
  const token = await LuckyCoin.deploy(initialSupply);

  await token.waitForDeployment();
  const address = await token.getAddress();

  console.log("✅ Lucky Coin (LUC) deployed to:", address);
}

main().catch((error) => {
  console.error("❌ Deployment failed:", error);
  process.exitCode = 1;
});

