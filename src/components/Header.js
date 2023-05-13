import "./header.css";
import { useState } from 'react';
import { FaSearch, FaAngleDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import React from "react";

function Header(){
    const [activeTab, setActiveTab] = useState('Home');

    const handleTabClick = (tab) => {
      setActiveTab(tab);
    };

    return(
        <>
            <div className="all-header">
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
                    <Link to = "/Admissions"
                        className={activeTab === 'Admissions' ? 'active' : ''}
                        onClick={() => handleTabClick('Admissions')}>
            
                        Admissions
                        <FaAngleDown />
                
                    </Link>
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
                    <Link to = "/ContactUs"
                        className={activeTab === 'ContactUs' ? 'active' : ''}
                        onClick={() => handleTabClick('ContactUs')}>
            
                        Contact Us
                
                    </Link>
                    </li>
                    <li>
                    <a href="#">Career</a>
                    </li>
                    <li>
                    <a href="#" className="search">
                        <FaSearch />
                    </a>
                    </li>
                </ul>
                </nav>
            </div>          
        </>
    )
}

export default Header;