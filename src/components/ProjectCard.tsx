import React from 'react'

const ProjectCard:React.FC = () => {


  return (
    <div className='container px-20'>
        <div className="w-full h-[500px] mb-96 md:mb-12 flex flex-wrap">
            <div className="w-full md:w-1/2 h-full bg-slate-200 rounded-l-xl">

            </div>
            <div className="w-full md:w-1/2 h-full p-3 py-10 md:p-12 bg-slate-100 relative rounded-r-xl">
                <h1 className="text-4xl font-medium">Zaza Co.</h1>
                <p className="text-md">Zaza Co. is an e-commerce online shopping web application built with ReactJS, TailwindCSS, NodeJS and ExpressJS</p>
                <div className="absolute bottom-5 md:left-5">
                    <button className='text-xl bg-black text-white m-5 w-36 py-2 rounded-lg'>Github</button>
                    <button className='text-xl bg-emerald-600 m-5 w-36 py-2 rounded-lg'>Live</button>
                </div>
            </div>
        </div>

        <div className="w-full h-[500px] mb-96 md:mb-12 flex flex-wrap flex-row-reverse">
            <div className="w-full md:w-1/2 h-full bg-slate-200 rounded-r-lg">

            </div>
            <div className="w-full md:w-1/2 h-full p-3 py-10 md:p-12 bg-slate-100 relative rounded-l-lg">
                <h1 className="text-4xl font-medium">Zaza Co.</h1>
                <p className="text-md">Zaza Co. is an e-commerce online shopping web application built with ReactJS, TailwindCSS, NodeJS and ExpressJS</p>
                <div className="absolute bottom-5 md:left-5">
                    <button className='text-xl bg-black text-white m-5 w-36 py-2 rounded-lg'>Github</button>
                    <button className='text-xl bg-emerald-600 m-5 w-36 py-2 rounded-lg'>Live</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProjectCard