import Typography from "@mui/material/Typography";
import logo from "../../img/ScarttProg.png";
import { Box, CardMedia } from "@mui/material";
import {
  ColorButton,
  boton,
  cardImg,
  cardSVG,
  // colorBoton,
  imagen,
  principal,
  texto,
} from "./styles";
import dowload from '../../img/dowload.svg'

const PieDePagina = () => {
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
          <ColorButton>Descargar CV  <CardMedia component="img" image={dowload} alt="descargar" sx={cardSVG} /></ColorButton>
        </Box>
      </Box>
    </>
  );
};

export default PieDePagina;