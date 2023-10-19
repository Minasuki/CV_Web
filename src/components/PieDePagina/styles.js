import { Button } from "@mui/material";
import { amber } from "@mui/material/colors";
import { styled } from "@mui/material/styles";

export const principal = {
  display: "flex",
  width: "100%",
  background: "linear-gradient(to right, black, #333)",
  justifyContent: "space-around",

  "@media(max-width: 540px)": {
    alignItems: "center",
    flexDirection: "column",
  },
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
    width: "50%",
    padding: 2,
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

  "@media(max-width: 412px)": {
    width: "100%",
  },
};

export const boton = {
  width: "30%",
  padding: 3,
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "center",

  "@media(max-width: 540px)": {
    width: "60%",
    padding: 0,
  },

  "@media(max-width: 412px)": {
    width: "100%",
  },
};

export const ColorButton = styled(Button)({
  color: "white",
  border: `2px solid ${amber[700]}`,
  fontSize: 17,
  width: "50%",
  height: "25%",

  "&:hover": {
    border: `2px solid ${amber[300]}`,
    boxShadow: `0 0.5em 0.5em -0.4em ${amber[300]}`,
    transform: "translateY(-0.25em)",
  },

  "@media(max-width: 1280px)": {
    width: "100%",
    height: "40%",
    fontSize: 16,
  },

  "@media(max-width: 768px)": {
    fontSize: 12,
  },

  "@media(max-width: 540px)": {
    height: "20%",
    width: "70%",
  },

  "@media(max-width: 412px)": {
    width: "50%",
  },

  "@media(max-width: 280px)": {
    width: "55%",
  },
});

export const cardSVG = {
  width: "24%",
  padding: "0 13px",

  "@media(max-width: 768px)": {
    padding: "0 4px",
  },
};
