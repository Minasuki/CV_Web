import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Link,
    Typography,
  } from "@mui/material";
  import proyectos from "./DatosPortafolio";
  import {
    cardStyles,
    principal,
    titulo,
    tarjetas,
    cardImg,
    Botones,
    cardContent,
  } from "./styles";
  import OpenInNewIcon from "@mui/icons-material/OpenInNew";
  import { GitHub } from "@mui/icons-material";
  
  const Portafolio = () => {
    return (
      <>
        <Box sx={principal}>
          <Box>
            <Typography variant="h2" fontWeight={700} sx={titulo}>
              Portafolio
            </Typography>
          </Box>
          <Box sx={tarjetas}>
            {Object.keys(proyectos).map((proyectoKey) => (
              <Card
                key={proyectoKey}
                sx={cardStyles}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "scale(1.1)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                <CardMedia
                  component="img"
                  alt={proyectos[proyectoKey].name}
                  height="140"
                  image={proyectos[proyectoKey].img}
                  sx={cardImg}
                />
                <CardContent sx={cardContent}>
                  <Typography gutterBottom variant="h4" component="div">
                    {proyectos[proyectoKey].name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    fontSize={18}
                  >
                    {proyectos[proyectoKey].description}
                  </Typography>
                  <CardActions>
                    <Link href={proyectos[proyectoKey].git} target="_blank">
                      <Button sx={Botones}>
                        {
                          <GitHub
                            style={{ fontSize: "3rem", verticalAlign: "middle" }}
                          />
                        }
                      </Button>
                    </Link>
                    <Link href={proyectos[proyectoKey].pag} target="_blank">
                      <Button sx={Botones}>
                        {
                          <OpenInNewIcon
                            style={{ fontSize: "3rem", verticalAlign: "middle" }}
                          />
                        }
                      </Button>
                    </Link>
                  </CardActions>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Box>
      </>
    );
  };
  
  export default Portafolio;