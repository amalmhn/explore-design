import React from 'react'
import { Container, Table } from 'react-bootstrap'
import './Contact.css'

function Contact() {
    return (
        <div className="contact-div">
            <h1>Contact Us</h1>
            <div className="contact-table">
                <Container>
                    <Table className="contactDetails-table" striped bordered hover>
                        <tbody>
                        <tr>
                            <td className="contactTable"><strong>Name :</strong></td>
                            <td>Explore Tourism & Travel</td>
                        </tr>
                        <tr>
                            <td className="contactTable"><strong>Contact No. :</strong></td>
                            <td>1800 425 3575</td>
                        </tr>
                        <tr>
                            <td className="contactTable"><strong>Email :</strong></td>
                            <td>india@explore.com</td>
                        </tr>
                        </tbody>
                    </Table>
                    <p className="contact-para">
                    If you would like to make a reservation, contact the tour operator
                    given below,
                    </p>
                    <Table className="contactDetails-table" striped bordered hover>
                        <tbody>
                        <tr>
                            <td className="contactTable"><strong>Name :</strong></td>
                            <td>Explore Tourism & Travel Booking</td>
                        </tr>
                        <tr>
                            <td className="contactTable"><strong>Address :</strong></td>
                            <td>Old NH 47, Edappally Junction, Edappally, Kochi, Kerala 682024</td>
                        </tr>
                        <tr>
                            <td className="contactTable"><strong>Contact :</strong></td>
                            <td>TOLL-FREE 1800 209 9100</td>
                        </tr>
                        <tr>
                            <td className="contactTable"><strong>Email :</strong></td>
                            <td>booking@explore.com</td>
                        </tr>
                        </tbody>
                    </Table>
                </Container>
            </div>
        </div>
    )
}

export default Contact
