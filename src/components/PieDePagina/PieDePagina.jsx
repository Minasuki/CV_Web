import Typography from "@mui/material/Typography";
import logo from "../../img/ScarttProg.png";
import { Box, CardMedia } from "@mui/material";
import {
  ColorButton,
  boton,
  cardImg,
  cardSVG,
  imagen,
  principal,
  texto,
} from "./styles";
import dowload from "../../img/dowload.svg";
import cv from "./CV.pdf";

const PieDePagina = () => {
  const pdfFileName = cv;

  const handleDownloadPDF = () => {
    const a = document.createElement("a");
    a.href = pdfFileName;
    a.download = 'CV Baez Perez';
    a.click();
  };
  return (
    <>
      <Box sx={principal}>
        <Box sx={imagen}>
          <CardMedia component="img" alt="Logo" image={logo} sx={cardImg} />
        </Box>
        <Box sx={texto}>
          <Typography fontSize={"1.1rem"} variant="body1">
            Jossiel Baez
          </Typography>
          <Typography fontSize={"1.1rem"} variant="body1">
            2023
          </Typography>
        </Box>
        <Box sx={boton}>
          <ColorButton onClick={handleDownloadPDF}>
            Descargar CV{" "}
            <CardMedia
              component="img"
              image={dowload}
              alt="descargar"
              sx={cardSVG}
            />
          </ColorButton>
        </Box>
      </Box>
    </>
  );
};

export default PieDePagina;
