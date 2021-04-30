import './SendMessage.css'; 
import React from 'react';
import emailjs from 'emailjs-com'; 

const SendMessage = () => { 
 
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_zk82mhc', 'template_jepu5dc', e.target, 'user_RX7qQckhsjlxLEW6ZjSHW')
      .then((result) => {
        alert('Message Send Successfully');
      }, (error) => {
        alert(error.text);
      });
      e.target.reset();
  }



    return ( 

        <div className="container py-5">
          <h2 className="text-center py-3">Send Me Your Message</h2>
            <form className="contact-form" onSubmit={sendEmail}>  
                <input className="form-control" type="text" name="name"  placeholder="Your Name" /> 
                <br/>
                <input className="form-control" type="email" name="email"  placeholder="Your Email" /> 
                <br/>
                <textarea className="form-control" name="message" cols="8" rows="12" placeholder="Your Message" />
                <br/>
                <input className="btn btn-primary" type="submit" value="Send" />
            </form>
        </div>
 

    );
};

export default SendMessage;