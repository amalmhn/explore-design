import React from 'react'
import { Button, Jumbotron } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import Header from '../Header/Header'
import './Banner.css'

function Banner() {

    const history = useHistory()

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
                        <Button onClick={()=>{history.push("/tours")}} variant="danger" className="banner-btn">View Tours</Button>
                    </p>
                </Jumbotron>
            </div>
        </div>
    )
}

export default Banner
