import { HiOutlineComputerDesktop,  HiOutlineServer } from 'react-icons/hi2'
import { IoLaptopOutline, IoServerOutline } from 'react-icons/io5'

export default function SkillsContent() {

    return (
        <div className="text-blue-50">

            <h1
              className="text-5xl text-center underline"
            >
              Skills
            </h1>
            <div className="flex gap-4 justify-center mt-8 flex-col items-center sm:flex-row sm:items-start">

              {/* Frontend box */}
              <div className="w-72 sm:w-96 h-40 sm:h-52 pl-2 pr-2 border-2 rounded-xl">
                <div className="flex items-center justify-center">
                  <IoLaptopOutline color="rgb(239 246 255)" size="1.5rem" />
                  <h2 className="underline text text-xl sm:text-2xl ml-4 mr-4">Frontend</h2>
                  <HiOutlineComputerDesktop color="rgb(239 246 255)" size="1.5rem" />
                </div>
                <p className="font-light">
                  When starting a new project, I tend to lean on Typescript, React, and TailwindCSS to create my frontend UI. I also have some experience and enjoy using Svelte.
                </p>
              </div>

              {/* Backend box */}
              <div className="w-72 sm:w-96 h-64 sm:h-52 pl-2 pr-2 border-2 rounded-xl">
                <div className="flex items-center justify-center">
                <IoServerOutline color="rgb(239 246 255)" size="1.5rem" />
                  <h2 className="underline text-xl sm:text-2xl ml-4 mr-4">Backend</h2>
                  <HiOutlineServer color="rgb(239 246 255)" size="1.5rem" />
                </div>
                <p className="font-light">
                  I enjoy building backends for my apps with tools like Spring, Flask, Express. I tend to build my databases with PostgreSQL and create REST APIs to access the data from the frontend. When creating an app with a more simple, straightforward backend, I enjoy using Firebase for a quick, drop in solution.
                </p>
              </div>
            </div>
        </div>
    )
}