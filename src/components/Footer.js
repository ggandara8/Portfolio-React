import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";

function Copyright() {
  return (
    <Typography variant="body2" style={{ color: "white" }}>
      {"Copyright © "}
      <Link color="white" href="https://github.com/ggandara8" target="_blank">
        Gerardo Gándara
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: "auto",
    backgroundColor: "#00030c",
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Copyright />
          <a
            href="https://github.com/ggandara8"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i
              class="fab fa-github"
              style={{ color: "white", margin: "10px" }}
            ></i>
          </a>
          <a
            href="https://www.linkedin.com/in/ggandara8/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i
              class="fab fa-linkedin"
              style={{ color: "white", margin: "10px" }}
            ></i>
          </a>
          <a
            href="https://www.instagram.com/ggandara8/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i
              class="fab fa-instagram"
              style={{ color: "white", margin: "10px" }}
            ></i>
          </a>
          <a
            href="https://www.facebook.com/geral84/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i
              class="fab fa-facebook"
              style={{ color: "white", margin: "10px" }}
            ></i>
          </a>
        </Container>
      </footer>
    </div>
  );
}
