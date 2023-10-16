export const principal = {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    padding: "25px 0",
    backgroundColor: "color.azul",
  };
  
  export const grid = {
    width: "70%",
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    justifyItems: "center",
    height: "450px",
    alignItems: "center",
  
    "@media(max-width: 1024px)": {
      width: "100%",
    },
  };
  
  export const titulo = {
    "@media(max-width: 540px)": {
      fontSize: "2.75rem",
    },
  };
  
  export const listImg = {
    width: 150,
  
    "@media(max-width: 540px)": {
      width: 120,
    },
  };