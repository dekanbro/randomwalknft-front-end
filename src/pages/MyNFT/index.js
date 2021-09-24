import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import { Container, Typography, Box } from "@material-ui/core";

import abi from "abis/contract";
import { CONTRACT_ADDRESS } from "constants/app";
import useStyles from "config/styles";
import { useActiveWeb3React } from "hooks/web3";
import PaginationGrid from "components/PaginationGrid";

const MyNFTs = () => {
  const classes = useStyles();
  const [loading, setLoading] = useState(true);
  const [nftIds, setNftIds] = useState([]);
  const { account, library } = useActiveWeb3React();

  useEffect(() => {
    let isSubscribed = true;

    const getTokens = async () => {
      try {
        setLoading(true);
        const contract = new ethers.Contract(CONTRACT_ADDRESS, abi, library);
        const tokens = await contract.walletOfOwner(account);
        const nftIds = tokens.map((t) => t.toNumber());
        if (isSubscribed) {
          setNftIds(nftIds);
          setLoading(false);
        }
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };

    if (account) {
      getTokens();
    }

    return () => (isSubscribed = false);
  }, [library, account]);

  return (
    <Container className={classes.root}>
      <Box pt={6}>
        <Typography variant="h4" gutterBottom>
          My Random Walk NFTs
        </Typography>
        <PaginationGrid loading={loading} data={nftIds} />
      </Box>
    </Container>
  );
};

export default MyNFTs;
