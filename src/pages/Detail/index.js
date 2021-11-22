import React, { useState } from "react";
import { useHistory } from "react-router";
import { useParams } from "react-router-dom";

import { Container, Box, Divider } from "@material-ui/core";
import { Alert } from "@material-ui/lab";

import useStyles from "config/styles";
import { useNFT } from "hooks/useNFT";
// import { useActiveWeb3React } from "hooks/web3";

import { Trait } from "./Trait";

import "./index.css";

const Detail = () => {
  const classes = useStyles();
  const { id } = useParams();
  const { location } = useHistory();
  const nft = useNFT(id);
  // const { account, library } = useActiveWeb3React();
  const [darkTheme] = useState(true);

  if (!nft) return <></>;

  return (
    <Container
      maxWidth={false}
      className={classes.root}
      style={{ paddingLeft: 0, paddingRight: 0 }}
    >
      {location.state && location.state.message && (
        <Box px={8} mb={2}>
          <Alert variant="outlined" severity="success">
            {location.state.message}
          </Alert>
        </Box>
      )}
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        style={{ position: "relative", height: 60 }}
      >
        <Divider style={{ background: "#121212", width: "100%" }} />
      </Box>
      <Trait
        nft={nft}
        darkTheme={darkTheme}
        seller={location.state ? location.state.seller : null}
      />
    </Container>
  );
};

export default Detail;
