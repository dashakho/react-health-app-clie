import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

const DoctorForm = ({ doctor, handleChange, handleSubmit, cancelPath }) => (
  <form onSubmit={handleSubmit}>
    <label htmlFor="taxonomy_description">Taxonomy Description</label>
    <input
      id="taxonomy_description"
      placeholder="Find a Doctor by Specialty"
      value={doctor.taxonomy_description}
      name="taxonomy_description"
      onChange={handleChange}
    />

    <label htmlFor="first_name">First Name</label>
    <input
      id="first_name"
      placeholder="First Name"
      value={doctor.first_name}
      name="first_name"
      onChange={handleChange}
    />

    <label htmlFor="last_name">Last Name</label>
    <input
      id="last_name"
      placeholder="Last Name"
      value={doctor.last_name}
      name="last_name"
      onChange={handleChange}
    />

    <label htmlFor="city">City</label>
    <input
      id="city"
      placeholder="City"
      value={doctor.city}
      name="city"
      onChange={handleChange}
    />

    <label htmlFor="state">State</label>
    <input
      id="state"
      placeholder="State"
      value={doctor.state}
      name="state"
      onChange={handleChange}
    />

    <label htmlFor="postal_code">Postal Code</label>
    <input
      id="postal_code"
      placeholder="Postal Code"
      value={doctor.postal_code}
      name="postal_code"
      onChange={handleChange}
    />

    <Button variant={'info'} type="submit">Submit</Button>
    <Link to={cancelPath}>
      <Button variant={'danger'} type="button">Cancel</Button>
    </Link>
  </form>
)

export default DoctorForm
