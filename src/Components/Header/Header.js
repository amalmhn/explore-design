import React, { useState } from 'react'
import { Button, Modal, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Header.css'

function Header() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="header-div">
            <Navbar variant="light">
                <Navbar.Brand><span className="explore-span">Explore
                <span className="flight-logo">&#9992;</span></span></Navbar.Brand>
                <Nav className="mr-auto header-links">
                    <Nav>
                        <Link to="/" className="headerLink">
                            <span className="header-span">Home</span>
                        </Link>
                    </Nav>
                    <Nav>
                        <Link className="headerLink">
                            <span onClick={handleShow} className="header-span">About</span>
                        </Link>
                    </Nav>
                    <Nav>
                        <Link to="/contact" className="headerLink">
                            <span className="header-span">Contact</span>
                        </Link>
                    </Nav>
                </Nav>
            </Navbar>
            <div className="header-modal">
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title> <h2>About</h2> </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h4>Explore</h4>
                        <p>
                        When you travel with Explore, you’re also giving back. Explore is committed to sustainable travel and minimizing its impact on the environment and to reducing its dependence on non-renewable resources. In this endeavor, we have implemented policies to support this sustainable travel mission and are working carefully to enhance our products with this mission and our values combined. Explore maintains a policy of "Leave Only Footprints and Take Only Photos."
                        </p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button className="modal-btn" variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    )
}

export default Header
