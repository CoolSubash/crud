import React from 'react'
import './createpost.css'
import { useState } from 'react'
import Navbar from '../component/navbar/Navbar'
const Createpost = () => {
  const [formData, setFormData] = useState({
    name: '',
    speed: '',
    color: '',
  })
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (formData.name && formData.speed && formData.color) {
      const response = await fetch('http://localhost:3000/api/v1/post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      const responseData = await response.json()
      console.log(responseData)
      alert(responseData.message)
      setFormData({
        name: '',
        speed: '',
        color: '',
      })
    } else {
      alert('please Fill the required field')
    }
  }

  return (
    <>
      <Navbar />
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <br></br>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="speed">
          <label htmlFor="speed">Speed:</label>
          <br></br>
          <input
            type="number"
            id="speed"
            name="speed"
            min="1"
            max="100"
            value={formData.speed}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="color">Color:</label>
          <br></br>
          <select
            id="color"
            name="color"
            value={formData.color}
            onChange={handleChange}
          >
            <option value="">Select a color</option>
            <option value="Red">Red</option>
            <option value="Blue">Blue</option>
            <option value="Green">Green</option>
            <option value="Yellow">Yellow</option>
            <option value="Orange">Orange</option>
            <option value="Black">Black</option>
            <option value="White">White</option>
            <option value="Purple">Purple</option>
            <option value="Cyan">Cyan</option>
          </select>
        </div>
        <button type="submit">Create Post</button>
      </form>
    </>
  )
}

export default Createpost
