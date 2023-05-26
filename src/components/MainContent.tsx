import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineMail } from 'react-icons/ai'

export default function MainContent({skillsRef, projectsRef, contactRef}: 
  {
    skillsRef: React.RefObject<HTMLDivElement>, 
    projectsRef: React.RefObject<HTMLDivElement>, 
    contactRef: React.RefObject<HTMLDivElement>
  }) {
  return (
    <>
      <div className="ml-24 w-8 h-8 flex justify-center items-center">
        <a href="https://github.com/hunterxa">
          <AiOutlineGithub color="#E6F5FF" size="2rem"/>
        </a>
        <a href="https://www.linkedin.com/in/jobie-allen-0206b8278/" className="ml-4">
          <AiOutlineLinkedin color="#E6F5FF" size="2rem"/>
        </a>
        <a href="mailto:jhallen327@gmail.com" className="ml-4">
          <AiOutlineMail color="#E6F5FF" size="2rem"/>
        </a>
      </div>

      <div className="sm:flex justify-between pl-16 pr-16 mt-32 sm:mt-80">
        <div className="border-solid border-l border-yellow-200 pl-2">
          <h1 className="font-sans text-4xl sm:text-6xl text-blue-50">Hunter Allen</h1>
          <p className=" w-48 sm:w-56 md:w-68 lg:w-1/2  text-blue-50 font-extralight mt-4">I'm a full stack developer from Tuscaloosa, Alabama. I'm currently focused on building creative full stack web applications.</p>
        </div>

        <div className="text-xl sm:text-2xl mt-16 sm:mt-0 flex flex-col gap-4">
          <h2 
            className="text-blue-50 transition ease-in-out duration-150 sm:hover:scale-150 hover:underline border-solid border-l border-orange-300 pl-4 cursor-pointer"
            onClick={() => {
              if (skillsRef.current) {
                skillsRef.current.scrollIntoView({behavior: 'smooth'})
              }
            }}
          >
            Skills
          </h2>
          <h2 
            className="text-blue-50 transition ease-in-out duration-150 sm:hover:scale-150 hover:underline border-solid border-l border-orange-300 pl-4 cursor-pointer"
            onClick={() => {
              if (projectsRef.current) {
                projectsRef.current.scrollIntoView({behavior: 'smooth'})
              }
            }}
          >
            Projects
          </h2>
          <h2 
            className="text-blue-50 transition ease-in-out duration-150 sm:hover:scale-150 hover:underline border-solid border-l border-orange-300 pl-4 cursor-pointer"
            onClick={() => {
              if (contactRef.current) {
                contactRef.current.scrollIntoView({behavior: 'smooth'})
              }
            }}
          >
            Contact
          </h2>
        </div>
      </div>
    </>
  )
}