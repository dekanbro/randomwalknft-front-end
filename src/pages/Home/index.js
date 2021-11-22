import React from 'react'
import {
  Container,
  Box,
  Typography,
  Button,
  Link,
  Hidden,
} from '@material-ui/core'

import whiteLineImage from 'assets/white_line.png'
import useStyles from 'config/styles'

const Home = (props) => {
  const classes = useStyles()

  return (
    <>
      <div

      >
        <Container className={classes.root}>
          <Typography variant="h4" className={classes.centerMobile}>
            <Typography variant="h4" component="span" color="primary">
              FOMO
            </Typography>
            &nbsp;
            <Typography variant="h4" component="span">
              NFT
            </Typography>
            &nbsp;
            <Typography variant="h4" component="span" color="secondary">
              DAO
            </Typography>
          </Typography>
          <Box mt={3}>
            <Typography align="left" variant="body1" gutterBottom>
              100% of the ΞTH spent on minting goes back to the minters through
              an&nbsp;
              <Link href="/redeem" style={{ cursor: 'pointer' }}>
                interesting mechanism
              </Link>
              .
            </Typography>
            <Typography align="left" variant="body1" gutterBottom>
              Trade your NFTs on the built in 0.00% fee marketplace.
            </Typography>
          </Box>
          <Box mt={3} className={classes.centerMobile}>
            <Button className={classes.mintButton} component="a" href="/mint">
              Mint now
            </Button>
            <Hidden smDown>
              <div
                style={{
                  background: `url(${whiteLineImage}) left top`,
                  width: 64,
                  height: 8,
                }}
              ></div>
            </Hidden>
          </Box>
        </Container>
      </div>
    </>
  )
}

export default Home
