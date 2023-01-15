import React from "react";
import "./testimonials.css";
export default function Testimonials()
{

    const testimonials = [
        {
            name: 'Mr. Md. Sarwar Hossain Mollah',
            designation: 'Associate Professor and Head | Department of CIS | Daffofil International University',
            text: 'Khalequzzaman is very professional. I am very pleased with the skills he has achieved. He is truly excellent in the field of Computing and Information System! I really appreciate his academic excellency. I have recommended Ansary to my connections.'
            , id: 1
        },
        {
            name: 'Shibli Arafat',
            designation: 'Development Director | Wunderman Thompson, Bangladesh',
            text: 'I have worked with Khalequzzaman on 3 occasions over the last 2 years with regards to various projects. The quality produced has always exceeded my expectations and employers have always complimented my projects. Would not use anyone else for the purpose of effcient Web Development projects. Thank you.'
            , id: 2
        }
    ];

    return (
    <>
        <div>
            <div className="row mx-5">
                {testimonials.map((value) =>{
                    return ( 
                        <div className="col-lg-6 col-md-6 col-sm-12 my-3" key={value.id}>
                            <div className="card shadow testimonial-card d-flex flex-column">
                                <span className="description">{value.text}</span>
                                <span className="my-2 stars">⭐⭐⭐⭐⭐</span>
                                <span className="name">{value.name}</span>
                                <span className="designation">{value.designation}</span>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    </>
    );
}