const {expect} = require("chai");

describe("Token contract", function (){
    it("Deployment should assign the total supply of tokens to the owner", async function(){
        const[owner]= await ethers.getSigners();
        console.log("Signers object", owner);
        const Token = await ethers.getContractFactory("Token") ;

        const hardhatToken = await Token.deploy();
         
        const ownerBalance = await hardhatToken.balanceOf(owner, address);
        console.log("Owner address ", owner.address );

        expect(await hardhatToken).totalSupply().to.equal(ownerBalance);

    });
});
