import React from 'react'
import { Button, Jumbotron } from 'react-bootstrap'
import Header from '../Header/Header'
import './Banner.css'

function Banner() {
    return (
        <div className="banner-div">
            <div className="headerDiv">
                <Header />
            </div>
            <div className="bannerDIv">
                <Jumbotron className="banner-jumbo">
                    <h1 className="words-cls">Explore the world, with us!</h1>
                    <p className="words-cls">
                        "The journey of a thousand miles begins with a single step"
                    </p>
                    <p>
                        <Button variant="danger" className="banner-btn">View Tours</Button>
                    </p>
                </Jumbotron>
            </div>
        </div>
    )
}

export default Banner
