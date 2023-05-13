import React from "react";
import './bodycont.css';
import { FaAngleRight } from "react-icons/fa";
import Card from "./Card";

function BodyContactUs(){
    const campuses = [
        {name: "Islamabad Campus", add: "A.K. Brohi Road, H-11/4", phone: "Tel: 111 128 128 or (051) 831 4100-29", fax: "Fax: (051) 410 0619" },
        {name: "Lahore Campus", add: "Block-B, Faisal Town", phone: "Tel: 111 128 128 or (042) 516 5680-83", fax: "Fax: (042) 516 5232" },
        {name: "Karachi City Campus", add: "22-G, Block-6,\nPECHS, Karachi", phone: "Tel: (021) 343 90941-5", fax: "" },
        {name: "Karachi Main Campus", add: "Shah Latif Town (on National Highway)", phone: "Tel: 111 128 128 or (021) 341 00541-6", fax: "Fax: (021) 341 00549" },
        {name: "Peshawar Campus", add: "106, Industrial Estate, Jamrud Road", phone: "03341128128 or 03351128128 or 03361128128", fax: "Fax: (091) 582 2320" },
        {name: "Chiniot-Faislabad Campus", add: "Loonaywala Stop (9 KM from Motorway\nInterchange) \nFaisalabad-Chiniot Road", phone: "Tel: (041) 111-128-128", fax: "Fax: (041) 260 7272" },
        {name: "University Headoffice", add: "FAST House, Rohtas Road, G-9/4\nIslamabad Pakistan", phone: "Tel: (051) 2855072-4", fax: "Fax: (051) 2855070" }
    ]
    return(
        <>
            <div className="contact-pg">
                <div className="cont-header">
                <div className="title-adm">Contact us</div> 
                    <div className="breadcrumbs-adm">
                        <span>Home</span> <FaAngleRight/>
                        <span>Home</span> <FaAngleRight/>
                        Contact Us
                    </div>
                </div>
                <div className="campuses-cont">
                    {campuses.map((c) => <Card data={c} />)}
                </div>
            </div>
        </>
    )
}

export default BodyContactUs;