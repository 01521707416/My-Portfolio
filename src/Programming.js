import React from "react";
import "./programming.css";
export default function Programming() {

    const value = [
        {
            text: 'JavaScript',
            percentage: 55
        },
        {
            text: 'Python',
            percentage: 65
        },
        {
            text: 'React JS',
            percentage: 70
        },
        {
            text: 'C programming',
            percentage: 80
        },
        {
            text: 'C++',
            percentage: 70
        },
        {
            text: 'Java Programming',
            percentage: 80
        },
        {
            text: 'Java Spring Boot',
            percentage: 70
        },
        {
            text: 'HTML5',
            percentage: 80
        },
        {
            text: 'CSS',
            percentage: 80
        },
        {
            text: 'Bootstarp',
            percentage: 65
        },
        {
            text: 'Raw PHP',
            percentage: 60
        },
        {
            text: 'Laravel',
            percentage: 40
        },

    ]

    return <>
        <div>
            <div className="row">
                {
                    value.map(value => {
                        return (
                            <>
                                <div className="col-lg-6 col-mg-6 col-sm-12 my-2" key={value.id}>
                                    <span className="language">{value.text}</span>
                                    <div className="progress-some">
                                        <div className="progress-new" style={{ width: `${value.percentage}%` }}>

                                        </div>
                                    </div>
                                </div>
                            </>
                        );
                    })}
            </div>
        </div>
    </>
}