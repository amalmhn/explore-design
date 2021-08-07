import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
    return (
        <div className="header-div">
            <Navbar variant="light">
                <Navbar.Brand href="#home"><span className="explore-span">Explore
                <span className="flight-logo">&#9992;</span></span></Navbar.Brand>
                <Nav className="mr-auto header-links">
                    <Nav>
                        <Link to="/" className="headerLink">
                            <span className="header-span">Home</span>
                        </Link>
                    </Nav>
                    <Nav>
                        <Link to="/tours" className="headerLink">
                            <span className="header-span">About</span>
                        </Link>
                    </Nav>
                    <Nav.Link href="/contact"><span className="header-span">Contact</span></Nav.Link>
                </Nav>
            </Navbar>
        </div>
    )
}

export default Header
