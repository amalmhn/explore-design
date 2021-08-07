import React from 'react'
import Banner from '../Components/Banner/Banner'
import Footer from '../Components/Footer/Footer'
import Tours from '../Components/Tours/Tours'
import './ToursPage.css'

function ToursPage() {
    return (
        <div className="toursPage">
            <Banner/>
            <Tours/>
            <Footer/>
        </div>
    )
}

export default ToursPage
