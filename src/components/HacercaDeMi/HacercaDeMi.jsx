import { Box, Typography } from "@mui/material";
import { body2, principal, puntos, titulo } from "./styles";

const HacercaDeMi = () => {
  return (
    <>
      <Box sx={principal}>
        <Typography variant="h3" fontWeight={700} padding={"30px 0"} sx={titulo}>
          Hacerca de mí
        </Typography>
        <Typography variant="body2" sx={body2} fontSize={"1.25rem"}>
          ¡Hola! Soy un apasionado programador de Front-End con un profundo
          conocimiento en programación web y base de datos, respaldado por una
          sólida experiencia en el lenguaje Java. Mi objetivo es fusionar la
          creatividad y la tecnología para crear experiencias de usuario
          excepcionales y funcionales.
        </Typography>

        <Box sx={puntos}>
          <Typography variant="body2" fontSize={"1.1rem"}>
            <b>Desarrollo Web Front-End:</b> Poseo amplia experiencia en el
            desarrollo de interfaces de usuario atractivas y altamente
            funcionales utilizando tecnologías como HTML, CSS y JavaScript. Mi
            enfoque se centra en la creación de sitios web y aplicaciones web
            responsivas que brindan una experiencia de usuario fluida y
            satisfactoria.
          </Typography>

          <Typography variant="body2" fontSize={"1.2rem"}>
            <b>Base de Datos:</b> Tengo un sólido conocimiento en la gestión de
            bases de datos, incluyendo diseño, implementación y optimización. He
            trabajado con sistemas de gestión de bases de datos SQL como MySQL y
            PostgreSQL, y noSQL como MongoDB, y comprendo la importancia de
            mantener los datos seguros y accesibles.
          </Typography>

          <Typography variant="body2" fontSize={"1.1rem"}>
            <b>Programación en Java:</b> Mi experiencia en programación en Java
            abarca desde aplicaciones de escritorio hasta aplicaciones web
            empresariales. He desarrollado soluciones Java que abarcan una
            variedad de sectores, desde sistemas de gestión de inventario hasta
            aplicaciones de seguimiento de pedidos.
          </Typography>

          <Typography variant="body2" fontSize={"1.1rem"}>
            <b>Desarrollo Ágil:</b> Estoy familiarizado con metodologías de
            desarrollo ágil, lo que me permite trabajar de manera colaborativa y
            eficiente en equipos multidisciplinarios para lograr objetivos
            comunes.
          </Typography>

          <Typography variant="body2" fontSize={"1.1rem"}>
            <b>Resolución de Problemas:</b> Disfruto enfrentando desafíos
            técnicos y abordando problemas complejos con soluciones creativas y
            efectivas.
          </Typography>
        </Box>

        <Typography variant="h5" fontWeight={700}>Trayectoria Profesional</Typography>
        <Typography variant="body2" sx={body2} fontSize={"1.25rem"}>
          A lo largo de mi carrera, he tenido la oportunidad de contribuir a una
          variedad de proyectos emocionantes que han requerido un enfoque
          equilibrado entre la estética y la funcionalidad. Mi experiencia en el
          desarrollo Front-End, junto con mis habilidades en base de datos y
          Java, me ha permitido desempeñar un papel fundamental en la creación
          de soluciones web sólidas.
        </Typography>
      </Box>
    </>
  );
};

export default HacercaDeMi;