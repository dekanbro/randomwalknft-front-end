import { useState, useEffect } from "react";
import { ethers } from "ethers";

import abi from "abis/nft";
import { NFT_ADDRESS } from "constants/app";
import { useActiveWeb3React } from "./web3";

const getNFTById = async (contract, tokenId) => {
  const owner = await contract.ownerOf(tokenId);
  const uri = await contract.tokenURI(tokenId);

  const resp = await fetch(uri);
  const json = await resp.json();
  const image = json.image;

  return {
    id: parseInt(tokenId),
    uri,
    owner,
    image

  };
};

export const useNFT = (tokenId) => {
  const { library } = useActiveWeb3React();
  const [nft, setNft] = useState(null);

  useEffect(() => {
    let isSubscribed = true;
    const getNFT = async () => {
      const contract = new ethers.Contract(NFT_ADDRESS, abi, library);
      console.log('contract ', contract  )
      try {
        const nft = await getNFTById(contract, tokenId);
        
        if (isSubscribed) {
          setNft(nft);
        }
      } catch (err) {
        console.log(err);
      }
    };

    if (tokenId != null) {
      getNFT();
    }

    return () => (isSubscribed = false);
  }, [library, tokenId]);

  return nft;
};
