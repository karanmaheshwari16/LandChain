async function main() {
    // Get the contract factory
    const SimpleStorage = await ethers.getContractFactory("SimpleStorage");
    
    // Deploy the contract
    console.log("Deploying SimpleStorage...");
    const simpleStorage = await SimpleStorage.deploy();
    await simpleStorage.deployed();
    
    console.log("SimpleStorage deployed to:", simpleStorage.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });