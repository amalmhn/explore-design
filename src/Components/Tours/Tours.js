import React from 'react'
import { Button, Container, Jumbotron } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import './Tours.css'

function Tours() {

    const history = useHistory()

    return (
        <div className="tours-div">
            <h1 className="toursDiv-h1">Tours packages available now</h1>
            <Container>
                <Jumbotron className="tourDetails-jumbo">
                    <h3>Rome, Florence & Venice</h3>
                    <span><strong>7 Day Tour from Rome to Venice Area</strong></span>
                    <br /><br />
                    <p>
                        Your dream of visiting the shining cities of Italy with budget travel in mind is easy to reach. With seven days to see the sights from Rome to Venice—including Pisa, Verona, and Florence—your guided Italy tour is waiting.
                    </p>
                    <p> <strong>Starting at: <span className="price-span">₹75,295</span></strong></p>
                    <div className="btns-div">
                    <Button onClick={()=>{history.push("/itinerary")}} variant="danger both-btns">Get Details</Button>
                    <Button className="bookNow-btn both-btns" variant="danger">Book Now</Button>
                    </div>
                </Jumbotron>
                <Jumbotron className="tourDetails-jumbo2">
                    <h3>Long weekend in Manali</h3>
                    <span><strong>5 Day Tour from Delhi to Manali</strong></span>
                    <br /><br />
                    <p>
                    Explore the wonders of Himachal with our best-selling itinerary. Travel to Himachal requires no RT-PCR test beforehand & there are no quarantine requirements. Avail free breakfast, sanitized vehicles & much more.
                    </p>
                    <p> <strong>Starting at: <span className="price-span">₹20,295</span></strong></p>
                    <div className="btns-div">
                    <Button variant="danger both-btns">Get Details</Button>
                    <Button className="bookNow-btn both-btns" variant="danger">Book Now</Button>
                    </div>
                </Jumbotron>
                <Jumbotron className="tourDetails-jumbo3">
                    <h3>Spices of North Kerala</h3>
                    <span><strong>2 Day Tour to Wayanad</strong></span>
                    <br /><br />
                    <p>
                    This small yet popular town of Wayanad in Kerala is complete with historical and ancient caves, beautiful serene waterfalls, wildlife and spice plantations is a famous tourist destination in Kerala which has comfortable homestay options and beautifully landscaped resorts.
                    </p>
                    <p> <strong>Starting at: <span className="price-span">₹11,295</span></strong></p>
                    <div className="btns-div">
                    <Button variant="danger both-btns">Get Details</Button>
                    <Button className="bookNow-btn both-btns" variant="danger">Book Now</Button>
                    </div>
                </Jumbotron>
            </Container>
        </div>
    )
}

export default Tours
