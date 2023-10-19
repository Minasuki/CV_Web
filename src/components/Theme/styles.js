export const principal = {
    display: "flex",
    width: "15%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 1,
    p: 2.5,
    color: "white",
  
    "@media(max-width: 1024px)": {
      width: "20%",
      flexDirection: "column-reverse",
    },
  
    "@media(max-width: 540px)": {
      fontSize: "x-small",
    },

    "@media(max-width: 414px)": {
      padding:0,
    },
  };