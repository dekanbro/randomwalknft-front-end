import { createTheme, makeStyles } from "@material-ui/core/styles";

export const theme = createTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#C676D7",
    },
    secondary: {
      main: "#F4BFFF",
    },
    info: {
      main: "#FFFFFF",
    },
    text: {
      primary: "#FFFFFF",
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
    MuiCard: {
      root: {
        border: "1px solid #F4BFFF",
        boxSizing: "border-box",
        borderRadius: 20,
        filter: "drop-shadow(0px 0px 5px #C676D7)",
      },
    },
    MuiButton: {
      root: {
        borderRadius: 0,
        textTransform: "none",
      },
      sizeLarge: {
        padding: "10px 28px",
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
        fontSize: 24,
      },
    },
  },
});

const useStyles = makeStyles(
  (theme) => ({
    root: {
      paddingTop: theme.spacing(28),
      overflow: "hidden",
      lineHeight: 1,
    },
    gridContainer: {
      padding: theme.spacing(8),
      [theme.breakpoints.down("md")]: {
        padding: theme.spacing(6),
      },
      [theme.breakpoints.down("sm")]: {
        padding: theme.spacing(3),
      },
      [theme.breakpoints.down("xs")]: {
        padding: theme.spacing(2),
      },
      paddingBottom: 0,
    },
    appBar: {
      backgroundColor: "#000",
      paddingTop: theme.spacing(3),
    },
    toolbarButtons: {
      marginLeft: "auto",
    },
    wallet: {
      marginLeft: "auto",
      padding: 8,
      height: "auto",
    },
    navItem: {
      color: "#fff",
      textDecoration: "none",
      textTransform: "uppercase",
    },
    nftImage: {
      width: "100%",
      paddingTop: "64%",
    },
    nftInfo: {
      position: "absolute",
      top: 20,
      right: 24,
    },
    nftPrice: {
      borderRadius: 3,
      backgroundColor: "#C676D7",
      padding: "3px 12px",
      marginTop: 12,
    },
    salesSection: {
      padding: theme.spacing(2),
    },
    faqCard: {
      padding: "1rem",
      marginBottom: "2.5rem",
      backgroundColor: "#000",
      borderRadius: 18,
      // boxShadow: "8px 8px #1E2525",
    },
    footer: {
      textAlign: "center",
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
  }),
  { index: 1 }
);

export default useStyles;
