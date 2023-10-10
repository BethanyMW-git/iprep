import React from 'react';
import { Typography } from '@mui-material';
import { Button } from '@mui/material/Button';
import { Carousel } from 'bootstrap';
import { AppBar, Card, CardActionArea, CardMedia, Container, Link } from '@mui/material';

export default Homepage = () => {
    return (
        <>
            <div id="section-1">
                <Container maxWidth="lg">
                    <Typography variant="h2" color="textSecondary">iPrep</Typography>
                    <Button id="login-button" variant="contained" color="textPrimary">Login</Button>
                    <Button id="signup-button" variant="outlined" color="textSecondary">Sign Up</Button>
                </Container>
            </div>

            <main>
                <div id="section-2">
                    <Container maxWidth="lg">
                        <img alt="blue-counter-bg-img" src="/public/media/blue-counter-bg-img"/>
                        <div>
                            <Typography variant="h1" align="center" color="textPrimary">Perfectly curated, easy, and healthy.</Typography>
                            <Typography variant="h3" align="center" color="textPrimary">Bringing groceries to you based on what you like with recipes so you can prep like a champ.</Typography>
                        </div>
                        <Button id="quiz-button" variant="contained" align="center" color="textSecondary">Take the quiz</Button>
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
                        <Typography variant="h3" color="textSecondary">We make it super easy to turn your grocery list into dinner while saving you time.</Typography>
                        <Typography variant="h4" color="textSecondary">Check out our Recipe Catalog now to see how!</Typography>
                        <Button id="recipes-button" color="textPrimary">Recipes</Button>
                    </Container>
                </div>
                <div id="section-4">
                    <Container maxWidth="lg">
                        <Typography variant="h1" color="textSecondary">Choose your favorites from our huge selection of recipes.</Typography>
                        <Typography variant="h3" color="textSecondary">Quick cook time and diet friendly.</Typography>
                        <Carousel id="image-carousel-dishes" align="center"></Carousel>
                    </Container>
                </div>
                <div id="section-5">
                    <Container maxWidth="lg">
                        <Typography variant="h1" color="textSecondary">Ditch the grocery store.</Typography>
                        <Typography variant="h3" color="textSecondary">This is convenience in a box.</Typography>
                        <Carousel id="image-carousel-ingredients" align="center"></Carousel>
                    </Container>
                </div>
                <div id="section-6">
                    <Container maxWidth="lg">
                        <Typography variant="h2" align="center" color="textPrimary">Ready to get started?</Typography>
                        <Button id="quiz-button" align="center" color="textPrimary">Take the quiz</Button>
                    </Container>
                </div>
                <div id="section-7">
                    <Container maxWidth="lg">
                        <Typography variant="h1" align="center" color="textPrimary">iPrep customers have good things to say:</Typography>
                        <div id="review-1">
                            <Avatar
                                alt="Hannah"
                                src="/public/media/review-hannah"
                                sx={{ width: 193, height: 190 }}
                            />
                            <Typography variant="h4" color="textPrimary" paragraph>iPrep has changed my life for the better! I can't believe I have only just found it! I will recommend this meal kit company to everyone I know. The meals are so tasty. I was surprised at first, but I'm so glad I tried something new! Love, love, love iPrep!</Typography>
                            <Typography variant="h3" color="textPrimary">Hannah B.</Typography>
                            <img/>
                        </div>
                        <div id="review-2">
                            <Avatar
                                alt="Justin"
                                src="/public/media/review-justin"
                                sx={{ width: 193, height: 190 }}
                            />
                            <Typography variant="h4" color="textPrimary" paragraph>I have to say, iPrep turned out to be an extremely convenient tool fo rme as I am usually too busy from work and don't really feel like making anything complicated. The recipes I use from my meal kit are easy and extremely practicaly for what I need.</Typography>
                            <Typography variant="h3" color="textPrimary">Justin T.</Typography>
                            <img/>
                        </div>
                        <div id="review-3">
                            <Avatar
                                alt="Carlos"
                                src="/public/media/review-carlos"
                                sx={{ width: 193, height: 190 }}
                            />
                            <Typography variant="h4" color="textPrimary" paragraph>Let's GOOOOO!!!!! iPrep is everything they say and more. I started off taking the quiz and ended up with a kit that was able to meet all of my dietary needs. Only tried a couple of recipes so far, but every single one has been delicious, chef-worthy stuff. Definitely coming back to iPrep for more!</Typography>
                            <Typography variant="h3" color="textPrimary">Carlos S.</Typography>
                            <img/>
                        </div>
                        <Link variant="h2" align="center" color="textSecondary">Read More Reviews</Link>
                    </Container>
                </div>
            </main>

            <AppBar id="nav" position="relative" gutterBottom>
                <div id="left-nav">
                    <Link variant="h2" color="textSecondary">iPrep</Link>
                    <Link variant="h2" color="textPrimary">quiz</Link>
                    <Link variant="h2" color="textPrimary">recipes</Link>
                    <Link variant="h2" color="textPrimary">cart</Link>
                </div>
                <div id="right-nav">
                    <Link variant="h4" color="textPrimary">info</Link>
                    <Link variant="h4" color="textPrimary">philosophy</Link>
                    <Link variant="h4" color="textPrimary">sustainability</Link>
                    <Link variant="h4" color="textPrimary">careers</Link>
                    <Link variant="h4" color="textPrimary">contact us</Link>
                    <Link variant="h4" color="textPrimary">FAQ</Link>
                    <Link variant="h4" color="textPrimary">community</Link>
                    <Link variant="h4" color="textPrimary">blog</Link>
                    <Link variant="h4" color="textPrimary">instagram</Link>
                    <Link variant="h4" color="textPrimary">tiktok</Link>
                    <Link variant="h4" color="textPrimary">facebook</Link>
                </div>
            </AppBar>
        </>
    )
};