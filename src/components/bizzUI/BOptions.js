import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  optionContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    height: "100%"
  }
});

const BOptions = ({ children }) => {
  const style = useStyles();
  return <div className={style.optionContainer}>{children}</div>;
};

export default BOptions;
