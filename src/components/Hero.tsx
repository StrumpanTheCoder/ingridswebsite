import React from "react";
import { Typography, Box } from "@mui/material";
import WavingHandIcon from "@mui/icons-material/WavingHand";
import meCadiz3 from "../assets/images/profile-pic-cadiz3.jpg";

const Hero = () => {
  return (
    <Box
      sx={{
        display: "flex", // Use flexbox for layout
        alignItems: "center", // Vertically center the content
        justifyContent: "center", // Center the content horizontally
        padding: "60px 16px",
        backgroundColor: "primary.main",
        color: "white",
        flexWrap: "wrap", // Ensure responsiveness on smaller screens
        height: "auto", // Make the hero section take up the full viewport height
      }}
    >
      <Box
        sx={{
          textAlign: "center",
          flex: "0 1 500px", // Allow the text to take up a maximum width of 500px
          marginRight: "32px", // Add spacing between the text and the image
        }}
      >
        <Typography variant="h2" gutterBottom>
          Hi, I'm Ingrid{" "}
          <WavingHandIcon
            sx={{
              fontSize: "1em", // Adjust the size of the icon
              color: "primary.light", // Use a color from your theme
            }}
          />{" "}
        </Typography>
        <Typography variant="h5" gutterBottom>
          I'm turning ideas into code
        </Typography>
        <Typography variant="h5" gutterBottom>
          and sometimes code into ideas
        </Typography>
      </Box>
      <Box
        component="img"
        src={meCadiz3}
        alt="Ingrid"
        sx={{
          width: "150px", // Adjust the size of the image
          height: "180px",
          borderRadius: "50%", // Make the image circular
          border: "4px solid", // Add a border
          borderColor: "secondary", // Use a theme color for the border
          flexShrink: 0, // Prevent the image from shrinking
        }}
      />
    </Box>
  );
};

export default Hero;
