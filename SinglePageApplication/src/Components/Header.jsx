import './Header.css'
import { FaGithub,FaLinkedinIn,FaRegEnvelope } from "react-icons/fa"

function Header() {

  return (
   <header className="header">
      <h1>Technical Challenge</h1>
      <ul>
        <li>
          <FaLinkedinIn/>
        </li>     
        <li>
          <FaGithub/>
        </li>     
        <li>
          <FaRegEnvelope/>
        </li>
      </ul>
   </header>
  )
}

export default Header
