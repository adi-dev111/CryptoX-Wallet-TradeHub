const { expect } = require("chai");

describe("CryptoXWallet", function () {
  it("should set the correct owner", async function () {
    const [owner] = await ethers.getSigners();
    const contract = await ethers.deployContract("CryptoXWallet");
    await contract.waitForDeployment();

    expect(await contract.getOwner()).to.equal(owner.address);
  });
});
