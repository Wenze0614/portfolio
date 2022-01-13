import React from 'react'
import './Profile.css'
import profile from '../assets/profile.JPG'
import Card from '../components/UI/Card'
export default function Profile() {
    return (
        <div className='profile-container'>
            <Card className='profile-photo-container'>
                    <img src={profile} alt="myPic"></img>
            </Card>
            <Card className='contact-info'>
                <h3>My Name:<span>Wenze Zhang</span></h3>
            </Card>
        </div>
    )
}
