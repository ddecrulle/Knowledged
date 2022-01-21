import Header from "components/header/component";
import Button from "@mui/material/Button";
import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => {
  return {
    root: {
      backgroundColor: "pink",
    },
    button: {
      backgroundColor: "red",
      marginLeft: "",
    },
  };
});

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header />
      <Button variant="outlined" className={classes.button}>
        Text
      </Button>
    </div>
  );
}

export default App;
