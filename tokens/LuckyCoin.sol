// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract LuckyCoin is ERC20, Ownable {
    bool public mintingLocked = false;

    constructor(uint256 initialSupply) ERC20("LuckyCoin", "LUK") Ownable(msg.sender) {
        _mint(msg.sender, initialSupply * 10 ** decimals());
    }

    modifier canMint() {
        require(!mintingLocked, "Minting is locked");
        _;
    }

    function mint(address to, uint256 amount) external onlyOwner canMint {
        _mint(to, amount * 10 ** decimals());
    }

    function lockMinting() external onlyOwner {
        mintingLocked = true;
    }

    // ✅ Gỡ số lẻ, chỉ cho giao dịch nguyên số
    function decimals() public pure override returns (uint8) {
        return 0;
    }
}

