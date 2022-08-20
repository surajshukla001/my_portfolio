import React from 'react'
import './Services.css'
import HeartEmoji from '../../img/heartemoji.png'
import Glasses from "../../img/glasses.png"
import Humble from "../../img/humble.png"
import Card from '../Card/Card'
import Resume from './_Suraj_Shukla-Full_Stack_Developer_(Gurukula Kangri University, Haridwar).pdf'
import { themeContext } from '../../Context'
import { useContext } from 'react'
import {motion} from 'framer-motion'

const Services = () => {

    const transition ={duration: 1, type: 'spring'}

    const theme =useContext(themeContext);
    const darkMode = theme.state.darkMode;  

  return (
    <div className="services" id='services'>
        {/* {left side} */}
        <div className="awesome">
            <span style={{color: darkMode? 'white': ''}}>My Awesome</span>
            <span>Services</span>
            <span>
                <ul>
                    <li>

                    I am highly skilled in a wide variety of coding niches,<br /> from databases to graphic design and UI/UX management
                    
                    </li>
                    <li>

                    Testing and maintaining the responsive<br/> design of applications

                    </li>
                    <li>

                    Working with graphic designers<br/> to design new features

                    </li>
                    <li>

                    Developing APIs and RESTful services

                    </li>

                </ul>
            </span>
            <a href={Resume} download>
                <button className="button s-button">Download CV</button>
            </a>
            <div className="blur s-blur1" style={{background: "#abf1ff94"}}></div>
        </div>

        {/* {Right Side} */}
        <div className="cards">
            <motion.div
            whileInView={{left: '14rem'}}
            initial={{left: '25rem'}}
            transition={transition}
            >
                <Card
                emoji={HeartEmoji}
                heading={'Design'}
                detail={"Figma, Sketch, Photoshop, Adobe Illustrator, Adobe xd"}
                />
            </motion.div>

            <motion.div
            initial={{ left: "-11rem", top: "12rem" }}
            whileInView={{ left: "-4rem" }}
            transition={transition}
            >
                <Card
                emoji={Glasses}
                heading={'Developer'}
                detail={'Html, Css, JavaScript, React, Nodejs, Express'}
                />
            </motion.div>

            <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
          >
                <Card
                emoji={Humble}
                heading={'UI/UX'}
                detail={'UX research, Collaboration, Prototyping and wireframing, UX writing'}
                />
            </motion.div>
            <div className="blur s-blur2" style={{background: "var(--purple)"}}></div>
        </div>
    </div>
    )
}

export default Services