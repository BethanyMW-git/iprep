import React from 'react';
import { Typography } from '@mui/material';
//import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
//import { Carousel } from 'bootstrap';
import AppBar from '@mui/material/AppBar';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

//import './Homepage.css';

//<Carousel id="image-carousel-dishes" align="center"></Carousel>
//<Carousel id="image-carousel-ingredients" align="center"></Carousel>

export default function Homepage() {

    return (
        <>
            <div id="section-1" className="header">
                <Container maxWidth="lg" sx={{ color: "primary"}}>
                    <Typography variant="h2" color="secondary" className="logo" sx={{ mr: 150, mt: 8}}>iPrep</Typography>
                    <Button id="login-button" variant="contained" className="login-button" sx={{ bgcolor: "myCustomBlue.main", color: "#000000", mb: 5, mt: -7}}>Login</Button>
                    <Button id="signup-button" color="secondary" className="signup-button" sx={{ mr: -67, mb: 5, mt: -7}}>Sign Up</Button>
                </Container>
            </div>

            <div id="section-2">
                <Container sx={{ bgcolor: "myCustomBlue.main", display: 'flex'}}>
                    <Card sx={{mt: 5, mb: 5, maxWidth: 1440}}>
                        <CardMedia
                            alt="blue-counter-img"
                            component="img"
                            image={require('./media/blue-counter-bg-img.jpg')}
                            style={{height: 500}}
                        />
                    </Card>
                    <div>
                        <Typography variant="h1" align="center" color="primary" className="s2-h1" sx={{ fontWeight: 200, mb: 5, mt: 5}}>Perfectly curated, easy, and healthy.</Typography>
                        <Typography variant="h3" align="center" color="primary" className="s2-h3" sx={{ fontSize: 30, mb: 5}}>Bringing groceries to you based on what you like with recipes so you can prep like a champ.</Typography>
                    
                    <Button id="quiz-button" variant="contained" align="center" className="quiz-button" sx={{ bgcolor: "primary", mb: 5, display: 'inline-flex'}}>Take the quiz</Button>
                    </div>
                </Container>
            </div>
            <div id="section-3">
                <Container sx={{ display: 'flex', mb: 5}}>
                    <Card sx={{ width:"100%", mt: 5, mr: 5}}>
                        <CardActionArea>
                            <CardMedia
                                component="video"
                                image={"./public/media/video-yellow-pepper(2160p).mp4"}
                                autoPlay
                                //src="./public/media/video-yellow-pepper(2160p).mp4"
                            />
                        </CardActionArea>
                    </Card>
                    {/* <video alt="video-goes-here" src="./public/media/video-yellow-pepper(2160p).mp4"></video> */}
                    <div>
                    <Typography variant="h3" color="secondary" sx={{ fontSize: 30, fontWeight: 200, mt: 5}}>We make it super easy to turn your grocery list into dinner while saving you time.</Typography>
                    <Typography variant="h4" color="secondary" sx={{ fontSize: 22, fontWeight: 200, mt: 5}}>Check out our Recipe Catalog now to see how!</Typography>
                    <Button id="recipes-button" sx={{ bgcolor: '#FFFFFF', mt: 5}}>Recipes</Button>
                    </div>
                </Container>
            </div>
            <div id="section-4">
                <Container sx={{ mb: 5}}>
                    <Typography variant="h1" color="secondary" sx={{ fontSize: 64, mb: 5}}>Choose your favorites from our huge selection of recipes.</Typography>
                    <Typography variant="h3" color="secondary" sx={{ fontSize: 32, fontWeight: 200, mb: 5}}>Quick cook time and diet friendly.</Typography>
                    <Stack direction="row" spacing={2} justifyContent="center">
                        {/* <IconButton id="left-arrow"/> */}
                        <Avatar alt="salads" src="./media/plate-salad.jpg"/>
                        <Avatar alt="pastas" src="./media/plate1-pasta.png"/>
                        <Avatar alt="mains&sides" src="./media/p3.png"/>
                        <Avatar alt="sandwiches" src="./media/p4.png"/>
                        <Avatar alt="tacos" src="./media/carousel-tacos.jpg"/>
                        {/* <IconButton id="right-arrow"/> */}
                    </Stack>
                </Container>
            </div>
            <div id="section-5">
                <Container maxWidth="lg">
                    <Typography variant="h1" color="secondary">Ditch the grocery store.</Typography>
                    <Typography variant="h3" color="secondary">This is convenience in a box.</Typography>
                    
                </Container>
            </div>
            <div id="section-6">
                <Container maxWidth="lg">
                    <Typography variant="h2" align="center" color="primary">Ready to get started?</Typography>
                    <Button id="quiz-button" align="center" color="primary">Take the quiz</Button>
                </Container>
            </div>
            <div id="section-7">
                <Container maxWidth="lg">
                    <Typography variant="h1" align="center" color="primary">iPrep customers have good things to say:</Typography>
                    <div id="review-1">
                        <Avatar
                            alt="Hannah"
                            src="/public/media/review-hannah"
                            sx={{ width: 193, height: 190 }}
                        />
                        <Typography variant="h4" color="primary" paragraph>iPrep has changed my life for the better! I can't believe I have only just found it! I will recommend this meal kit company to everyone I know. The meals are so tasty. I was surprised at first, but I'm so glad I tried something new! Love, love, love iPrep!</Typography>
                        <Typography variant="h3" color="primary">Hannah B.</Typography>
                        <img alt="Hannah's-food" />
                    </div>
                    <div id="review-2">
                        <Avatar
                            alt="Justin"
                            src="/public/media/review-justin"
                            sx={{ width: 193, height: 190 }}
                        />
                        <Typography variant="h4" color="primary" paragraph>I have to say, iPrep turned out to be an extremely convenient tool fo rme as I am usually too busy from work and don't really feel like making anything complicated. The recipes I use from my meal kit are easy and extremely practicaly for what I need.</Typography>
                        <Typography variant="h3" color="primary">Justin T.</Typography>
                        <img alt="Justin's-food" />
                    </div>
                    <div id="review-3">
                        <Avatar
                            alt="Carlos"
                            src="/public/media/review-carlos"
                            sx={{ width: 193, height: 190 }}
                        />
                        <Typography variant="h4" color="primary" paragraph>Let's GOOOOO!!!!! iPrep is everything they say and more. I started off taking the quiz and ended up with a kit that was able to meet all of my dietary needs. Only tried a couple of recipes so far, but every single one has been delicious, chef-worthy stuff. Definitely coming back to iPrep for more!</Typography>
                        <Typography variant="h3" color="primary">Carlos S.</Typography>
                        <img alt="Carlos'-food"/>
                    </div>
                    <Link variant="h2" align="center" color="secondary" href="">Read More Reviews</Link>
                </Container>
            </div>

            <AppBar id="nav" position="relative">
                <div id="left-nav">
                    <Link variant="h2" color="secondary" href="">iPrep</Link>
                    <Link variant="h2" color="primary" href="">quiz</Link>
                    <Link variant="h2" color="primary" href="">recipes</Link>
                    <Link variant="h2" color="primary" href="">cart</Link>
                </div>
                <div id="right-nav">
                    <Link variant="h4" color="primary" href="">info</Link>
                    <Link variant="h4" color="primary" href="">philosophy</Link>
                    <Link variant="h4" color="primary" href="">sustainability</Link>
                    <Link variant="h4" color="primary" href="">careers</Link>
                    <Link variant="h4" color="primary" href="">contact us</Link>
                    <Link variant="h4" color="primary" href="">FAQ</Link>
                    <Link variant="h4" color="primary" href="">community</Link>
                    <Link variant="h4" color="primary" href="">blog</Link>
                    <Link variant="h4" color="primary" href="">instagram</Link>
                    <Link variant="h4" color="primary" href="">tiktok</Link>
                    <Link variant="h4" color="primary" href="">facebook</Link>
                </div>
            </AppBar>
        </>
    )
};