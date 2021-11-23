import React, { useState } from "react";

import {
  Box,
  Paper,
  Typography,
  Container,
  Grid,
  Link,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";

import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

import useStyles from "config/styles";
import QuestionIcon from "assets/svg/question_icon.svg";

const FAQ = () => {
  const items = [
    {
      summary: "How do I mint FOMO NFTs?",
      detail:
        "You need <a style='color: #fff' href='https://metamask.io'>MetaMask</a> extension installed in your browser. " +
        "You need some ETH on Arbitrum. You can transfer ETH from Ethereum to Arbitrum using <a style='color: #fff' href='https://hop.exchange'>Hop</a>, " +
        "<a style='color: #fff' href='https://bridge.arbitrum.io'>Arbitrum Bridge</a> or you can withdraw from exchanged directly to Arbitrum using <a style='color: #fff' href='https://www.layerswap.io'>LayerSwap</a>.",
    },
    {
      summary: "How do I add Arbitrum to my MetaMask?",
      detail:
        "Check out this <a style='color: #fff' href='https://help.uniswap.org/en/articles/5538707-how-to-connect-to-arbitrum'>simple guide</a>.",
    },
    {
      summary: "How many FOMO NFTs will there be?",
      detail:
        "Every time an NFT is minted, the price of the next mint increases by about 0.1%.",
    },
    {
      summary: "Where does the ETH go that people paid for minting?",
      detail:
        "We are doing a social experiment with it! " +
        "ETH will be distributed to some of the minters. After there hasn't been a mint for 3 days, the last minter is eligible to withdraw 20% of the ETH in the NFT contract. " +
        "%80 will go to a DAO of previous minters that tribute their NFT to the DAO." +
        "Find details about this project here <a style='color: #fff' href='https://randomwalknft.com/'>More Info</a>",
    },
    {
      summary: "Are the contracts verified on Etherscan?",
      detail:
        "Check out this <a style='color: #fff' href='https://mirror.xyz/dekan.eth/g0N2iuLqYWsQPVHUsqipdKOurDRMuQ39UN6-VctHyR8'>NFT Contract</a>, ",
    },
    {
      summary: "How are the NFT images generated?",
      detail:
        "When you mint, a SVG is minted on chain. The DAO has the ability to change the background for each round through governance",
    },
    {
      summary: "Why should I join the DAO?",
      detail: "Think of it like plating a seed. You mint the NFT to get the seed and you plant it in the dao to get some percentage of the future withdraws.",
    },
    {
      summary: "How Do I join the DAO?",
      detail: "See this tutorial <a style='color: #fff' href='https://app.daohaus.club/dao/0xa4b1/0xf2ebff62ff6cc2e90f2ec0f1a6a241d3628d810d/'>DAO</a>",
    },
    {
      summary: "How Does the DAO work?",
      detail:
        "There are 2 types of ownership in a Moloch DAO, loot holders and share holders. Loot holders have pure economic rights meaning they can rage quit with their fair share of the treasury at any time. Share holders have this but also have execution responsibility, they can vote on new member proposals and build transaction to execute against the DAO funds." +
        "A NFT tribute gets 100 loot shares and its the responsibility of the share holders to vote them in." +
        "To start the DAO has 14 share holding members (just cloned the members of the arbitrum nft grant dao) with 10 shares each. anyone can apply to become a share holder if they want to help take on the responsibility of managing the operations of the dao.",
    },
    {
      summary: "Does the creator of the NFT get any special privileges?",
      detail: "No",
    },
    {
      summary: "How is this related to Random Walk NFT",
      detail:
        "It is not associated with it in any way. " +
        "The code was forked and modified from the Random Walk contract and frontend. " +
        "Find details about that project here <a style='color: #fff' href='https://randomwalknft.com/'>More Info</a>",
    },
  ];

  const classes = useStyles();

  const [expanded, setExpanded] = useState(null);

  const handleChange = (index) => (event, isExpanded) => {
    setExpanded(isExpanded ? index : false);
  };

  return (
    <Container className={classes.root}>
      <Typography variant="h4" color="secondary" gutterBottom>
        FAQ
      </Typography>
      <Typography variatn="body1" gutterBottom>
        Get answers to the most common questions
      </Typography>
      <Box mt={4}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={8}>
            {items.map(({ summary, detail }, i) => (
              <Accordion
                key={i}
                expanded={expanded === i}
                onChange={handleChange(i)}
              >
                <AccordionSummary
                  expandIcon={
                    expanded === i ? (
                      <RemoveIcon color="primary" fontSize="small" />
                    ) : (
                      <AddIcon color="primary" fontSize="small" />
                    )
                  }
                >
                  <Box display="flex" alignItems="center">
                    <img
                      src={QuestionIcon}
                      className={classes.questionIcon}
                      alt="icon"
                    />
                    <Typography variant="body2">{summary}</Typography>
                  </Box>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography
                    variant="body2"
                    align="left"
                    dangerouslySetInnerHTML={{ __html: detail }}
                  />
                </AccordionDetails>
              </Accordion>
            ))}
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <Paper>
              <Box p={4}>
                <Typography variant="h5" gutterBottom>
                  Have a question?
                </Typography>
                <Typography
                  variant="body2"
                  gutterBottom
                  style={{ lineHeight: 2 }}
                >
                  Have more questions, reach out to us on&nbsp;
                  <Link color="primary" href="https://twitter.com">
                    Twitter (Coming Soon)
                  </Link>
                  &nbsp;or&nbsp;
                  <Link color="primary" href="https://discord.com">
                    Discord (coming soon)
                  </Link>
                </Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default FAQ;
