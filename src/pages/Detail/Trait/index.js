import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { ethers } from "ethers";
import {
  Box,
  Container,
  Typography,
  Card,
  CardActionArea,
  Button,
  TextField,
  Grid,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { CopyToClipboard } from "react-copy-to-clipboard";
import Lightbox from "react-awesome-lightbox";
import "react-awesome-lightbox/build/style.css";

import "react-modal-video/css/modal-video.min.css";

import abi from "abis/nft";
// import marketABI from "abis/market";
import {  NFT_ADDRESS } from "constants/app";
import useStyles from "config/styles";
import { useActiveWeb3React } from "hooks/web3";
import { formatId } from "utils";

const useCustomStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    width: "100%",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
  details: {
    display: "flex",
    flexDirection: "column",
    width: "60%",
    padding: theme.spacing(2),
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  content: {
    flex: "1 0 auto",
    padding: theme.spacing(1),
    [theme.breakpoints.down("xs")]: {
      minHeight: "300px",
    },
  },
  coverWrapper: {
    width: "40%",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
}));

export const Trait = ({ nft, darkTheme, seller }) => {
  const {
    id,
    owner,
  } = nft;

  // const [open, setOpen] = useState(false);
  const [imageOpen, setImageOpen] = useState(false);
  // const [sellPrice, setSellPrice] = useState(null);
  // const [price, ] = useState("");
  const [address, setAddress] = useState("");
  const [accountTokenIds, setAccountTokenIds] = useState([]);

  const classes = useStyles();
  const customClasses = useCustomStyles();
  const { account, library } = useActiveWeb3React();
  const history = useHistory();

  // const handleMakeSell = async () => {
  //   const signer = library.getSigner();
  //   const contract = new ethers.Contract(NFT_ADDRESS, abi, signer);
  //   const market = new ethers.Contract(MARKET_ADDRESS, marketABI, signer);

  //   try {
  //     const approvedAll = await contract.isApprovedForAll(
  //       account,
  //       MARKET_ADDRESS
  //     );
  //     if (!approvedAll) {
  //       await contract
  //         .setApprovalForAll(MARKET_ADDRESS, true)
  //         .then((tx) => tx.wait());
  //     }
  //     await market
  //       .makeSellOffer(NFT_ADDRESS, id, ethers.utils.parseEther(price))
  //       .then((tx) => tx.wait());
  //     window.location.reload();
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  const handleTransfer = async () => {
    const signer = library.getSigner();
    const contract = new ethers.Contract(NFT_ADDRESS, abi, signer);

    try {
      await contract.transferFrom(account, address, id).then((tx) => tx.wait());
      history.push("/my-nfts");
    } catch (err) {
      console.log(err);
    }
  };

  const handlePrev = () => history.push(`/detail/${Math.max(id - 1, 0)}`);

  const handleNext = async () => {
    const contract = new ethers.Contract(NFT_ADDRESS, abi, library);
    const totalSupply = await contract.totalSupply();
    history.push(`/detail/${Math.min(id + 1, totalSupply.toNumber() - 1)}`);
  };

  const handlePrevInWallet = () => {
    const index = accountTokenIds.indexOf(id);
    history.push(`/detail/${accountTokenIds[Math.max(index - 1, 0)]}`);
  };

  const handleNextInWallet = async () => {
    const index = accountTokenIds.indexOf(id);
    history.push(
      `/detail/${
        accountTokenIds[Math.min(index + 1, accountTokenIds.length - 1)]
      }`
    );
  };

  // useEffect(() => {
  //   setTheme(darkTheme ? "black" : "white");
  // }, [darkTheme]);

  // useEffect(() => {
  //   const { hash } = location;
  //   if (hash === "#black_image" || hash === "#white_image") {
  //     setTheme(hash.includes("black") ? "black" : "white");
  //     setImageOpen(true);
  //   } else if (
  //     hash === "#black_single_video" ||
  //     hash === "#white_single_video"
  //   ) {
  //     setTheme(hash.includes("black") ? "black" : "white");
  //     handlePlay(
  //       hash.includes("black") ? black_single_video : white_single_video
  //     );
  //   } else if (
  //     hash === "#black_triple_video" ||
  //     hash === "#white_triple_video"
  //   ) {
  //     setTheme(hash.includes("black") ? "black" : "white");
  //     handlePlay(
  //       hash.includes("black") ? black_triple_video : white_triple_video
  //     );
  //   }
  // }, [
  //   location,
  //   black_single_video,
  //   white_single_video,
  //   black_triple_video,
  //   white_triple_video,
  // ]);

  // useEffect(() => {
  //   const getSellOffer = async (id) => {
  //     const offer = await getOfferById(library, id);
  //     setSellPrice(offer.price);
  //   };
  //   if (sellOfferIds.length > 0) {
  //     getSellOffer(sellOfferIds[0]);
  //   }

  //   return () => setSellPrice(null);
  // }, [library, sellOfferIds]);

  useEffect(() => {
    const getAccountTokenIds = async () => {
      const contract = new ethers.Contract(NFT_ADDRESS, abi, library);
      const tokenIds = await contract.walletOfOwner(account);
      setAccountTokenIds(tokenIds.map((tokenId) => tokenId.toNumber()));
    };
    if (account) {
      getAccountTokenIds();
    }
  }, [account, library]);

  return (
    <Box>
      <Box className={classes.section1}>
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={7} md={4} lg={4}>
              <Card className={customClasses.root}>
                <CardActionArea onClick={() => setImageOpen(true)}>
                  <embed src={nft.image} />
                  <div className={classes.nftInfo}>
                    <Typography
                      className={classes.nftId}
                      variant="body1"
                      gutterBottom
                      style={{
                        color: "#FFFFFF",
                      }}
                    >
                      {formatId(id)}
                    </Typography>
                  </div>
                </CardActionArea>
              </Card>
              <Box mt={2}>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <Button
                      variant="outlined"
                      color="primary"
                      style={{ width: "100%" }}
                      onClick={handlePrev}
                    >
                      Prev
                    </Button>
                  </Grid>
                  <Grid item xs={6}>
                    <Button
                      variant="outlined"
                      color="primary"
                      style={{ width: "100%" }}
                      onClick={handleNext}
                    >
                      Next
                    </Button>
                  </Grid>
                </Grid>
              </Box>
              {account === (seller || owner) && accountTokenIds.length > 0 && (
                <Box mt={1}>
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <Button
                        variant="outlined"
                        color="primary"
                        style={{ width: "100%" }}
                        onClick={handlePrevInWallet}
                      >
                        Prev In Wallet
                      </Button>
                    </Grid>
                    <Grid item xs={6}>
                      <Button
                        variant="outlined"
                        color="primary"
                        style={{ width: "100%" }}
                        onClick={handleNextInWallet}
                      >
                        Next In Wallet
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              )}
              {imageOpen && (
                <Lightbox
                  image={nft.image}
                  onClose={() => setImageOpen(false)}
                />
              )}
            </Grid>
            <Grid item xs={12} sm={5} md={4} lg={3}>
              <Box>
                <Typography align="left" variant="body1" color="secondary">
                  Owner
                </Typography>
                <Typography
                  align="left"
                  variant="body2"
                  color="textPrimary"
                  gutterBottom
                >
                  <Link
                    style={{ color: "#fff" }}
                    to={`/gallery?address=${seller || owner}`}
                  >
                    {seller || owner}
                  </Link>
                </Typography>
              </Box>
              
              
              <Box mt={2}>
                <CopyToClipboard text={window.location.href}>
                  <Button
                    variant="outlined"
                    color="primary"
                    style={{ width: "100%" }}
                  >
                    Copy link
                  </Button>
                </CopyToClipboard>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={5}>
              <Box>
                {account === nft.owner ? (
                  <>
                    <Box mb={3}>
                      <Typography gutterBottom variant="h6" align="left">
                        TRANSFER
                      </Typography>
                      <Box display="flex">
                        <TextField
                          variant="filled"
                          color="secondary"
                          placeholder="Enter address here"
                          fullWidth
                          size="small"
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                        />
                        <Button
                          color="secondary"
                          variant="contained"
                          onClick={handleTransfer}
                        >
                          Send
                        </Button>
                      </Box>
                    </Box>
                  </>
                ) : null
                }
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};
