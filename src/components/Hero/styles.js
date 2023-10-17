export const principal = {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    paddingTop: "5vh",
    paddingBottom: "5vh",
    background: "linear-gradient(to right, #333, black)",
    alignItems: "flex-start",
  };
  
  export const titulos = {
    width: "65%",
    display: "grid",
    gap: "20px",
    justifyContent: "start",
  
    "@media(max-width: 1024px)": {
      width: "75%",
    },
  };
  
  export const imagen = {
    width: "40%",
  };
  
  export const tituloGrande = {
    fontSize: "7rem",
  
    "@media(max-width: 540px)": {
      fontSize: "5.5rem",
    },

    "@media(max-width: 280px)": {
      fontSize: "4rem",
    },
  };
  
  export const tituloMedio = {
    fontSize: "3rem",
  
    "@media(max-width: 540px)": {
      fontSize: "2.5rem",
    },

    "@media(max-width: 280px)": {
      fontSize: "1.5rem",
    },
  };
  
  export const tituloChico = {
    fontSize: "1.25rem",
  
    "@media(max-width: 540px)": {
      fontSize: "1rem",
    },

    "@media(max-width: 280px)": {
      fontSize: "0.9rem",
    },
  };