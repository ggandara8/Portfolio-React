import React from "react";
import "./Portfolio.css";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";

const projects = [
  {
    id: "1",
    title: "Amazon Clone",
    description:
      "Amazon clone react app with simple firebase authentication, deployed with Firebase",
    github: "https://github.com/ggandara8/Amazon-Clone",
    deployedLink: "https://clone-600d7.web.app/",
  },
  {
    id: "2",
    title: "Chief System",
    description:
      "Full-Stack MERN app with JWT authentication for Inventory Management deployed with Heroku.",
    github: "https://github.com/rgarza28/Inventory-Manager",
    deployedLink: "https://lit-meadow-59526.herokuapp.com/",
  },
  {
    id: "3",
    title: "Guess The Quote 2.0",
    description:
      "Guess the quote game built with Javascript, Jquery, MySql, API, Express, Node app deployed with Heroku.",
    github: "https://github.com/ggandara8/Guess-The-Quote-2.0",
    deployedLink: "https://guess-the-quote-2.herokuapp.com/",
  },
  {
    id: "4",
    title: "Eat-Da-Burger",
    description:
      "This is a Burger Logger with MySQL, Node, Express, Handlebars and a homemade ORM deployed with Heroku.",
    github: "https://github.com/ggandara8/Eat-Da-Burger-App",
    deployedLink: "https://afternoon-beach-95475.herokuapp.com/",
  },
  {
    id: "5",
    title: "The Happy Place",
    description:
      "Take users to a happy place to cheer them up during quarantine. After quarantine it can be a good place to go for a pick me up while stuck in the office. Javascript, JQuery, API's and Zurb Foundation for the CSS framwork",
    github: "https://github.com/ggandara8/The-Happy-Place",
    deployedLink: "https://ggandara8.github.io/The-Happy-Place/",
  },
  {
    id: "6",
    title: "Budget Tracker",
    description:
      "Budget Tracker application that allows for offline access and functionality. Javascript, MongoDB, Webpack, Service Workers and IndexedDB",
    github: "https://github.com/ggandara8/Budget-Tracker",
    deployedLink: "https://tranquil-fortress-46901.herokuapp.com/",
  },
];

export default function Portfolio() {
  return (
    <div id="portfolio" style={{ padding: 40, backgroundColor: "#00030c" }}>
      <Grid container spacing={3}>
        {projects.map((item, i) => (
          <Grid item xs={6} sm={4}>
            <Card
              key={item.id}
              style={{
                backgroundColor: "#D9D9D9",
                borderRadius: "10px",
                boxShadow: "2px 2px 4px #2E8634",
                border: "2px solid #00030c",
              }}
              className="root"
            >
              <CardActionArea>
                <CardContent>
                  <div className="project_name" component="h2">
                    {item.title}
                  </div>
                  <p>{item.description}</p>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  href={item.github}
                  target="_blank"
                  size="small"
                  color="primary"
                >
                  GitHub
                </Button>
                <Button
                  href={item.deployedLink}
                  target="_blank"
                  size="small"
                  color="primary"
                >
                  Web
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
