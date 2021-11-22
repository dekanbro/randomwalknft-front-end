import React from "react";
import { Link } from "react-router-dom";
import { Typography, Card, CardActionArea } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";

import useStyles from "config/styles";
import { useNFT } from "hooks/useNFT";
import { formatId } from "utils";

const NFT = ({ tokenId }) => {
  const classes = useStyles();
  const nft = useNFT(tokenId);
  console.log("nft1", nft)

  return (
    <Card>
      <CardActionArea component={Link} to={nft ? `/detail/${nft.id}` : "#"}>
        {!nft ? (
          <Skeleton
            animation="wave"
            variant="rect"
            className={classes.nftImage}
          />
        ) : (
          <embed src={nft.image} />
        )}
        {nft && (
          <Typography className={classes.nftInfo} variant="body1">
            {formatId(nft.id)}
          </Typography>
        )}
      </CardActionArea>
    </Card>
  );
};

export default NFT;
