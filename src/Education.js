import React from "react";
import "./education.css";
export default function Education()
{
    return <>
        <div className="d-flex flex-column">
            <div className="education-one my-4 justify-content-between d-flex flex-row">
                <div className="d-flex flex-column new-one">
                    <span className="university-name">
                        Daffodil International University
                    </span>
                    <span className="university-degree">
                        B.Sc. in Computing and Information System (CIS)<br></br>
                        Current CGPA: 3.98 <br></br>
                        Successfully completed 102 credits out of 142 credits.
                    </span>
                </div>
                <div>
                    <span className="passing-year">2023(Expected)</span>
                </div>
            </div>
            <div className="education-one my-4 justify-content-between d-flex flex-row">
                <div className="d-flex flex-column new-one">
                    <span className="university-name">
                        Government Azizul Haque College, Bogura
                    </span>
                    <span className="university-degree">
                        HSC, major in Science <br></br>
                        Achieved GPA 4.67
                    </span>
                </div>
                <div>
                    <span className="passing-year">2018</span>
                </div>
            </div>
            <div className="education-one my-4 justify-content-between d-flex flex-row">
                <div className="d-flex flex-column new-one">
                    <span className="university-name">
                        Armed Police Battalion Public School, Bogura
                    </span>
                    <span className="university-degree">
                        SSC, major in Science <br></br>
                        Achieved GPA 5.00
                    </span>
                </div>
                <div>
                    <span className="passing-year">2016</span>
                </div>
            </div>
        </div>
    </>
}