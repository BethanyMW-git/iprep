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
import './Homepage.css';

//<Carousel id="image-carousel-dishes" align="center"></Carousel>
//<Carousel id="image-carousel-ingredients" align="center"></Carousel>

export default function Homepage() {
    return (
        <>
            <div id="section-1" className="header">
                <Container maxWidth="lg">
                    <Typography variant="h2" color="secondary" className="logo">iPrep</Typography>
                    <Button id="login-button" variant="contained" color="primary" className="login-button">Login</Button>
                    <Button id="signup-button" color="secondary" className="signup-button">Sign Up</Button>
                </Container>
            </div>

            <div id="section-2">
                <Container maxWidth="lg">
                    <Card>
                        <CardMedia
                            image={require('./media/blue-counter-bg-img.jpg')}
                            style={{height: 500, width: 1000}}
                        />
                    </Card>
                    <div>
                        <Typography variant="h1" align="center" color="primary" className="s2-h1">Perfectly curated, easy, and healthy.</Typography>
                        <Typography variant="h3" align="center" color="primary" className="s2-h3">Bringing groceries to you based on what you like with recipes so you can prep like a champ.</Typography>
                    </div>
                    <Button id="quiz-button" variant="contained" align="center" color="secondary" className="quiz-button">Take the quiz</Button>
                </Container>
            </div>
            <div id="section-3">
                <Container maxWidth="lg">
                    <Card>
                        <CardActionArea>
                            <CardMedia
                                component="video"
                                image={"/public/media/video-yellow-pepper(2160p).mp4"}
                                allow="autoPlay"
                            />
                        </CardActionArea>
                    </Card>
                    <Typography variant="h3" color="secondary">We make it super easy to turn your grocery list into dinner while saving you time.</Typography>
                    <Typography variant="h4" color="secondary">Check out our Recipe Catalog now to see how!</Typography>
                    <Button id="recipes-button" color="primary">Recipes</Button>
                </Container>
            </div>
            <div id="section-4">
                <Container maxWidth="lg">
                    <Typography variant="h1" color="secondary">Choose your favorites from our huge selection of recipes.</Typography>
                    <Typography variant="h3" color="secondary">Quick cook time and diet friendly.</Typography>
                    
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