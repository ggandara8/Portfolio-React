import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import background from "./matrix.jpg";
import Avatar from "@material-ui/core/Avatar";
import logo from './DevG_Logo_Light.png';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  imageBackground: {
      backgroundImage: `url(${background})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      height: '100vh',
      padding: '20px',
      [theme.breakpoints.down('sm')]: {
        height: 'auto',
      },
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    backgroundColor: 'rgba(242, 242, 242, 1)'
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  navbar: {
    backgroundColor: "#071406",
    padding: "10px",
    position: "fixed",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  name: {
    color: "rgba(77, 232, 73, 1)",
    paddingTop: "40px",
    fontWeight: "600",
    fontSize: "80px",
    letterSpacing: "3px",
    marginTop: '100px',
  },
  bio: {
    color: "#f2f2f2",
    backgroundColor: "#113310",
    padding: "20px",
    borderRadius: "10px",
    letterSpacing: "1px"    
  },
  avatarStyle: {
    width: '150px',
    height: 'auto',
    borderRadius: 0,
    margin: '10px',
    [theme.breakpoints.down('sm')]: {},
  },
  Btn: {
    color: '#f2f2f2',
    width: "120px",
    marginLeft: "20px",
    fontSize: "20px"
  }
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Portfolio() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative" className={classes.navbar}>
        <Avatar className={classes.avatarStyle} src={logo}/>
        <Grid style={{display: "flex", alignItems: 'center'}}>
          <Button className={classes.Btn}>About</Button>
          <Button className={classes.Btn}>Portfolio</Button>
          <Button className={classes.Btn}>Contact</Button>
        </Grid>
      </AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.imageBackground}>
          <Container maxWidth="sm">
            <Typography className={classes.name} component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                Gerardo A. Gándara
            </Typography>
            <Typography className={classes.bio} variant="h5" align="center" color="textSecondary" paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Typography>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}