import { AiOutlineGithub } from 'react-icons/ai'
import designConvertImage from '../assets/designconvert.png'
import prayTogetherImage from '../assets/praytogether.png'
import paletteAIImage from '../assets/paletteai.png'

export default function ProjectsContent() {
  return (
    <div className="text-blue-50 flex flex-col items-center">
      <h1 className="underline text-5xl">Projects</h1>
      <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-12">
        <div className="bg-blue-50 p-4 w-80 rounded-lg mt-16">
          <div className="flex flex-col bg-[#638591] p-4 rounded-lg">
            <a href="https://palette-o0ysc71uy-hunterxa.vercel.app">
              <img 
                src={paletteAIImage}
                className="rounded-lg w-72 drop-shadow-lg"
              />
            </a>
            <a 
              href="https://palette-o0ysc71uy-hunterxa.vercel.app" 
              className="text-blue-50 font-bold underline mt-4">
                Palette AI
            </a>
            <p>
              Palette AI is a web application that uses AI to quickly generate color palettes. Palette AI was built using Svelte with Typescript. The backend uses the Sveltekit Node.js server and the OpenAI API.
            </p>
            <a
              className="ml-auto" 
              href="https://github.com/hunterxa/palette-ai"
            >
              <AiOutlineGithub color="#E6F5FF" size="2rem"/>
            </a>
          </div>
        </div>
        <div className="bg-blue-50 p-4 w-80 rounded-lg mt-16">
          <div className="flex flex-col bg-[#638591] p-4 rounded-lg">
            <a href="https://design-convert.tokyrios.com">
              <img 
                src={designConvertImage}
                className="rounded-lg w-72 drop-shadow-lg"
              />
            </a>
            <a 
              href="https://design-convert.tokyrios.com" 
              className="text-blue-50 font-bold underline mt-4">
                Design Convert
            </a>
            <p>
              Design Convert is a utility web app that quickly converts px units to rem and vice versa. You can save those conversions in projects where you may be using different base font sizes.
              Design Convert was built using React with Typescript.
            </p>
            <a
              className="ml-auto" 
              href="https://github.com/hunterxa/design-convert"
            >
              <AiOutlineGithub color="#E6F5FF" size="2rem"/>
            </a>
          </div>
        </div>
        <div className="bg-blue-50 p-4 rounded-lg mt-16">
          <div className="flex bg-[#638591] p-4 rounded-lg items-center">
            <img 
              src={prayTogetherImage}
              className="rounded-lg h-52 drop-shadow-lg"
            />
            <div className="flex flex-col w-48 sm:w-64 ml-4">
              <h2 className="text-blue-50 font-bold underline mt-4">Pray Together</h2>
              <p>
                Pray Together is a mobile web app for sharing prayer requests with your friends and staying up to date on what your friends are asking for prayer for. It allows you to stay connected and praying for your friends and family and stay organized with the things you are praying for. Pray Together was built using React and Firebase.
              </p>
              <a
                className="ml-auto"
                href="https://github.com/hunterxa/praytogether"
              >
                <AiOutlineGithub color="#E6F5FF" size="2rem"/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}