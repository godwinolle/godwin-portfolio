import React from 'react';

import ReactTypingEffect from 'react-typing-effect' //typingeffect for full stack developer
import { GrGithub } from 'react-icons/gr'
import { FaLinkedin } from 'react-icons/fa'
import { TiSocialInstagram } from 'react-icons/ti'
import { FiPaperclip } from 'react-icons/fi'

import godwin from '../../assets/about.JPG' //this image is the main image seen when coming to the site

import './homeHead.css'


const arrayText = ['computer science student', 'full stack developer']

const insta = `https://www.instagram.com/godwin.codes/?hl=en`
const linkedin = `https://www.linkedin.com/in/godwin-olletey-4438a4166/`
const github = `https://github.com/godwinolle`
const email = `mailto: godwinolle@gmail.com`

const homeHead = () => {
    return (
        <div className="home-head">
            <div className="home-img">
                <img src={ godwin } alt="godwin" />
            </div>
            <div className="social-links">
                <a href={ github }><GrGithub /></a>
                <a href={ linkedin }><FaLinkedin /></a>
                <a href={ insta }><TiSocialInstagram /></a>
                <a href={ email }><FiPaperclip /></a>
            </div>
            <h1>GODWIN CODES</h1>
            <hr />
            <div className="typewriter">
                <ReactTypingEffect 
                text={arrayText} 
                speed={300}
                eraseSpeed={300}
                />
            </div>
        </div>
    )
}

export default homeHead;