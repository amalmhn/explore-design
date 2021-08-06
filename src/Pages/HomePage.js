import React from 'react'
import Banner from '../Components/Banner/Banner'
import Body from '../Components/Body/Body'
import Footer from '../Components/Footer/Footer'
import './HomePage.css'

function HomePage() {
    return (
        <div className="homepage">
            <Banner/>
            <Body/>
            <Footer/>
        </div>
    )
}

export default HomePage
