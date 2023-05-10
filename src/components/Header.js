import "./header.css";
import { useState } from 'react';
import { FaSearch, FaAngleDown } from 'react-icons/fa';

function Header(){
    const [activeTab, setActiveTab] = useState('Home');

    const handleTabClick = (tab) => {
      setActiveTab(tab);
    };

    return(
        <>
            <div className="header-bg">
                <div className="logo-left">
                    <img className="logo" src="https://nu.edu.pk/Content/images/NU-logo.jpg" alt="logo" />
                </div>
                <div className="logo-right">
                    <img className="logo" src="https://nu.edu.pk/Content/images/FASTlogo.jpg" alt="logo" />
                </div>
            </div>  
            <nav>
            <ul>
                <li>
                <a
                    href="#"
                    className={activeTab === 'Home' ? 'active' : ''}
                    onClick={() => handleTabClick('Home')}
                >
                    Home
                </a>
                </li>
                <li>
                <a
                    href="#"
                    className={activeTab === 'Admissions' ? 'active' : ''}
                    onClick={() => handleTabClick('Admissions')}
                >
                    Admissions
                    <FaAngleDown />
                </a>
                </li>
                <li>
                <a
                    href="#"
                    className={activeTab === 'Campuses' ? 'active' : ''}
                    onClick={() => handleTabClick('Campuses')}
                >
                    Campuses
                    <FaAngleDown />
                </a>
                </li>
                <li>
                <a
                    href="#"
                    className={activeTab === 'Students' ? 'active' : ''}
                    onClick={() => handleTabClick('Students')}
                >
                    Students
                    <FaAngleDown />
                </a>
                </li>
                <li>
                <a
                    href="#"
                    className={activeTab === 'University' ? 'active' : ''}
                    onClick={() => handleTabClick('University')}
                >
                    University
                    <FaAngleDown />
                </a>
                </li>
                <li>
                <a
                    href="#"
                    className={activeTab === 'Services' ? 'active' : ''}
                    onClick={() => handleTabClick('Services')}
                >
                    Services
                    <FaAngleDown />
                </a>
                </li>
                <li>
                <a
                    href="#"
                    className={activeTab === 'ORIC' ? 'active' : ''}
                    onClick={() => handleTabClick('ORIC')}
                >
                    ORIC
                    <FaAngleDown />
                </a>
                </li>
                <li>
                <a
                    href="#"
                    className={activeTab === 'QEC' ? 'active' : ''}
                    onClick={() => handleTabClick('QEC')}
                >
                    QEC
                    <FaAngleDown />
                </a>
                </li>
                <li>
                <a href="#">Contact Us</a>
                </li>
                <li>
                <a href="#">Career</a>
                </li>
                <li>
                <a href="#">
                    <FaSearch />
                </a>
                </li>
            </ul>
            </nav>          
        </>
    )
}

export default Header;