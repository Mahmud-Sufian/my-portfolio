import React from 'react';
import './SendMessage.css';
import { useForm } from "react-hook-form";

const SendMessage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => {
    if(data){
      alert("Message Send Successfully"); 
      document.getElementById('remove1').value = " ";
      document.getElementById('remove2').value = " ";
      document.getElementById('remove3').value = " ";
      // console.log(data)
    }
    
  };
 



    return (
        <div className="container py-5">
            <h2 className="text-center py-3">Send Me Your Message</h2>
            <form onSubmit={handleSubmit(onSubmit)}> 
        
                <input id="remove1" className="form-control" {...register("name", { required: true })}  placeholder="Your Name"/> 
                {errors.name && <span className="text-danger">This name is required</span>}
                <br/>
                <input id="remove2" className="form-control" {...register("email", { required: true })}  placeholder="Your Email"/> 
                {errors.email && <span className="text-danger">This email is required</span>}
                <br/>
                <textarea id="remove3" className="form-control" name="message" cols="30" rows="10" {...register("message", { required: true })}  placeholder="Your Message">
                
                </textarea>
                {errors.message && <span className="text-danger">This Message is required</span>}
                <br/>
                <button className="btn btn-info">Send</button>
            </form>
        </div>
    );
};

export default SendMessage;