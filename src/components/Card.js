import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import './card.css';

function Card({data}){
    const phone = data.phone && data.phone.replace(/\bor\b/g, "<strong>or</strong>");
  
    return(
        <>
            <div className="card-bg">
                <FaMapMarkerAlt/>
                <div className="card-title">
                    {data.name}
                </div>
                <div className="card-dets">
                    {data.add} <br />
                    {phone && <div dangerouslySetInnerHTML={{ __html: phone }} />} 
                    {data.fax}
                </div>
            </div>
        </>
    )
}

export default Card;