import React from "react";
import{BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const HeaderSocials = () => {
    return (
        <div className="header_socials">
            <a href="https://www.linkedin.com/in/uardem-junior/" target="_blank"><BsLinkedin/></a>
            <a href="https://github.com/UardemDantas" target="_blank"><FaGithub/></a>
        </div>
    )
}

export default HeaderSocials