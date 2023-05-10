import './footer.css';
import { FaPhoneAlt, FaLink, FaBuilding, FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

function Footer(){
    return(
        <>
            <div className="footer-bg">
                <div className="contact">
                    <div className="title-f">
                        <FaPhoneAlt />
                        <span>CONTACT</span>
                    </div>
                    <div>
                        <img className="logo-f" src="https://nu.edu.pk/Content/images/Footer-Logo.png" alt="logo" />
                    </div>

                    <div className="contacts-locash">
                        <FaPhoneAlt/>
                        <div className="cont">
                            Contact:<br />111-128-128
                            <br />
                            <FaFacebookF/><FaTwitter/><FaInstagram/><FaYoutube/>
                        </div>
                    </div>
                </div>
                <div className="useful-links">
                    <div className="title-f">
                        <FaLink />
                        <span>USEFUL LINKS</span>
                    </div>
                </div>
                <div className="campuses">
                    <div className="title-f">
                        <FaBuilding />
                        <span>CAMPUSES</span> 
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;