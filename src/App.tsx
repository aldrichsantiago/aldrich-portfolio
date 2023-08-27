import About from "./components/About"
import Contact from "./components/Contact"
import ProjectCard from "./components/ProjectCard"

function App() {

  return (
    <>
      <nav className="hidden bg-white container sm:flex justify-between items-center sticky top-0 my-3 py-3 z-10">
        <span>
          <h1 className='text-lg font-bold'>_aldrich</h1>
        </span>
        <span>
          <ul className="hidden xs:flex flex-wrap">
            <li className="mx-1 my-5"><a className="font-medium hover:text-gray-600 rounded-md py-2 px-6" href="#about">about</a></li>
            <li className="mx-1 my-5"><a className="font-medium hover:text-gray-600 rounded-md py-2 px-6" href="#projects">projects</a></li>
            <li className="mx-1 my-5"><a className="font-medium hover:text-gray-600 rounded-md py-2 px-6" href="#contact">contact</a></li>
          </ul>
        </span>
      </nav>
      <div className="container p-0 sm:p-2">
        <div id="about" className="h-screen py-20">
          <About></About>
        </div>
        <div id="projects" className="h-auto py-20">
          <ProjectCard></ProjectCard>
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
