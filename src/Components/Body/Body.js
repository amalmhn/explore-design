import React from 'react'
import { Button, Card, Col, Container, Jumbotron, Row } from 'react-bootstrap'
import './Body.css'

function Body() {
    return (
        <div className="body-div">
            <div className="cards-info">
                <Container>
                    <Row>
                        <Col className="cardsInfo" sm>
                            <Card className="cardsInfo1" style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title><h2>Travel Updates & Policies</h2></Card.Title>
                                    <Card.Text className="card-p">
                                        Review travel policies, open countries and operations relating to the Coronavirus. International travel returns, including flexible booking and travel options.
                                    </Card.Text>
                                    <Button className="cards-btns" variant="danger">Read More</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="cardsInfo" sm>
                            <Card className="cardsInfo2" style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title><h2>Travel With Flexibility</h2></Card.Title>
                                    <Card.Text>
                                        A complimentary Peace of Mind Travel Plan is attached to your booking. You can move to any other 2021 or 2022 date, destination, or itinerary.
                                    </Card.Text>
                                    <Button className="cards-btns" variant="danger">Read More</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="cardsInfo" sm>
                            <Card className="cardsInfo3" style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title><h2>Committed to Your Safety</h2></Card.Title>
                                    <Card.Text>
                                        Our Global Health & Safety Team has established a worldwide Assurance program, with enhanced on-trip protocols and procedures.
                                    </Card.Text>
                                    <Button className="cards-btns" variant="danger">Read More</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="banner-marketing">
                <Jumbotron className="marketing-jumbo">
                    <h1>Our latest package!</h1>
                    <h2>South wales, UK</h2>
                    <p>
                        South Wales incorporates the Welsh capital of Cardiff, along with some of the country's loveliest scenery. Little surprise, then, that this beautiful region consistently <span className="highlight-span">ranks as one of the top places to visit in the UK.</span>
                    </p>
                    <p>
                        <Button className="marketing-btns" variant="danger">Book Now</Button>
                    </p>
                </Jumbotron>
            </div>
            <div className="cards-info">
                <Container>
                    <Row>
                        <Col className="cardsInfo" sm>
                            <Card className="cardsInfo4" style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title><h2>World Tours</h2></Card.Title>
                                    <Button className="cards-btns" variant="danger">Book Now</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="cardsInfo" sm>
                            <Card className="cardsInfo5" style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title><h2>India Tours</h2></Card.Title>
                                    <Button className="cards-btns" variant="danger">Book Now</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="cardsInfo" sm>
                            <Card className="cardsInfo6" style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title><h2>Kerala Tours</h2></Card.Title>
                                    <Button className="cards-btns" variant="danger">Book Now</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="details-div">
                <Container>
                    <Row>
                        <Col sm>
                            <h1>&#128646;</h1>
                            <h3>Transportation</h3>
                            <p>Spectacular train rides, breathtaking cable car ascents, overnight cruise ships,
                            scenic day ferries, private first-class motorcoaches (most with free Wi-Fi) -
                            Cosmos offers a wonderful variety of transportation for a memorable
                                travel experience.</p>
                        </Col>
                        <Col sm>
                            <h1>&#9968;</h1>
                            <h3>Sightseeing</h3>
                            <p>Our packages include guided sightseeing and scenic highlights that reveal the best of your destination. Enjoy inside visits of the must-see sites with knowledgeable Local Guides who will bring each destination to life.</p>
                        </Col>
                        <Col sm>
                            <h1>&#129523;</h1>
                            <h3>Personalization with MySites</h3>
                            <p>We build free time into every vacation, so you can eat, shop, and explore the way you want. Whether you're into art, music, food, wine, history, or whatever, we give you the freedom to truly personalize your trip with optional excursions.</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm>
                            <h1>&#127828;</h1>
                            <h3>Meals</h3>
                            <p>When it comes to meals, Cosmos strikes a perfect balance. We include some meals to save you time and money, yet we also leave enough free time so you can sample gastronomic delights on your own.</p>
                        </Col>
                        <Col sm>
                            <h1>&#128719;</h1>
                            <h3>Accommodations</h3>
                            <p>After a day of traveling you want to relax at a comfortable, clean, and attractive hotel. We select hotels with the best guestrooms (always with a private bathroom), service, and food for the money. See individual itinerary pages for hotels.</p>
                        </Col>
                        <Col sm>
                            <h1>&#129517;</h1>
                            <h3>Guidance</h3>
                            <p>At the heart of every great tour are the friendly, knowledgeable folks who show you around and help you maximize your free time. We go to incredible lengths to find the most professional Tour Directors and Local Guides.</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm></Col>
                        <Col sm>
                            <Button className="cards-btns" variant="danger">Why travel with Explore?</Button>
                        </Col>
                        <Col sm></Col>
                    </Row>
                </Container>
            </div>
            <div className="travel-blog">
                <h1 className="travelBlog-h1">Travel Blogs</h1>
                <p className="travelBlog-h1">Please take a look on some of our customer's travel blogs</p>
                <Container>
                    <Row>
                        <Col sm className="travelBlog1">
                            <h1>Pink City of India</h1>
                        </Col>
                        <Col sm className="travelBlog2">
                            <h1>God's own country</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm className="travelBlog3">
                        <h1>Our Italian Journey</h1>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Body
