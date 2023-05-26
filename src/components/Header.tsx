export default function Header({homeRef, skillsRef, projectsRef, contactRef}: 
  {
    homeRef: React.RefObject<HTMLDivElement>,
    skillsRef: React.RefObject<HTMLDivElement>, 
    projectsRef: React.RefObject<HTMLDivElement>, 
    contactRef: React.RefObject<HTMLDivElement>
  }) {
  return (
    <div className="flex justify-center items-center w-full h-16 bg-[#7D907D] sticky top-0 text-blue-50 text-xl drop-shadow-lg z-10">
      <p
        className="cursor-pointer hover:underline"
        onClick={() => {
          if (homeRef.current) {
            homeRef.current.scrollIntoView({behavior: 'smooth'})
          }
        }}
      >
        Home
      </p>
      &#160;|&#160;
      <p
        className="cursor-pointer hover:underline"
        onClick={() => {
          if (skillsRef.current) {
            skillsRef.current.scrollIntoView({behavior: 'smooth'})
          }
        }}
      >
        Skills
      </p>
      &#160;|&#160;
      <p
        className="cursor-pointer hover:underline"
        onClick={() => {
          if (projectsRef.current) {
            projectsRef.current.scrollIntoView({behavior: 'smooth'})
          }
        }}
      >
        Projects
      </p>
      &#160;|&#160;
      <p
        className="cursor-pointer hover:underline"
        onClick={() => {
          if (contactRef.current) {
            contactRef.current.scrollIntoView({behavior: 'smooth'})
          }
        }}
      >
        Contact
      </p>
    </div>
  )
}