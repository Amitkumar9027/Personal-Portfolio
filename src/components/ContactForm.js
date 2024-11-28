import React, { useRef } from 'react';
import './ContactFormStyle.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';
import cartoon from '../images/cartoon-compressed.png';
import Cube from './Cube';


export default function ContactForm({ id }) {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('amit.kumar902779', 'template_0dsd47z', form.current, 'sc8qHBUQHTTdhxBYx')
      .then((result) => {
          console.log(result.text);
          toast.success('Message sent successfully.', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
      }, (error) => {
          console.log(error.text);
          toast.error("Failed to send message. Kindly refresh the page.", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
      });
  };




  return (
    <div className='contact-window' id={id}>
      <h1>Let's Get in Touch.</h1>
      <p>Discuss a project or just want to say Hi? My inbox is open for all.</p>
      <div className="contact-container">
        
{/* <img src={cartoon}/> */}
<Cube/>

         <form ref={form} onSubmit={sendEmail} className="contact-wrapper-right">
          <input id='name' type="text" name="name" placeholder='Full Name'  required/>
          <input id='email' type="email" name="email" placeholder='Email ID' required />
          <textarea id='message' name="message" rows='5' column='15' placeholder='Share your thoughts and insights here; your feedback means a lot.' required/>
          <button className='btn' id='submitBtn' type="submit" value="Send" >Send Message</button>
          <ToastContainer />
        </form>
        
      </div>
    </div>
  )
}