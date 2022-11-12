pragma solidity ^0.8.0;

import "./ownership/ownable.sol";
import "./tokens/nf-token-enumerable.sol";

struct NFTMetadata {
    string name;
    string uri;
    string species;
    string description;
    string location;
    string organization;
    string sponsorshipStart;
    string sponsorshipEnd;
}

contract SponsorshipToken is
NFTokenEnumerable,
Ownable
{
    string internal nftName;

    string internal nftSymbol;

    uint256 internal nonce;

    mapping(uint256 => NFTMetadata) internal idToMetadata;

    mapping(uint256 => bool) internal hasTokenBeenSold;

    mapping(uint256 => uint256) internal idToPrice;

    constructor()
    {
        nonce = 0;
        nftName = "Animal Sponsorship Token";
        nftSymbol = "AST";
        supportedInterfaces[0x5b5e139f] = true; // ERC721Metadata
    }

    function name()
    external
    view
    returns (string memory _name)
    {
        _name = nftName;
    }

    function symbol()
    external
    view
    returns (string memory _symbol)
    {
        _symbol = nftSymbol;
    }

    function tokenMetadata(
        uint256 _tokenId
    )
    external
    view
    returns (NFTMetadata memory)
    {
        return idToMetadata[_tokenId];
    }

    function mint(
        address _to,
        NFTMetadata calldata _metadata,
        uint256 _price
    )
    external
    onlyOwner
    {
        uint256 tokenId = nonce;
        super._mint(_to, tokenId);
        idToMetadata[tokenId] = _metadata;
        idToPrice[tokenId] = _price;
        nonce = nonce + 1;
    }

    function purchase(
        string calldata _name,
        uint256 _tokenId
    )
    external
    payable
    {
        require(_tokenId < nonce, "Token does not exist");
        require(msg.value >= idToPrice[_tokenId], "Insufficient funds");
        require(!hasTokenBeenSold[_tokenId], "Token has already been sold");
        address payable owner = payable(idToOwner[_tokenId]);
        owner.transfer(msg.value);
        super._transfer(msg.sender, _tokenId);
        hasTokenBeenSold[_tokenId] = true;
        NFTMetadata storage md = idToMetadata[_tokenId];
        md.name = _name;
    }

    function price(uint256 _tokenId) external view returns (uint256) {
        return idToPrice[_tokenId];
    }

    function getNumberOfTokens() external view returns (uint256) {
        return nonce;
    }

    function getTokensByOwner(address _owner) external view returns (uint256[] memory) {
        return ownerToIds[_owner];
    }
}
