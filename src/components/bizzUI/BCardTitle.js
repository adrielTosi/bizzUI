import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  cardTitleContainer: {
    width: "100%",
    minHeight: "20%",
    display: "flex",
    alignItems: "center",
    fontFamily: "'Krub', sans-serif",
    marginBottom: '1em'
  },
  cardTitle: {
    fontWeight: "500",
    fontSize: "1.6em",
    color: "#4F4F4F"
  }
});

const BCardTitle = ({ title }) => {
  const style = useStyles();
  return (
    <div className={style.cardTitleContainer}>
      <span className={style.cardTitle}>{title}</span>
    </div>
  );
};

export default BCardTitle;
