import React from 'react'
import emailjs from '@emailjs/browser';


const Contact: React.FC = () => {

    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        emailjs.sendForm(`${import.meta.env.VITE_EMAILJS_SERVICE_ID}`, `${import.meta.env.VITE_EMAILJS_TEMPLATE_ID}`,"#contact-form", `${import.meta.env.VITE_EMAILJS_PUBLIC_KEY}`)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
         }, function(error) {
            console.log('FAILED...', error);
         });
    }

  return (
    <div className='container py-16 text-center'>
        <h1 className='mb-12 text-5xl font-semibold'>Get in touch</h1>
        <form className='w-full sm:w-1/2 h-auto container bg-slate-00 flex justify-center flex-col' id='contact-form' onSubmit={handleSubmit}>
            <input className="w-full h-16 px-3 text-xl font-normal border-2 border-black rounded-md my-2" type="text" id='name' name="name" placeholder='Name'/>
            <input className="w-full h-16 px-3 text-xl font-normal border-2 border-black rounded-md my-2" type="text" id='email' name='email' placeholder='Email'/>
            <input className="w-full h-16 px-3 text-xl font-normal border-2 border-black rounded-md my-2" type="text" id='subject' name='subject' placeholder='Subject'/>
            <textarea className="w-full p-3 text-xl font-normal border-2 border-black rounded-md my-2" rows={10} id='message' name='message' placeholder='Send me a message'></textarea>

            <button className='border-2 border-white w-40 px-4 h-16 bg-emerald-700 text-white text-2xl font-sans rounded-lg flex items-center justify-center' type="submit">Send &nbsp;</button>

        </form>
    </div>
  )
}

export default Contact