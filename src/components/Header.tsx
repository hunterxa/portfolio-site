export default function Header({homeRef, skillsRef, projectsRef, contactRef}: 
  {
    homeRef: React.MutableRefObject<null>,
    skillsRef: React.MutableRefObject<null>, 
    projectsRef: React.MutableRefObject<null>, 
    contactRef: React.MutableRefObject<null>
  }) {
  return (
    <div className="flex justify-center items-center w-full h-16 bg-[#7D907D] sticky top-0 text-blue-50 text-xl drop-shadow-lg z-10">
      <p
        className="cursor-pointer hover:underline"
        onClick={() => homeRef.current.scrollIntoView({behavior: 'smooth'})}
      >
        Home
      </p>
      &#160;|&#160;
      <p
        className="cursor-pointer hover:underline"
        onClick={() => skillsRef.current.scrollIntoView({behavior: 'smooth'})}
      >
        Skills
      </p>
      &#160;|&#160;
      <p
        className="cursor-pointer hover:underline"
        onClick={() => projectsRef.current.scrollIntoView({behavior: 'smooth'})}
      >
        Projects
      </p>
      &#160;|&#160;
      <p
        className="cursor-pointer hover:underline"
        onClick={() => contactRef.current.scrollIntoView({behavior: 'smooth'})}
      >
        Contact
      </p>
    </div>
  )
}