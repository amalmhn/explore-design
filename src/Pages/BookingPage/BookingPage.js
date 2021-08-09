import React from 'react'
import Banner from '../../Components/Banner/Banner'
import Booking from '../../Components/Booking/Booking'
import Footer from '../../Components/Footer/Footer'
import './BookingPage.css'

function BookingPage() {
    return (
        <div className="booking-page">
            <Banner/>
            <Booking/>
            <Footer/>
        </div>
    )
}

export default BookingPage
