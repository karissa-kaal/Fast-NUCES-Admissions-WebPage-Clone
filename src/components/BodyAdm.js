import { FaAngleRight } from "react-icons/fa";
import "./bodyamd.css";

function BodyAdm(){
    const tableData = [
        {title: "Admission Application Submission", date1: "Jun 3 - Jul 15", date2: "Jun 3 - Jul 15"},
        {title: "Admission Tests", date1: "Jul 13 - 22", date2: "Jul 13 - 22"},
        {title: "Declaration of selected/test qualified candidates", date1: "Jul 25", date2: "Jul 25"},
        {title: "Interviews", date1: "-", date2: "Jul 27"},
        {title: "Admission Formalities", date1: "Aug 1 - 12", date2: "Aug 1 - 12"},
        {title: "Commencement of classes", date1: "Aug 15", date2: "Aug 15"}
    ]

    const lastUpdate = "01-Jul-2022";

    return(
        <>
            <div className="admissions-pg">
                <div className="adm-header">
                    <div className="title-adm">ADMISSION SCHEDULE</div> 
                    <div className="breadcrumbs-adm">
                        <span>Home</span> <FaAngleRight/>
                        <span>Admissions</span> <FaAngleRight/>
                        Admission Schedule
                    </div>
                </div>
                <div className="admission-dets">
                    <div className="last-update">
                        Update on:{lastUpdate}
                    </div>
                    <div className="adm-table">
                        <table className="tb1">
                            <tr>
                                <th>Tentative Admissipn Schedule 2022</th>
                                <th>BBA, BS(A&F) & BS</th>
                                <th>MBA, MS & PhD</th>
                            </tr>
                            {tableData.map((d) => (
                                <>
                                    <tr>
                                        <td>{d.title}</td>
                                        <td>{d.date1}</td>
                                        <td>{d.date2}</td>
                                    </tr>
                                </>
                            ))}
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BodyAdm;