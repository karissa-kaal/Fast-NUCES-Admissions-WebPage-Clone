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

    const tableData = [
        {title: "Director", ext1: "213", ext2: "227", ext3: "101", ext4: "102"},
        {title: "Accounts", ext1: "216", ext2: "209", ext3: "226", ext4: "117"},
        {title: "Academics", ext1: "264", ext2: "289/233", ext3: "623/119/137/218", ext4: "108"},
        {title: "Computer Lab", ext1: "100", ext2: "215", ext3: "214", ext4: "120"},
        {title: "Library", ext1: "223", ext2: "210", ext3: "231/232", ext4: "119"},
        {title: "Admission Inquiry", ext1: "267/276", ext2: "1", ext3: "134/259/359", ext4: "155"},
    ]

    const emails = [
        {campus: "Chiniot-Faisalabad", email: "admissions.cfd@nu.edu.pk"},
        {campus: "Islamabad", email: "admissions.isb@nu.edu.pk"},
        {campus: "Karachi", email: "admissions.khi@nu.edu.pk"},
        {campus: "Lahore", email: "admissions.lhr@nu.edu.pk"},
        {campus: "Peshawar", email: "admissions.pwr@nu.edu.pk"}
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

                <div className="ext-numbers">
                    <div className="ext-title">Extension Numbers</div>
                    <span>Dial 111 128 128 annd then enter the desired extension:</span>
                    <div className="adm-table">
                        <table className="tb1">
                            <tr>
                                <th></th>
                                <th>Karachi</th>
                                <th>Lahore</th>
                                <th>Islamabad</th>
                                <th>Peshawar</th>
                            </tr>
                            {tableData.map((d) => (
                                <>
                                    <tr>
                                        <td>{d.title}</td>
                                        <td>ext:{d.ext1}</td>
                                        <td>ext:{d.ext2}</td>
                                        <td>ext:{d.ext3}</td>
                                        <td>ext:{d.ext4}</td>
                                    </tr>
                                </>
                            ))}
                        </table>
                    </div>
                </div>

                <div className="adm-queries">
                    <div className="ext-title">Admission related queries</div>
                    <table>
                        {emails.map((c) => (
                            <>
                                <tr>
                                    <td>For {c.campus} campus:</td>
                                    <td><a>{c.email}</a></td>
                                </tr>
                            </>
                        ))}
                    </table>
                </div>
            </div>
        </>
    )
}

export default BodyContactUs;