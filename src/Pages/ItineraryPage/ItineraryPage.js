import React from 'react'
import Footer from '../../Components/Footer/Footer'
import Itinerary from '../../Components/Itinerary/Itinerary'
import './ItineraryPage.css'
import Banner from '../../Components/Banner/Banner'

function ItineraryPage() {
    return (
        <div className="itineraryPage-div">
            <Banner/>
            <Itinerary/>
            <Footer/>            
        </div>
    )
}

export default ItineraryPage
