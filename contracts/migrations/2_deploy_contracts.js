var SponsorshipToken = artifacts.require("./SponsorshipToken.sol");

module.exports = function(deployer) {
  deployer.deploy(SponsorshipToken);
};
