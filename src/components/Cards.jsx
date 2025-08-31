import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { API_OPTIONS } from "../utility/constant";

const images = [
  {
    title: "APOD",
    width: "50%",
    path: "/apod",
    api: "apod",
  },
  {
    title: "Mars Rover Cameras",
    width: "50%",
    path: "/mars-rover",
    api: "mars-rover",
  },
  {
    title: "Camera",
    width: "50%",
    path: "/apod",
    api: "camera",
  },
  {
    title: "Camera",
    width: "50%",
    path: "/apod",
    api: "camera",
  },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: "relative",
  height: 200,
  [theme.breakpoints.down("sm")]: {
    width: "100% !important",
    height: 100,
  },
  "&:hover, &.Mui-focusVisible": {
    zIndex: 1,
    "& .MuiImageBackdrop-root": {
      opacity: 0.15,
    },
    "& .MuiImageMarked-root": {
      opacity: 0,
    },
    "& .MuiTypography-root": {
      border: "4px solid currentColor",
    },
  },
}));

const ImageSrc = styled("span")({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: "cover",
  backgroundPosition: "center 40%",
});

const Image = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create("opacity"),
}));

const ImageMarked = styled("span")(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: "absolute",
  bottom: -2,
  left: "calc(50% - 9px)",
  transition: theme.transitions.create("opacity"),
}));

export default function Cards() {
  const navigate = useNavigate();
  const [imageMap, setImageMap] = React.useState({});

  React.useEffect(() => {
    images.forEach(async (card) => {
      let url = "";
      if (card.api === "apod") {
        url = `/nasa/planetary/apod?api_key=${
          import.meta.env.VITE_NASA_API_KEY
        }`;
      } else if (card.api === "mars-rover") {
        url = `/nasa/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=fhaz&api_key=${
          import.meta.env.VITE_NASA_API_KEY
        }`;
      }

      try {
        const response = await fetch(url, API_OPTIONS);
        const json = await response.json();

        let imageUrl = "";
        if (card.api === "apod") {
          imageUrl = json.hdurl;
        } else if (card.api === "mars-rover") {
          console.log("mars Rover json", json);
          imageUrl = json.photos?.[0]?.img_src;
        }

        setImageMap((prev) => ({
          ...prev,
          [card.title]: imageUrl,
        }));
      } catch (error) {
        console.error(`Error fetching image for ${card.title}`, error);
      }
    });
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        paddingTop: "200px",
        minWidth: 500,
        width: "100%",
      }}
    >
      {images.map((image) => (
        <ImageButton
          focusRipple
          key={image.title}
          style={{ width: image.width }}
          onClick={() => navigate(image.path)}
        >
          <ImageSrc
            style={{
              backgroundImage: `url(${imageMap[image.title]})`,
            }}
          />
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Image>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              sx={(theme) => ({
                position: "relative",
                p: 4,
                pt: 2,
                pb: `calc(${theme.spacing(1)} + 6px)`,
              })}
            >
              {image.title}
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>
        </ImageButton>
      ))}
    </Box>
  );
}
