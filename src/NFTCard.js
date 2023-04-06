import React from "react";
import { ethers } from "ethers";

function NftCard() {
  const contractAddress = "your contract address";
  const abi = ["your contract abi"];

  async function mintNFT() {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum, 97);
      await provider.send("eth_requestAccounts", []);
      const accounts = await provider.listAccounts();
      const signer = provider.getSigner(accounts[0]);
      const contract = new ethers.Contract(contractAddress, abi, signer);
      const addressSigner = await signer.getAddress();
      const valueToSend = ethers.utils.parseEther("0.001");
      const tx = await contract.safeMint(addressSigner, {
        value: valueToSend,
        gasLimit: 1000000
      });
      if (tx) {
        alert("You Mint NFT");
      }
    } catch (e) {
      alert("You don't MINT NFT");
      console.log(e);
    }
  }

  return (
    <div className="container">
      <div className="card">
        <div className="card-img">
          <img src="img/manul8.jpg" alt="Manul Mystique" />
        </div>
        <div className="card-body">
          <h2 className="card-title">Manul Mystique</h2>
          <p className="card-intro">
            This collection presents the beautiful and mysterious cats of our
            world
          </p>
        </div>
        <div className="card-footer">
          <button id="mintBtn" onClick={mintNFT}>
            Mint
          </button>
        </div>
      </div>
    </div>
  );
}

export default NftCard;
