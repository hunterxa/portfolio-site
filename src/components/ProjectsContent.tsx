import designConvertImage from '../assets/designconvert.png'
import prayTogetherImage from '../assets/praytogether.png'

export default function ProjectsContent() {
  return (
    <div className="text-blue-50 flex flex-col items-center">
      <h1 className="underline text-5xl">Projects</h1>
      <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-12">
        <div className="bg-blue-50 p-4 w-80 rounded-lg mt-16">
          <div className="flex flex-col bg-[#638591] p-4 rounded-lg">
            <img 
            src={designConvertImage}
              className="rounded-lg w-72 drop-shadow-lg"
            />
            <h2 className="text-blue-50 font-bold underline mt-4">Design Convert</h2>
            <p>
              Design Convert is a utility web app that quickly converts px units to rem and vice versa. It allows for saving those conversions to quickly access later. It also allows for saving multiple projects in which you may be using different base font sizes.
              Design Convert was built using React with Typescript.
            </p>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}