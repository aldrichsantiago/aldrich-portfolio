import React from 'react'

const About:React.FC = () => {
  return (
    <div className='container flex'>
        <div className='py-12 px-20 bg-slate-100 flex flex-col items-center'>
            <p>🖇️</p>
            <p>🔥</p> 
            <p>😶‍🌫️</p>
        </div>
        <div className="w-full md:w-1/2 pt-16">
            <h1 className="text-5xl font-bold mb-5">Hi, I'm Cyka Blyat. 🧑‍💻</h1>
            <h3 className="text-xl font-medium text-gray-600">I am a Full-Stack Software Developer with experience in website design and development</h3>
        </div>
        <div className="w-full md:w-1/2">
        </div>
    </div>
  )
}

export default About