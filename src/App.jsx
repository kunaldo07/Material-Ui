import React from 'react';
import {Typography, AppBar, Card, Button,CardActions,CardContent, CardMedia, CssBaseline,Grid,Toolbar,Container} from '@material-ui/core'; 
import { PhotoCamera } from '@material-ui/icons';
import useStyles from './styles';

const cards = [1,2,3,4,5,6,7,8,9];

const App = () => {

  const classes = useStyles();

  return (
      <>
        <CssBaseline/> 
        <AppBar position='relative'>
          <Toolbar>
            <PhotoCamera className={classes.icon}/>
            <Typography variant='h6'>
              Photo Album
            </Typography>
          </Toolbar>
        </AppBar>
        <main>
            <div className={classes.container}>
              <Container maxWidth="sm">
                <Typography variant='h2' align='center' color='textPrimary' gutterBottom>
                  Photo Album
                </Typography>
                <Typography variant='h5' align='center' color='textSecondary' paragraph>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente iste iure tenetur vero. Natus et aliquam dolore dolorem nihil odio dolor, repellendus, perspiciatis ducimus voluptas veritatis consectetur. Beatae, saepe nesciunt!
                </Typography>
                <div className={classes.buttons}>
                  <Grid container spacing={2} justify='center'>
                    <Grid item>
                      <Button variant='contained' color='primary'>
                        Photos
                      </Button>
                      <Button variant='outlined' color='primary'>
                        Upload
                      </Button>
                    </Grid>
                  </Grid>
                </div>
              </Container>
              <Container className={classes.cardGrid}>
                <Grid container spacing={8}>
                  {cards.map((card) => (

                    <Grid item key={card} xs={12} sm={6} md={4}>
                      <Card className={classes.card}>
                          <CardMedia
                            className={classes.cardMedia}
                            image="https://source.unsplash.com/random"
                            title="Image title"
                          />
                          <CardContent className={classes.CardContent}>
                            <Typography gutterBottom variant="h5">
                                Heading
                            </Typography>
                            <Typography>
                                This is media card, you can use this section to describe the content.
                            </Typography>
                          </CardContent>
                          <CardActions>
                              <Button size="small" color="primary">VIEW</Button>
                              <Button size="small" color="primary">EDIT</Button>
                          </CardActions>
                      </Card>
                    </Grid>

                  ))}
                </Grid>
              </Container>
            </div>
          </main>

          <footer className={classes.footer}>
                <Typography variant='h6' align='center' gutterBottom>
                    Footer
                </Typography>
                <Typography variant='subtitle1' align='center' color='textSecondary'>
                    Explore More
                </Typography>
          </footer>
      </>
  );
};

export default App;
