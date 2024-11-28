import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
import {SiLeetcode} from "react-icons/si"

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Yash Maini</h4>
      <h4>Copyright &copy; 2024 YM</h4>
      <div className='footerLinks'>
        <a href="https://github.com/Yashmaini30" target='_blank' rel='noreferrer'><FaGithub/></a>
        <a href="https://www.linkedin.com/in/yash-maini-369869198/" target='_blank' rel='noreferrer'><FaLinkedin/></a>
        <a href='mailTo:mainiyash2@gmail.com' target='_blank' rel='noreferrer'><GrMail/></a>
        <a href="https://leetcode.com/u/yashmaini/" target="_blank" rel='noreferrer'><SiLeetcode/></a>
      </div>
    </footer>
  )
}

export default Footer