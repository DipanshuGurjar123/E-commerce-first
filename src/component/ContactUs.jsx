import React, { useState } from 'react'
import  emailjs  from '@emailjs/browser';

const ContactUs = () => {

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

 
    const sentEmail = (e) => {
        e.preventDefault();

        const templateParams = {
            name: fullName,
            email: email,
            message: message
        }

        emailjs.send(
            "service_sjg0eki",
            "template_a1pp1i5",
            templateParams,
            "ArV7M-Fvd4HQcx7sj"
        )
        .then(() => {
            alert("Email sent successfully")
            setFullName("")
            setEmail("")
            setMessage("")
        })
        .catch((error) => {
            console.log(error);
            alert("Something went wrong!")    
        })
    }

  return (
    <section className='max-w-6xl mx-auto px-5 mt-16 mb-12 py-3'>
        <div className='grid md:grid-cols-2 gap-6 pb-14'>

            {/* Left Section */}
            <div className='bg-gray-100 px-6 py-5 rounded-2xl'>
                <h1 className='font-bold px-2'>Contact With Us</h1>

                <div className='flex flex-2 gap-2 pt-4 leading-tight'>
                    <div>
                        <p className='pt-2 text-xl'>📍</p>
                    </div>
                    <div>
                        <p className='font-semibold'>Address</p>
                        <p className='text-gray-600'>Indore, Madhya Pradesh, India</p>
                    </div>
                </div>

                <div className='flex flex-2 gap-2 pt-5 leading-tight'>
                    <div>
                        <p className='pt-2 text-xl'>📞</p>
                    </div>
                    <div>
                        <p>Phone</p>
                        <p>+91 9303659488</p>
                    </div>
                </div>

                <div className='flex flex-2 gap-2 pt-5 leading-tight'>
                    <div>
                        <p className='pt-2 text-xl'>📮</p>
                    </div>
                    <div>
                        <p>Email</p>
                        <p>support@digitalshop.com</p>
                    </div>
                </div>
            </div>

            {/* Right Section */}
            <div className='shadow-md p-6 rounded-2xl'>

                <form 
                className='flex flex-col'
                onSubmit={sentEmail}
                >
                    <label className='font-semibold'>Full Name</label>
                    <input type="text"
                    placeholder='Enter your name'
                    value={fullName}
                    onChange={(e) => {
                        setFullName(e.target.value)
                    }}
                    className='border rounded-lg p-3'
                    /> <br />
                    <label className='font-semibold'>Email</label>
                    <input type="text"
                    placeholder='Enter your email'
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value)
                    }}
                    className='border rounded-lg p-3'
                    /> <br />
                    <label className='font-semibold'>Message</label>
                    <textarea name="" id=""
                    placeholder='Message.....'
                    value={message}
                    onChange={(e) => {
                        setMessage(e.target.value)
                    }}
                    className='border rounded-lg p-6'
                    ></textarea><br />
                    <button className='bg-black text-white p-3 rounded-lg'>Sent Message</button>
                </form>
            </div>
        </div>

    </section>
  )
}

export default ContactUs
