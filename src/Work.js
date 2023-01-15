import React from "react";
import "./work.css";
export default function Work()
{
    return <>
        <div className="work-inside-new mx-2 my-4">
            <div className="d-flex flex-column">
                <div className="d-flex flex-row justify-content-between">
                    <span className="company-name">Corporate Ask</span>
                    <span className="passing-year">Jan 2022 - July 2022</span>
                </div>
            </div>
            <div className="d-flex flex-column">
                <span className="position">Business Development Intern</span>
                <span className="description-position">I have gathered experience in:
                    <ul>
                        <li>Backend development</li>
                        <li>Client handling</li>
                        <li>Social media management</li>
                    </ul>
                </span>
            </div>
        </div>
    </>
}