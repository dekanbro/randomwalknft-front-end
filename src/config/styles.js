import { createTheme, makeStyles } from "@material-ui/core/styles";

export const theme = createTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#adacac",
    },
    secondary: {
      main: "#dbdbdb",
    },
    info: {
      main: "#FFFFFF",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#adacac",
    },
    background: {
      default: "#000000",
      paper: "#121212",
    },
  },
  typography: {
    fontFamily: "Kelson Sans",
    fontSize: 18,
  },
  overrides: {
    MuiTypography: {
      root: {
        overflowWrap: "break-word",
      },
    },
    MuiCard: {
      root: {
        border: "1px solid #dbdbdb",
        boxSizing: "border-box",
        borderRadius: 20,
        boxShadow: "0px 0px 10px #adacac",
      },
    },
    MuiButton: {
      root: {
        borderRadius: 0,
        textTransform: "none",
      },
      sizeLarge: {
        padding: "9px 28px",
      },
    },
    MuiInputBase: {
      root: {
        borderRadius: 4,
      },
    },
    MuiFilledInput: {
      input: {
        padding: 16,
        fontSize: 16,
        background: "rgba(38, 50, 56, 0.73)",
        boxShadow: "0px 0px 40px rgba(0, 0, 0, 0.25)",
      },
      underline: {
        "&:before": {
          content: "",
        },
      },
    },
    MuiTableCell: {
      root: {
        fontSize: 14,
      },
      head: {
        fontSize: 20,
      },
    },
    MuiAccordion: {
      root: {
        border: "1px solid #dbdbdb",
        marginBottom: 16,
        padding: "12px 16px",
      },
      rounded: {
        borderRadius: "0 !important",
      },
    },
    MuiTableContainer: {
      primary: {
        backgroundColor: "#121212",
      },
    },
  },
});

const useStyles = makeStyles(
  (theme) => ({
    root: {
      paddingTop: theme.spacing(28),
      paddingBottom: theme.spacing(24),
      overflow: "hidden",
      lineHeight: 1,
      [theme.breakpoints.down("sm")]: {
        textAlign: "center",
        paddingTop: theme.spacing(18),
        paddingBottom: theme.spacing(18),
      },
    },
    drawerList: {
      paddingTop: theme.spacing(2),
      width: 265,
      height: "100%",
      backgroundColor: "#200C31",
      borderLeft: "1px solid #dbdbdb",
    },
    appBar: {
      backgroundColor: "#000",
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
    connectBtn: {
      marginLeft: "auto",
    },
    connectBtnMobile: {
      margin: "0 auto",
    },
    wallet: {
      marginLeft: "auto",
      padding: 8,
      height: "auto",
    },
    walletMobile: {
      margin: "0 auto",
      padding: 8,
      height: "auto",
    },
    navItem: {
      color: "#fff",
      textTransform: "uppercase",
    },
    sectionTitle: {
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      justifyContent: "center",
    },
    centerMobile: {
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      justifyContent: "flex-start",
      [theme.breakpoints.down("sm")]: {
        justifyContent: "center",
      },
    },
    nftImage: {
      width: "100%",
      paddingTop: "64%",
    },
    nftVideo: {
      border: "none",
      boxShadow: "0px 0px 10px #000000",
      position: "relative",
    },
    nftVideoPlay: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      cursor: "pointer",
    },
    nftInfo: {
      position: "absolute",
      top: 20,
      right: 24,
    },
    nftPrice: {
      borderRadius: 3,
      backgroundColor: "#adacac",
      padding: "3px 12px",
      marginTop: 12,
    },
    salesSection: {
      padding: theme.spacing(2),
    },
    questionIcon: {
      marginRight: "0.5rem",
    },
    footer: {
      top: "auto",
      bottom: 0,
      backgroundColor: "#200C31",
    },
    address: {
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
    socialButtons: {
      display: "flex",
      justifyContent: "center",
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3),
    },
    mintButton: {
      width: 128,
      height: 128,
      borderRadius: "100%",
      border: "1px solid #fff",
    },
    mintActiveButton: {
      width: 128,
      height: 128,
      borderRadius: "100%",
      border: "1px solid #dbdbdb",
      backgroundColor: "#303030",
    },
    tablePrimary: {
      backgroundColor: "#121212",
    },
    tableSecondary: {
      backgroundColor: "#242424",
    },
    searchBar: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginBottom: theme.spacing(4),
      [theme.breakpoints.down("xs")]: {
        flexDirection: "column",
      },
    },
    searchField: {
      marginRight: theme.spacing(1),
      width: 360,
      [theme.breakpoints.down("xs")]: {
        marginRight: 0,
        marginBottom: theme.spacing(2),
        width: "100%",
      },
    },
    searchButton: {
      [theme.breakpoints.down("xs")]: {
        width: "100%",
      },
    },
    section1: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
      [theme.breakpoints.down("sm")]: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
      },
    },
    section2: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
      background: "#141414",
      [theme.breakpoints.down("sm")]: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
      },
    },
    wrap: {
      overflowWrap: "break-word",
    },
  }),
  { index: 1 }
);

export default useStyles;
