import { Box, Grid, ImageListItem, CardMedia, Typography } from "@mui/material";
import itemData from "./DatosSkills";
import { grid, listImg, principal, titulo } from "./styles";

const Skills = () => {
  return (
    <>
      <Box sx={principal}>
        <Typography variant="h3" fontWeight={700} sx={titulo}>Skills</Typography>
        <Grid sx={grid}>
          {itemData.map((item) => (
            <ImageListItem sx={listImg} key={item.img}>
              <CardMedia
                title=""
                image={item.img}
                component="img"
                alt={item.img}
                height="100%"
              />
            </ImageListItem>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Skills;