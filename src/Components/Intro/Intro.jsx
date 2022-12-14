import React from 'react'
import {Link} from 'react-scroll'
import './Intro.css'
import Github from '../../img/github.png'
import Linkedin from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import boy from '../../img/boy.png'
import thumbup from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import glassesimoji from '../../img/glassesimoji.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv'
import { themeContext } from '../../Context'
import { useContext } from "react";
import { motion } from 'framer-motion'

const Intro = () => {
    const transition ={duration: 2, type: 'spring'}

    const theme =useContext(themeContext);
    const darkMode = theme.state.darkMode;  

  return (
    <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span style={{color: darkMode? 'white': ''}}>Hy! I Am</span>
                <span>Suraj Shukla</span>
                <span>Frontend Developer with high level of experience in web designing and development, producing the QUALITY Work</span>
            </div>
            <Link to="contact" smooth={true} spy={true}>
                <button className="i-button button">Hire me</button>
            </Link>
            <div className="i-icons">
                <a href="https://github.com/surajshukla001">
                    <img src={Github} alt="" />
                </a>
                <a href="https://linkedin.com/in/suraj-shukla-192b9b201">
                    <img src={Linkedin} alt="" />
                </a>
                <a href="https://instagram.com">
                    <img src={Instagram} alt="" />
                </a>
            </div>
        </div>

        <div className="i-right">
            <img src={Vector1} alt="" />
            <img src={Vector2} alt="" />
            <img src={boy} alt="" />
            <motion.img
            initial={{left: '-36%'}}
            whileInView={{left: '-24%'}}
            transition={transition}
            src={glassesimoji} alt="" />
            <motion.div
            initial={{top: '-4%', left: '74%'}}
            whileInView={{left: '68%'}}
            transition={transition}
            className='floating-div'
            >
                <FloatingDiv image={Crown} txt1='Web' txt2='Developer' />
            </motion.div>
            <motion.div
            className='floating-div'
            initial={{top: '18rem', left: '9rem'}}
            whileInView={{left: '0rem'}}
            transition={transition}
            >
                <FloatingDiv image={thumbup} txt1='Best Design' txt2='Award'/>
            </motion.div>
            {/* {Blur Div} */}
            <div className="blur" style={{background: "rgb(238 210 255)"}}></div>
            <div className="blur" style={{background: "#c1f5ff", top:'17rem', width: '21rem', height: '11rem', left: '-9rem'}}></div>
        </div>
    </div>
    )
}

export default Intro