import React from 'react'
import './Profile.css'
import profile from '../assets/profile.JPG'
import Card from '../components/UI/Card'
import Tooltip from '@mui/material/Tooltip';
import MyAccordion from '../components/UI/MyAccordion';
export default function Profile() {
    return (
        <div className='profile-container'>
            <Card className='profile-photo-container'>
                <img src={profile} alt="myPic"></img>
            </Card>
            <Card className='contact-info'>
                <h3>My Name:<span>Wenze Zhang</span></h3>
                <h3>My Age:<span>21</span></h3>
                <h3>My Gender:<span>Male</span></h3>
                <h3>My Status:<span>Student</span></h3>
                <h3>Where am I from:<span>China</span></h3>
                <h3>Current Degree:<span>Master of IT (UWA)</span></h3>
                <h3>Email:<span>wenze0614@gmail.com</span></h3>
                <p>Hi! This is Wenze. Welcome to my website!</p>
                <p>This profile contains the following sections: Skills, Education, Experiences</p>
                <p><Tooltip title="Jump to Skills"><span>Skills</span></Tooltip> lists all the programming languages that I used before</p>
                <p><Tooltip title="Jump to Education"><span>Education</span></Tooltip> lists all my degrees</p>
                <p><Tooltip title="Jump to Experiences"><span>Experiences</span></Tooltip> lists all my project experiences</p>
            </Card>
            <Card className='profile-detail'>
                <MyAccordion label="Skills"></MyAccordion>
                <MyAccordion label="Education"></MyAccordion>
                <MyAccordion label="Experiences"></MyAccordion>
            </Card>
        </div>
    )
}
