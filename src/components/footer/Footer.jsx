import './footer.css'
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaGooglePlus } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaRegCopyright } from "react-icons/fa";
function Footer() {
  return (
    <div className="footer mt-5">
      <div className="container">
        <div className="d-flex p-5">
          <a href='https://facebook.com' target='blank'><FaFacebook size="2rem" /></a>
          <a href='https://youtube.come' target='blank'><FaYoutube size="2rem"/></a>
          <a href='https://google.come' target='blank'><FaGooglePlus size="2rem" /></a>
          <a href='https://instagram.come' target='blank'><FaInstagram size="2rem" /></a>
          <a href='https://twitter.come' target='blank'><FaTwitter size="2rem" /></a>
        </div>
        <div className="info d-flex mb-3">
          <Link  className="navbar-brand" to={'/contactUs'}>Contact Us</Link>
          <Link  className="navbar-brand" to={'/about'}>About</Link>
        </div>
      </div>
      <div className="last  text-center p-2 ">
          <p>Copyright <FaRegCopyright/> 2024, Designed By Elboghdady </p>
        </div>
    </div>
  )
}

export default Footer