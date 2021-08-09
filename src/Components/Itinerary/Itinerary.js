import React from 'react'
import { Button, Container, Jumbotron } from 'react-bootstrap'
import './Itinerary.css'

function Itinerary() {
    return (
        <div className="itinerary-div">
            <h1 className="italy-h1">Italy's Best</h1>
            <h4 className="italy-h1">7 Day Tour from Rome to Venice Area</h4>
            <div className="italy-pic">
                <Jumbotron fluid className="italy-jumbo">
                </Jumbotron>
            </div>
            <div className="itinerary-details">
                <Container className="itineraryDetails-container">
                    <div className="tour-details">
                        <h5>2021 TOUR DETAILS</h5>
                        <p>With its magnificent architecture, beautiful landscapes, sumptuous cuisine, ancient ruins, and brilliant art, Italy is a country like no other. On this affordable Italy’s Best tour, you’ll experience all of this and more. One of the tour’s highlights is the excursion to the Cinque Terre—five medieval seaside villages. The area is noted for its natural beauty with terraces built into the mountainside on cliffs that drop down into the sea. Delight in the unique charm of the area and take in the breathtaking views. </p>
                        <p>On your journey through Tuscany, watch the undulating hills, terraced vineyards, olive groves, and rural villages. More breathtaking scenery awaits at Lake Maggiore, one of Italy’s largest lakes. Located on the edge of the Swiss Alps, it’s the perfect place to relax and soak in the beauty. From here, you’ll even take an excursion to Lugano, a lakeside town in Switzerland. In southern Italy, witness breathtaking views of the crystal-clear, blue sea in the relaxing town of Sorrento, and take a day trip to Capri where the crashing sea has formed awe-inspiring caves</p>
                        <p>History comes alive on this Italy tour. Visit Pompeii, which was completely buried during the eruption of Mount Vesuvius in 79 AD. This preserved archaeological site gives you an amazingly detailed insight into ordinary life at the peak of the Roman Empire. In Rome, during the city sightseeing tour with a local guide, you’ll see the main sights, as well as Vatican City with St Peter’s Basilica. </p>
                        <p>In Genoa, boasting Europe’s largest medieval historical center, see the remains of the city’s 17th-century fortifications. Visit St Francis’ Basilica in Assisi, a medieval town set in the Umbrian hills. Guided city sightseeing tours are planned in Rome, Florence, Assisi and Genoa. Your visit to Venice includes a boat trip to St Mark’s square to see the maze of canals forming this unique romantic city.</p>
                        <p>These are just some of the many highlights of this affordable tour through Italy! </p>
                    </div>
                    <div className="meals">
                        <h5>&#127828;MEALS</h5>
                        <p>Buffet breakfast daily; 4 dinners</p>
                        <p> <strong>Notes:</strong> December 24 Departure – Christmas in Rome and New Year’s Eve in Venice, including festive dinner </p>
                    </div>
                    <div className="itinerary">
                        <h5>&#128197;ITINERARY</h5>
                        <br />
                        <h6><span className="day-span">Day 1</span> ARRIVE IN ROME, ITALY</h6>
                        <p>Check into your hotel. The rest of the day is free for you to explore this ancient capital.
                            This evening, meet your Tour Director and fellow travelers.</p>
                        <h6><span className="day-span">Day 2</span> ROME</h6>
                        <p>The “Eternal City” is steeped in history, vibrantly alive and exciting, and absolutely unique! Start the included introduction to Rome’s landmarks from St. Peter’s Square with a Local Guide. Enjoy a drive along the iconic landmarks of the city: the Tiber River, the Caius Cestius Pyramid, the Aurelian Walls and the Caracalla Baths. Complete the experience with a walk back in time from the Circus Maximus to the Arch of Constantine and to the fascinating Colosseum, symbol of the Roman Empire. Don’t miss out on the opportunity to visit the treasures of the Vatican museum and the Sistine Chapel on our optional excursion. </p>
                        <h6><span className="day-span">Day 3</span> ROME–PISA–MONTECATINI</h6>
                        <p>Vistas of rolling hills, rows of cypress trees, terraced vineyards, olive groves, and rural villages form the backdrop of your journey through beautiful Tuscany. Stop in Pisa, and take a mini-train ride to see the Square of Miracles with the amazing Leaning Tower. Arrive in Montecatini.</p>
                        <h6><span className="day-span">Day 4</span> MONTECATINI. EXCURSION TO FLORENCE</h6>
                        <p>Today, enjoy an included excursion to Florence. Your Local Guide will show you the city highlights on the walking tour. You will see Piazza Santa Croce; beautiful Piazza Signoria; Palazzo Vecchio and its courtyard and Loggia dei Lanzi. To top it all, see Piazza del Duomo and its cathedral with the Giotto Campanile, and the magnificent East Doors of the Baptistry, known as the “Gates of Paradise.”</p>
                        <h6><span className="day-span">Day 5</span> MONTECATINI–LA SPEZIA–CINQUE TERRE–GENOA</h6>
                        <p>Travel towards La Spezia, where you’ll hop aboard the train to discover some of the five spectacular Cinque Terre villages. The beauty of the rugged cliffs and romantic fishing villages once inspired poet Lord Byron. From Levanto, head towards Genoa, birthplace of explorer Christopher Columbus.</p>
                        <h6><span className="day-span">Day 6</span> GENOA–MILAN–LAKE MAGGIORE</h6>
                        <p>Today’s included guided tour is an excellent introduction to Genoa. A maze of squares and alleys, the city grew around the port, a natural inlet, and boasts the largest medieval historical center in Europe. Next, head north into the plains of Lombardy, and stop in Milan to marvel at its magnificent Gothic Duomo. Then, continue to Baveno on Lake Maggiore.</p>
                        <h6><span className="day-span">Day 7</span> VENICE</h6>
                        <p>Venice is more like a romantic film set than a real-life city, with its crisscrossing canals, gondolas and water buses, arched bridges, palaces, and piazzas. The included orientation starts with a boat ride to St. Mark’s Square, and is followed by time at leisure and a chance to watch Venetian glassblowers fashion their delicate objects as they did centuries ago. Don’t miss out on the optional gondola trip, gliding along the picturesque canals with a local troubadour to serenade you. </p>
                    </div>
                    <div className="itinerary-btn">
                        <Button className="itineraryBtn" variant="danger">Book Now</Button>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Itinerary
