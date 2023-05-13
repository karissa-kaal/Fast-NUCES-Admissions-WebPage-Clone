import './footer.css';
import { FaPhoneAlt, FaLink, FaBuilding, FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaMapMarker, FaAngleRight, FaCopyright } from 'react-icons/fa';

function Footer(){
    const campuses = [
        "Chiniot-Faisalabad",
        "Islamabad",
        "Karachi",
        "Lahore",
        "Peshawar"
    ]

    const rLinks = [
        "Degree Verification",
        "SLATE-LMS",
        "ORIC",
        "QEC",
        "Contact Us",
        "FAST-NU Library",
        "CoE-CPEC"
    ]

    const lLinks = [
        "Programs",
        "PEEF",
        "NU Mail",
        "Careers",
        "FAST Connect (For Alumni)",
        "FAST Connect (For Faculty)",
        "OSAF"
    ]

    return(
        <>
            <div className="footer-bg">
                <div className="footer-content">
                    <div className="contact">
                        <div className="title-f">
                            <FaPhoneAlt />
                            <span>CONTACT</span>
                        </div>
                        <div>
                            <img className="logo-f" src="https://nu.edu.pk/Content/images/Footer-Logo.png" alt="logo" />
                        </div>

                        <div className="contacts-locash">
                            <div className="cont-icon"><FaPhoneAlt/></div>
                            
                            <div className="cont">
                                Contact:<br />111-128-128
                                <br />
                                <FaFacebookF/><FaTwitter/><FaInstagram/><FaYoutube/>
                            </div>

                            <div className="locash-icon"><FaMapMarker/></div>
                            
                            <div className="locash">
                                Location:  <br />
                                FAST-House <br />
                                Rohtas Road, G-9/4 <br />
                                Islamabad - 44000
                            </div>
                        </div>
                    </div>
                    <div className="useful-links">
                        <div className="title-f">
                            <FaLink />
                            <span>USEFUL LINKS</span>
                        </div>
                        <div className="all-links">
                            <div className="left-links">
                                {lLinks.map((l) => (
                                    <span><FaAngleRight/>{l}<br /></span>
                                ))}
                            </div>
                            <div className="right-links">
                                {rLinks.map((l) => (
                                    <span><FaAngleRight/>{l}<br /></span>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="campuses">
                        <div className="title-f">
                            <FaBuilding />
                            <span>CAMPUSES</span> 
                        </div>
                        <div className="all-campuses">
                            {campuses.map((c) => (
                                <span><FaAngleRight/>{c}<br /></span>
                            ))}
                        </div>
                    </div>
                </div>     
            </div>
            <div className="copyright">
                Copyright <FaCopyright /> 2023, NUCES. All Rights Reserved.
            </div> 
        </>
    )
}

export default Footer;