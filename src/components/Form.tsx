import React, { useState } from 'react'
import "./formInput.css";

const Form = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    address:""
  });

  const handleChange = (event: any) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log(inputs);
  }
  return (
    <form onSubmit={handleSubmit} className='form-design'>
      
    <h1>React Typescript Form</h1>
    <br/>
    <label>
      <b>Enter your name:</b>
    <input 
      type="text" 
      name="username" 
      value={inputs.username || ""} 
      onChange={handleChange}
      className='formInput'
    />
    <br/><br/>
    </label>
    <label>
      <b>Enter your Email:</b>
      <input 
        type="text" 
        name="email" 
        value={inputs.email || ""} 
        onChange={handleChange}
        className='formInput'
      />
      </label>
      <br/><br/>
      <label>
        <b>Enter your Address:</b>
        <textarea 
        value={inputs.address || ""}  
        name="address"
        onChange={handleChange}
        className='formInput'
         />
      </label>
      <br/><br/>
      <button type="submit"><b>Submit</b></button>
  </form>
  )
}

export default Form