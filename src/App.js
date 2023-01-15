import './App.css';
import React, { useEffect, useRef } from 'react';
import { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Education from './Education';
import Work from './Work';
import Programming from './Programming';
import Projects from './Projects';
import Testimonials from './Testimonials';
import Contact from './Contact';
import Typed from 'typed.js';

function App() {

  const [education, seteducation] = useState(true);
  const [workhistory, setworkhistory] = useState(false);
  const [programmings, setprogrammings] = useState(false);
  const [projects, setprojects] = useState(false);
  const [opennav, setopennav] = useState(false);

  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Enthusiastic Developer 👨‍💻', 'Full Stack Developer 👨‍💻'],
      startDelay: 0,
      typeSpeed: 80,
      backSpeed: 20,
      backDelay: 100,
      smartBackspace: true,
      loop: true,
      showCursor: false,
      autoInsertCss: true,
      cursorChar: '|'
    });

    return () => {
      typed.destroy();
    }

  }, []);

  function SetAllFalse() {

    seteducation(false);
    setworkhistory(false);
    setprogrammings(false);
    setprojects(false);
  }

  function ChnageState(function1, state1) {

    SetAllFalse();
    function1(state1);
  }

  return (
    <div className="App">

      <div className='navbar-option-mobile bg-new'>
        <div className='d-flex flex-row justify-content-between'>
          <span className='brand-name d-flex align-items-center justify-content-center'>
            Khalequzzaman Ansary
          </span>
          <div className='bars mx-2' onClick={() => setopennav(!opennav)}> </div>
        </div>
      </div>

      <nav className={
        !opennav
          ? "d-flex bg-new px-9 py-5 flex-rows navbar-new transition-all"
          : "d-flex bg-new px-9 py-5 flex-rows navbar-fixed-new transition-all"
      }>
        <span className='brand-name'>ANSARY</span>
        <div className='d flex flex-rows'>
          <a href='#home' className='mx-4 nav-items' onClick={() => setopennav(false)}>Home</a>
          <a href='#aboutme' className='mx-4 nav-items' onClick={() => setopennav(false)}>About Me</a>
          <a href='#resume' className='mx-4 nav-items' onClick={() => setopennav(false)}>Resume</a>
          <a href='#testimonials' className='mx-4 nav-items' onClick={() => setopennav(false)}>Testimonials</a>
          <a href='#contactme' className='mx-4 nav-items' onClick={() => setopennav(false)}>Contact Me</a>
        </div>
      </nav>
      <div id='home' className='herosection px-10 py-2'>

        <div className='herosection-2 row justify-content-center'>
          <div className='col-lg-6 col-md-6 col-sm-12'>
            <div className='d-flex flex-column justify-content-center Im-text-section'>
              <span className='Im-text'>
                Hello, I am <span className='name-Im-text'>Khalequzzaman Ansary</span>
              </span>
              <span className='Im-text-enthusiastic py-2' ref={el} style={{ minHeight: '79px' }}>
                {/* Enthusiastic Developer 😎 */}
              </span>
              <span className='Im-text-subheading'>
                Dextrity of building software using front-end and back-end technologies.
              </span>
              <div className='d-flex flex-row justify-content-center mt-5'>
                <a href='#contactme' className='btn-hire-me'>Hire me</a>
                <a href='#resume' className='btn-resume'>Get RESUME</a>
              </div>
            </div>
          </div>
          <div className='col-lg-6 col-md-6 col-sm-12'>
            <div className='d-flex justify-content-center Anim'>
              <img className='img-fluid custom-img' alt='myphoto' src='https://res.cloudinary.com/ansarydiu/image/upload/v1661970039/mine/Mine_DSC_s0gmpx.jpg' />
            </div>
          </div>
        </div>
        <br />
        <br />
      </div>
      <div id='aboutme' className='about-me-section aboutme-inside my-5'>
        <div className='d-flex flex-column'>
          <span className='about-me-text'>About Me</span>
          <span className='introduce-text'>Let me introduce myself</span>
          <div className='row justify-content-center shadow-lg my-5'>
            <div className='col-lg-6 col-md-6 col-sm-12 d-flex align-items-center justify-content-center'>
              <lottie-player
                className='lotie-1'
                src="https://assets7.lottiefiles.com/private_files/lf30_enlfzw3u.json"
                background="transparent" speed="2"
                // style={{width: "500px", height: "500px"}}  
                loop
                autoplay>
              </lottie-player>
            </div>
            <div className='col-lg-6 col-md-6 col-sm-12 d-flex flex-column'>
              <span className='some-text-about-me'>
                Highly self-motivated student of Department of Computing and Information System at Daffodil International University, Bangladesh.
                I have successfully completed 121 credits out of 142 credits and till now maintaining 3.98 CGPA.
                I’m very enthusiastic in computer programming and web development. I am skilled in proven communication and Teamwork skills. I want to be part of the organization’s progress through the use of my knowledge and skills.
              </span>
              <span className='few-highlights'>
                <span className='few-text'>Skills and Expertise: </span>
                <span className='few-list'>
                  <ul>
                    <li>Full stack web development</li>
                    <li>C programming</li>
                    <li>Java programming</li>
                    <li>Java spring boot framework</li>
                    <li>Python programming</li>
                    <li>HTML, CSS, Bootstrap</li>
                    <li>JavaScript, React JS</li>
                    <li>Raw PHP</li>
                    <li>Laravel</li>
                    <li>MySQL</li>
                  </ul>
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div id='resume' className='resume-outer-section d-flex flex-column'>
        <span className='about-me-text'>RESUME</span>
        <span className='introduce-text'>My formal Bio Details</span>
        <div className='resume-new-section row'
          style={{ width: '70%', marginInline: 'auto', marginTop: '25px' }}>
          <div className='col-lg-4 col-md-4 resume-left-section d-flex flex-row px-0 shadow-lg'>
            <div className='d-flex flex-column bg-new text-white'>
              <span className='icons-span'>
                <i className="fa-solid fa-graduation-cap"></i>
              </span>
              <span className='icons-span'>
                <i className="fa-sharp fa-solid fa-person-walking-luggage"></i>
              </span>
              <span className='icons-span'>
                <i className="fa-sharp fa-solid fa-file-code"></i>
              </span>
              <span className='icons-span'>
                <i className="fa-sharp fa-solid fa-ranking-star"></i>
              </span>
            </div>
            <div className='d-flex flex-column'>
              <span className={education === false ? 'resume-options-items' : 'selected resume-options-items'}
                onClick={() => { ChnageState(seteducation, true); }}>
                Education
              </span>
              <span className={workhistory === false ? 'resume-options-items' : 'selected resume-options-items'}
                onClick={() => { ChnageState(setworkhistory, true); }}>
                Work
              </span>
              <span className={programmings === false ? 'resume-options-items' : 'selected resume-options-items'}
                onClick={() => { ChnageState(setprogrammings, true); }}>
                Programming
              </span>
              <span className={projects === false ? 'resume-options-items' : 'selected resume-options-items'}
                onClick={() => { ChnageState(setprojects, true); }}>
                Projects
              </span>
            </div>
          </div>
          <div className='col-lg-8 col-md-8 resume-right-section'>
            {education === true && <Education />}
            {workhistory === true && <Work />}
            {programmings === true && <Programming />}
            {projects === true && <Projects />}
          </div>
        </div>
      </div>
      <div id='testimonials' className='testimonials-part my-5'>
        <div className='testimonials-inner-part d-flex flex-column'>
          <span className='about-me-text'>Testimonials</span>
          <span className='introduce-text mb-5'>What my connections say about me</span>
          <Testimonials />
        </div>
      </div>

      <div className='contact-me-part' id='contactme'>
        <div className='relative-bg'>
          <div className='contact-inner-part d-flex flex-column'>
            <span className='about-me-text'>Contact Me</span>
            <span className='introduce-text mb-5'>Let's keep in touch</span>
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
