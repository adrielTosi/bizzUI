import React from "react";
import { createUseStyles } from "react-jss";

// TODO: add props to modify style and default props
const useStyle = createUseStyles({
  cardContainer: {
    minWidth: 250,
    maxWidth: 450,
    minHeight: 250,
    borderRadius: 8,
    border: "1px solid #8DE971",
    backgroundColor: "#f7fff5",
    padding: 16
  }
});

const BCard = ({ children }) => {
  const style = useStyle();

  const renderChildren = () => {
    const title = [];
    const rest = [];
    // Separates the children into Title and Rest, so title is always displayed above
    const arrayChildren = React.Children.toArray(children);
    arrayChildren.forEach(child => {
      if (child.type && child.type.name === "BCardTitle") {
        title.push(child);
      } else {
        rest.push(child);
      }
    });
    return (
      <div className={style.cardContainer}>
        <div>{title.length !== 0 && title[0]}</div>
        <div>{rest && rest.map(item => <> {item} </>)}</div>
      </div>
    );
  };
  return renderChildren();
};

export default BCard;