import { AiOutlineMail, AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai';

export default function ContactContent() {
    return (
      <div className="text-blue-50 ml-16">
        <h1 className="text-5xl font-bold underline">Contact</h1>
        <div className="flex flex-col mt-4">
          <div className="flex items-center">
            <a href="mailto:jhallen327@gmail.com">
              <AiOutlineMail color="#E6F5FF" size="2rem" />
            </a>
            <a className="ml-4 hover:underline border-r-2 border-orange-300 pr-2" href="mailto:jhallen327@gmail.com">jhallen327@gmail.com</a>
          </div>
          <div className="flex items-center mt-4">
            <a href="https://github.com/hunterxa">
              <AiOutlineGithub color="#E6F5FF" size="2rem" />
            </a>
            <a className="ml-4 hover:underline border-r-2 border-orange-300 pr-2" href="https://github.com/hunterxa">hunterxa</a>
          </div>
          <div className="flex items-center mt-4">
            <a href="https://github.com/hunterxa">
              <AiOutlineLinkedin color="#E6F5FF" size="2rem" />
            </a>
            <a className="ml-4 hover:underline border-r-2 border-orange-300 pr-2" href="https://www.linkedin.com/in/jobie-allen-0206b8278/">Hunter Allen</a>
          </div>
        </div>
      </div>
    )
}