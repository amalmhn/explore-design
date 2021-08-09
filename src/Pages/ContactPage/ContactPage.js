import React from 'react'
import Banner from '../../Components/Banner/Banner'
import Contact from '../../Components/Contact/Contact'
import Footer from '../../Components/Footer/Footer'
import './ContactPage.css'

function ContactPage() {
    return (
        <div className="contactPage">
            <Banner/>
            <Contact/>
            <Footer/>
        </div>
    )
}

export default ContactPage
