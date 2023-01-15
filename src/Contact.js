import React, { useState, useRef } from "react";
import "./contact.css";
import emailjs from '@emailjs/browser';
export default function Contact()
{

    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [message, setmessage] = useState("")
    const form = useRef();
    const sendEmail = (e) =>
    {
        e.preventDefault();

        emailjs.sendForm('service_cemueho', 'template_j19e3le', form.current, 'TNMvbVu-v-6eB7BLN')
            .then((result) => {
                console.log(result.text);
                alert('Message sent successfully!');
            }, (error) => {
                console.log(error.text);
            });
    }

    return <>
    <div>
        <div className="contact-me-card row">
            <div className="col-lg-6 col-md-5 col-sm-12 left-contact px-2 py-2">
            <span className="get-in-touch mx-4 my-5">Get In Touch</span>
            <div className="py-5 d-flex justify-content-center">
            <lottie-player src="https://assets2.lottiefiles.com/packages/lf20_zj3qnsfs.json"  
                background="transparent"  speed="1.50"  
                style={{width: "300px", height: "300px"}}  
                loop  
                autoplay>
            </lottie-player>
            </div>
            </div>
            <div className="col-lg-6 col-md-5 col-sm-12 my-auto">
                <form ref={form} className="d-flex flex-column card-contact-right" onSubmit={sendEmail}>
                    <div className="input-group my-3 d-flex flex-column">
                        <label>Name</label>
                        <input 
                        name="user_name"
                        onChange = {(e) => {setname(e.target.name);}}
                        type= "text" 
                        placeholder="Enter your name" 
                        className="input-groups"/>
                    </div>
                    <div className="input-group my-3 d-flex flex-column">
                        <label>Email</label>
                        <input 
                        name="user_email"
                        onChange = {(e) => {setemail(e.target.name);}}
                        type= "email" 
                        placeholder="Enter any valid email" 
                        className="input-groups"/>
                    </div>
                    <div className="input-group my-3 d-flex flex-column">
                        <label>Message</label>
                        <textarea
                        name="message"
                        onChange = {(e) => {setmessage(e.target.name);}}
                        type= "text" 
                        placeholder="Write your message here" 
                        className="input-groups"/>
                    </div>
                    <div className="input-group my-3 d-flex flex-column">
                        <input className="btn btn-success" type="submit" value="Send Message!"/>
                    </div>
                </form>
            </div>
        </div>
    </div>
    </>;
}