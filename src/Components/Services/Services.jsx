import React from 'react'
import './Services.css'
import HeartEmoji from '../../img/heartemoji.png'
import Glasses from "../../img/glasses.png"
import Humble from "../../img/humble.png"
import Card from '../Card/Card'
import Resume from './resume.pdf'
import { themeContext } from '../../Context'
import { useContext } from "react";
import {motion} from 'framer-motion'

const Services = () => {

    const transition ={duration: 2, type: 'spring'}

    const theme =useContext(themeContext);
    const darkMode = theme.state.darkMode;  

  return (
    <div className="services" id='services'>
        {/* {left side} */}
        <div className="awesome">
            <span style={{color: darkMode? 'white': ''}}>My Awesome</span>
            <span>Services</span>
            <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit,
                <br />
                Lorem ipsum dolor sit amet.
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
            initial={{left: '25%'}}
            transition={transition}
            style={{left: '14rem'}}>
                <Card
                emoji={HeartEmoji}
                heading={'Design'}
                detail={"Figma, Sketch, Photoshop, Adobe, Adobe xd"}
                />
            </motion.div>

            <div style={{top: '12rem', left: '-4rem'}}>
                <Card
                emoji={Glasses}
                heading={'Developer'}
                detail={'HTML, CSS, javaScript, React, Photoshop, Figma, Sketch'}
                />
            </div>

            <div style={{top: '19rem', left: '12rem'}}>
                <Card
                emoji={Humble}
                heading={'UI/UX'}
                detail={'Lorem                 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum, perferendis quaerat, nemo veniam obcaecati sit ex'}
                />
            </div>
            <div className="blur s-blur2" style={{background: "var(--purple)"}}></div>
        </div>
    </div>
    )
}

export default Services