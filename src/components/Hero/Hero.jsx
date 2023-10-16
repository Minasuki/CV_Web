import { Box, Divider, Link, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import { principal, tituloChico, tituloGrande, tituloMedio, titulos } from "./styles";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ThemeSwitcher from "../Theme/Theme";

const Hero = () => {
  return (
    <>
      <Box sx={principal}>
        <Box sx={titulos}>
          <Typography variant="h5" color={"white"} sx={tituloMedio}>
            Programador Web
          </Typography>
          <Typography variant="h3" color={"white"} sx={tituloGrande}>
            Baez Jossiel
          </Typography>
          <Divider color={"white"} />
          <Typography variant="body1" color={"white"} sx={tituloChico}>
            <b>Correo:</b>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;jossiel2023@gmail.com
          </Typography>
          <Typography variant="body1" color={"white"} sx={tituloChico}>
            <b>GitHub:</b>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link
              href="https://github.com/Minasuki"
              underline="hover"
              style={{ display: "inline-block", textAlign: "center" }}
              target="_blank"
            >
              <GitHubIcon
              sx={tituloMedio}
                style={{ verticalAlign: "middle" }}
              />
            </Link>
          </Typography>
          <Typography variant="body1" color={"white"} sx={tituloChico}>
            <b>LinkedIn:</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link
              style={{ display: "inline-block", textAlign: "center" }}
              href="https://www.linkedin.com/in/jossiel-armando-baez-perez-b668a0286/"
              underline="hover"
              target="_blank"
            >
              <LinkedInIcon
              sx={tituloMedio}
                style={{ verticalAlign: "middle" }}
              />
            </Link>
          </Typography>
        </Box>
        <ThemeSwitcher/>
      </Box>
    </>
  );
};

export default Hero;