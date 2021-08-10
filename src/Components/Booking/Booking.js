import React, { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import './Booking.css'

function Booking() {
  const [formValues, setFormValues] = useState([{ name: "", age: "", id: "" }])
  const [check, setCheck] = useState(false)

  let handleChange = (i, e) => {
    let newFormValues = [...formValues];
    newFormValues[i][e.target.name] = e.target.value;
    setFormValues(newFormValues);
  }

  let addFormFields = () => {
    setFormValues([...formValues, { name: "", age: "", id: "" }])
  }

  let removeFormFields = (i) => {
    let newFormValues = [...formValues];
    newFormValues.splice(i, 1);
    setFormValues(newFormValues)
  }

  let handleSubmit = (event) => {
    event.preventDefault();
    console.log(JSON.stringify(formValues))
  }

  return (
    <div className="booking-form">
      <h1 className="booking-h1">Booking Details</h1>
      <div className="bookingForm">
        <Container>
          <h4>Passenger Information</h4>
          {formValues.map((element, index) =>
            <Row>
              <Col className="booking-col" sm>
                <label>Name : </label><br/>
                <input className="booking-input" type="text" name="name" value={element.name || ""} onChange={e => handleChange(index, e)} />
              </Col>
              <Col className="booking-col" sm>
                <label>Age : </label><br/>
                <input className="booking-input" type="text" name="age" value={element.age || ""} onChange={e => handleChange(index, e)} />
              </Col>
              <Col className="booking-col" sm>
                <label>ID No. : </label><br/>
                <input className="booking-input" type="text" name="id" value={element.id || ""} onChange={e => handleChange(index, e)} />
              </Col>
              <Col className="booking-col" sm>
                <br />{
                  index ?
                    <Button className="form-btns" onClick={() => removeFormFields(index)} variant="danger">Remove</Button>
                    : null
                }
              </Col>
            </Row>
          )}
        </Container>
        <div className="addBtn-div">
          <Button className="form-btns" onClick={() => addFormFields()} variant="danger">Add</Button>
        </div>
      </div>
      <div className="terms-conditions">
        <Container>
          <h4>Terms and Conditions</h4>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check onChange={() => {
              setCheck(!check)
            }} type="checkbox" label="Check here to indicate you have read and agreed to the terms of the Explore Tours Ltd. customer agreement" />
          </Form.Group>
          <div className="checkBtns-div">
          {check ?<Button onClick={handleSubmit} className="form-btns" variant="danger" active>
            Submit </Button> :<Button className="form-btns" variant="danger" disabled>
            Submit
          </Button>}
          </div>
        </Container>
      </div>
    </div>
  )

}

export default Booking
