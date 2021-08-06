import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Footer.css'

function Footer() {
    return (
        <div className="footer-div">
            <Container>
                <Row>
                    <Col sm>
                    <div className="footer-texts">
                        <h4>LOCATIONS</h4>
                        <p>Kochi</p>
                        <p>Delhi</p>
                        <p>Chennai</p>
                        <p>Mumbai</p>
                    </div>
                    </Col>
                    <Col sm>
                    <div className="footer-texts">
                        <h4>ABOUT US</h4>
                        <p>Explore Group</p>
                        <p>Careers</p>
                        <p>Travel Agents</p>
                        <p>News Room</p>
                    </div>
                    </Col>
                    <Col sm>
                    <div className="footer-texts">
                        <h4>SOCIAL MEDIA</h4>
                        <p><i class="fa fa-facebook-square"></i></p>
                        <p><i class="fa fa-youtube"></i></p>
                        <p><i class="fa fa-instagram"></i></p>
                        <p><i class="fa fa-pinterest-square"></i></p>
                    </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer
