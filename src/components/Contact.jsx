import React from 'react'

function Contact() {
  return (
    <>
      <div className='contact'>
        <div className='left'>
          <img src="public\images\11.jpeg" alt="" />
        </div>
        <div className='right'>
          <h1>Contact Us</h1>
          <form action="">
            <label htmlFor="">Full Name:</label>
            <input type="text" placeholder='Enter Your Name' />
            <label htmlFor="">Email:</label>
            <input type="text" placeholder='Enter Email' />
            <label htmlFor="">Message:</label>
            <input type="text" placeholder='Message..' />
          </form>
          <button>Send Message</button>
        </div>
      </div>
    </>
  )
}

export default Contact
