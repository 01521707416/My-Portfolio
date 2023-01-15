import React from "react";
export default function Projects()
{
    return <>
        <div className="d-flex flex-column">
            <div className="education-one my-4 justify-content-between d-flex flex-row">
                <div className="d-flex flex-column new-one">
                    <span className="university-name">
                        Learn and Fun
                    </span>
                    <span className="university-degree">
                        Designed a website for musical school of childrens<br></br>
                        Using HTML & CSS <br></br>
                    </span>
                </div>
                <div>
                    <span className="passing-year">March, 2020</span>
                </div>
            </div>
            <div className="education-one my-4 justify-content-between d-flex flex-row">
                <div className="d-flex flex-column new-one">
                    <span className="university-name">
                        Database Design
                    </span>
                    <span className="university-degree">
                        Designed a database <br></br>
                        Using Navicat UI and MySQL and Back-end queries
                    </span>
                </div>
                <div>
                    <span className="passing-year">July, 2021</span>
                </div>
            </div>
            <div className="education-one my-4 justify-content-between d-flex flex-row">
                <div className="d-flex flex-column new-one">
                    <span className="university-name">
                        Computer Management System
                    </span>
                    <span className="university-degree">
                        Programmed a simple computer shop management system<br></br>
                        Using C programming
                    </span>
                </div>
                <div>
                    <span className="passing-year">August, 2020</span>
                </div>
            </div>
            <div className="education-one my-4 justify-content-between d-flex flex-row">
                <div className="d-flex flex-column new-one">
                    <span className="university-name">
                        CRUD Operation System
                    </span>
                    <span className="university-degree">
                        Developed a simple CRUD operation system<br></br>
                        Using Java Spring Boot, MySQL and HTML-CSS
                    </span>
                </div>
                <div>
                    <span className="passing-year">October, 2022</span>
                </div>
            </div>
        </div>
    </>
}