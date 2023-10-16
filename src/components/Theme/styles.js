export const principal = {
    display: "flex",
    width: "10%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 1,
    p: 3,
    color: "white",
  
    "@media(max-width: 1024px)": {
      width: "20%",
      flexDirection: "column-reverse",
    },
  
    "@media(max-width: 540px)": {
      fontSize: "x-small",
    },
  };