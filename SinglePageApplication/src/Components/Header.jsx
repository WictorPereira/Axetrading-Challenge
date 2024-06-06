import'./Header.css'
import { FaGithub,FaLinkedinIn,FaRegEnvelope } from "react-icons/fa"

function Header() {

  return (
   <header className="header">
      <h1 className='title'>Technical Challenge</h1>
      <ul className='ul-networks'> 
        <li className='li-networks'>
          <FaLinkedinIn/>
        </li>     
        <li className='li-networks'>
          <FaGithub/>
        </li>     
        <li className='li-networks'>
          <FaRegEnvelope/>
        </li>
      </ul>
   </header>
  )
}

export default Header
