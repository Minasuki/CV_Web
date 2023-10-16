export const principal = {
    display: "flex",
    width: "70%",
    alignItems: "center",
    flexDirection: "column",
    padding: "20px 0",
  
    "@media(max-width: 1024px)": {
      width: "90%",
    },
  };
  
  export const cardStyles = {
    width: "100%",
    height: 400,
    transition: "transform 0.2s",
    display: "flex",
    flexDirection: "row",
    margin: "25px 0",
  
    "@media(max-width: 1024px)": {
      flexDirection: "column",
      height: "100%",
    },
  };
  
  export const titulo = {
    paddingTop: "40px",
    paddingBottom: "40px",
  
    "@media(max-width: 540px)": {
      fontSize: '2.75rem',
    },
  };
  
  export const tarjetas = {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "column",
  };
  
  export const cardImg = {
    height: "95%",
    width: "95%",
  };
  
  export const Botones = {
    "&:hover": {
      backgroundColor: "#ff9900",
      color: "#fff",
    },
  };
  
  export const cardContent = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "100%",
    height: "100%",
  };