import Box from "@mui/material/Box";
import { StaticImage } from "gatsby-plugin-image";
import { Button } from "gatsby-theme-material-ui";
import * as React from "react";
import Typography from "@mui/material/Typography";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Helmet } from "react-helmet";

import "./index.css";

const IndexPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        padding: "40px 80px",
        gap: "20px",
        textAlign: "center",
        background: "black",
        color: "#fafafa",
      }}
    >
      <Helmet
        title="Oxcycle"
        htmlAttributes={{
          lang: "en",
        }}
      />
      <StaticImage
        placeholder="none"
        src="../images/oxcycle.png"
        objectFit="contain"
        alt="Logo"
      />
      <Typography variant="h1">Oxcycle</Typography>
      <Typography>
        Say 'hi' to our bot on WhatsApp and start recycling now!
      </Typography>
      <Button
        startIcon={<WhatsAppIcon />}
        variant="contained"
        href="https://wa.me/14155238886?text=join%20simply-till"
        target="_blank"
      >
        WhatsApp
      </Button>
    </Box>
  );
};

export default IndexPage;
