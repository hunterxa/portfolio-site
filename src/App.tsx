import React from 'react'
import MainContent from './components/MainContent'
import SkillsContent from './components/SkillsContent'
import './App.css'
import Header from './components/Header'
import ProjectsContent from './components/ProjectsContent'
import ContactContent from './components/ContactContent'

function App() {

  const homeRef = React.useRef<HTMLDivElement>(null)
  const skillsRef = React.useRef<HTMLDivElement>(null)
  const projectsRef = React.useRef<HTMLDivElement>(null)
  const contactRef = React.useRef<HTMLDivElement>(null)

  return (
    <div className="">
      {/* Main Content */}
      
      <div ref={homeRef}className="h-screen pt-16 sm:pt-48">
        <MainContent skillsRef={skillsRef} projectsRef={projectsRef} contactRef={contactRef} />
      </div>

      {/* Skills Content */}
      <div>
        <Header homeRef={homeRef} skillsRef={skillsRef} projectsRef={projectsRef} contactRef={contactRef} />
        <div ref={skillsRef} className="h-screen pt-36 sm:pt-72">
          <SkillsContent />
        </div>

        {/* Projects Content */}
        <div ref={projectsRef} className="min-h-screen pt-24 sm:pt-48">
          <ProjectsContent />
        </div>

        {/* Contact Content */}
        <div ref={contactRef} className="h-screen pt-32 sm:pt-64">
          <ContactContent />
        </div>
      </div>
    </div>
  )
}

export default App
