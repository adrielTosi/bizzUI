import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  optionItemContainer: block => {
    const containerWidth = block ? "100%" : "50%";
    const flexWrap = block ? "nowrap" : "wrap";
    const alignItems = block ? "center" : "initial";
    return {
      minHeight: 130,
      width: containerWidth,
      overflow: "hidden",
      display: "flex",
      flexWrap: flexWrap,
      justifyContent: "center",
      alignItems: alignItems,
      padding: "8px"
    };
  },
  image: block => {
    const display = block ? "flex" : "block";
    const justifyContent = block ? "initial" : "space-around";
    return {
      width: "100%",
      display: display,
      textAlign: "center",
      justifyContent: justifyContent
    };
  },
  titles: {
    display: "flex",
    flexDirection: "column",
    alingItems: "center"
  },
  title: {
    color: "#4f4f4f",
    fontSize: "1em",
    fontFamily: "'Open Sans', sans-serif"
  },
  subtitle: {
    color: "#bdbdbd",
    fontSize: "0.7em",
    fontFamily: "'Open Sans', sans-serif"
  }
});

// TODO: checked functionality
const BOptionItem = ({ url, block, title, subtitle }) => {
  const style = useStyles(block);
  return (
    <div className={style.optionItemContainer}>
      <div className={style.image}>
        <img src={url} alt="img" />
      </div>
      <div className={style.titles}>
        {title && <span className={style.title}>{title}</span>}
        {subtitle && <span className={style.subtitle}>{subtitle}</span>}
      </div>
    </div>
  );
};

BOptionItem.defaultProps = {
  block: false
};

export default BOptionItem;
