import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import "./Home.css";
import image from "../images/IMG_1259.jpg";
import resume from "../images/Resume Gerardo Gándara 2020 WD.pdf";

export default function Home() {
  return (
    <div>
      <Grid className="wrapper">
        <Grid item xs={12}>
          <Paper id="paper">
            Gerardo Gándara
            <img src={image} className="my-image" alt="Gerardo" />
          </Paper>
        </Grid>
        <div className="about_wrapper" item xs={12}>
          <h2>About</h2>
          <p id="about">
            My name is Gerardo Gándara and I’m currently a freelance web
            developer open for new opportunities in the industry. I enjoy
            creating full stack websites, recording my sports podcast Desde Las
            Palomas and playing basketball. If you want to know more about feel
            free to contact me or are interested in hiring me, here is my{" "}
            <a href={resume} target="_blank" style={{ color: "#fffefa" }}>
              resume
            </a>{" "}
            “If at first you don’t succeed; call it version 1.0”
          </p>
        </div>
      </Grid>
    </div>
  );
}
