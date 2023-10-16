import { Button } from "@mui/material";
import { amber } from "@mui/material/colors";
import { styled } from "@mui/material/styles";

export const principal = {
  display: "flex",
  width: "100%",
  background: "linear-gradient(to right, black, #333)",
  justifyContent: "space-around",
};

export const cardImg = {
  width: "45%",

  "@media(max-width: 1024px)": {
    width: "70%",
  },

  "@media(max-width: 768px)": {
    width: "90%",
  },
};

export const imagen = {
  width: "30%",
  padding: 3,

  "@media(max-width: 768px)": {
    padding: 2,
  },

  "@media(max-width: 540px)": {
    width: "35%",
    padding: 0.5,
  },
};

export const texto = {
  width: "30%",
  color: "white",
  padding: 3,
  display: "flex",
  justifyContent: "flex-end",
  flexDirection: "column",
  gap: "7px",
  alignItems: "center",
};

export const boton = {
  width: "30%",
  padding: 3,
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "center",
};

export const ColorButton = styled(Button)({
  color: "white",
  border: `2px solid ${amber[700]}`,
  fontSize: 18,
  width: "50%",
  height: "25%",

  "&:hover": {
    border: `2px solid ${amber[300]}`,
    boxShadow: `0 0.5em 0.5em -0.4em ${amber[300]}`,
    transform: "translateY(-0.25em)",
  },
});

export const cardSVG = {
  width: "24%",
  padding: "0 13px",

  "@media(max-width: 768px)": {
    padding: "0 4px",
  },
};


// export const colorBoton = {
//   "@media(max-width: 1024px)": {
//     width: "100%",
//     height: "40%",
//     fontSize: 16,
//   },
// };