export default {
  optionItemContainer: ({ block, checked }) => {
    const containerWidth = block ? "100%" : "50%"
    const flexWrap = "wrap"
    const alignItems = block ? "center" : "initial"
    const selectedBackground = checked ? "#e8f7e5" : ""
    return {
      minHeight: 80,
      width: containerWidth,
      display: "flex",
      display: "-webkit-flex",
      flexWrap: flexWrap,
      justifyContent: "center",
      alignItems: alignItems,
      padding: "8px",
      cursor: "pointer",
      backgroundColor: selectedBackground,
      borderRadius: 8,
      position: "relative",
      maxWidht: "100%",
    }
  },
  image: ({ block }) => {
    const display = block ? "flex" : "block"
    const webkitDisplay = block ? "-webkit-flex" : "block"
    return {
      width: "100%",
      maxWidth: "100%",
      display: "flex",
      display: "-webkit-flex",
      textAlign: "center",
    }
  },
  titles: {
    display: "flex",
    flexDirection: "column",
    alingItems: "center",
    textAlign: "center",
  },
  title: {
    color: "#4f4f4f",
    fontSize: "1em",
    fontFamily: "'Open Sans', sans-serif",
  },
  subtitle: {
    color: "#bdbdbd",
    fontSize: "0.7em",
    fontFamily: "'Open Sans', sans-serif",
  },
  checked: {
    position: "absolute",
    right: -10,
    top: -10,
  },
  insideContainer: {
    maxWidth: "100%",
  },
}
