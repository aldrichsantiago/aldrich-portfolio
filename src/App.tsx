import Contact from "./components/Contact"
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
function App() {

  return (
    <>
      <nav className="hidden container sm:flex justify-center items-center sticky top-0 my-3 py-12 z-10">

        <span className="flex w-1/3 justify-center">
          <ul className="hidden xs:flex flex-wrap">
            <li className="mx-3"><a className="font-normal font-sans text-xl rounded-md" href="#about">About</a></li>
            <li className="mx-3"><a className="font-normal font-sans text-xl rounded-md" href="#projects">Projects</a></li>
          </ul>
        </span>

        <span className="flex w-1/3 justify-center">
          <h1 className='text-3xl font-extrabold'>ALDRICH SANTIAGO</h1>
        </span>

        <span className="flex w-1/3 justify-center items-center">
          <AiFillGithub size={30} className="mx-2"/>
          <AiFillLinkedin size={30} className="mx-2"/>
        </span>

      </nav>
      
      <div className="container p-0 sm:p-2">
        <div id="about" className="h-screen py-20">
        </div>
        <div id="projects" className="h-auto py-20">
        </div>
        <div id="contact" className="h-screen py-20">
          <Contact></Contact>
        </div>
      </div>

      <div className=" sm:hidden flex justify-between items-center sticky bottom-0 m-3 py-3">
        <nav className="h-12 w-11/12 sm:hidden flex justify-between items-center rounded-full bg-slate-500 container sticky bottom-0 m-3 py-3">
          <span className="w-full">
            <ul className="sm:hidden flex items-center justify-around flex-wrap">
              <li><a href="#about">about</a></li>
              <li><a href="#projects">projects</a></li>
              <li><a href="#contact">contact</a></li>
            </ul>
          </span>
        </nav>
      </div>

      

    </>
  )
}

export default App
