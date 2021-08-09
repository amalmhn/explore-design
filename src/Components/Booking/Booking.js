import React, { useState } from 'react'
import { Button, Container } from 'react-bootstrap';
import './Booking.css'

function Booking() {
    const [formValues, setFormValues] = useState([{ name: "", email : ""}])

    let handleChange = (i, e) => {
        let newFormValues = [...formValues];
        newFormValues[i][e.target.name] = e.target.value;
        setFormValues(newFormValues);
      }
    
    let addFormFields = () => {
        setFormValues([...formValues, { name: "", email: "" }])
      }
    
    let removeFormFields = (i) => {
        let newFormValues = [...formValues];
        newFormValues.splice(i, 1);
        setFormValues(newFormValues)
    }
    
    let handleSubmit = (event) => {
        event.preventDefault();
        alert(JSON.stringify(formValues));
    }

    return (
        <div className="booking-form">
            <h1 className="booking-h1">Please fill the details</h1>

            <Container>
                <h4>Adults(18 & above)</h4>
        <form  onSubmit={handleSubmit}>
          {formValues.map((element, index) => (
            <div className="form-inline" key={index}>
              <label><strong>Name : </strong></label>
              <input type="text" name="name" value={element.name || ""} onChange={e => handleChange(index, e)} />
              <label>Email</label>
              <input type="text" name="email" value={element.email || ""} onChange={e => this.handleChange(index, e)} />
              {
                index ? 
                <Button  type="button"  className="button-remove" onClick={() => removeFormFields(index)} variant="danger">Remove</Button>
                : null
              }
            </div>
          ))}
            <Button className="button-add" type="button" onClick={() => addFormFields()} variant="danger">Add</Button>
          {/* <div className="button-section">
          <Button className="button-add" type="button" onClick={() => addFormFields()} variant="danger">Dark</Button>
          </div> */}
      </form>
      </Container>
      </div>
    )

}

export default Booking
