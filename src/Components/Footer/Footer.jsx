import React from 'react'
import './Footer.css'

import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Facebook from '@iconscout/react-unicons/icons/uil-facebook'
import Github from '@iconscout/react-unicons/icons/uil-github'
import Wave from '../../img/wave.png'

const Footer = () => {
  return (
    <div className="footer">
        <img src={Wave}  style={{width: '100%'}} alt="" />
        <div className="f-content">
            <span>shukla.suraj4dev@gmail.com</span>
            <div className="f-icons">
                <a href="">
                    <Insta color='white' size='3rem'/>
                </a>
                <a href="">
                    <Facebook color='white' size='3rem'/>
                </a>
                <a href="">
                    <Github color='white' size='3rem'/>
                </a>
            </div>
        </div>
    </div>
    )
}

export default Footer