import React from 'react'
import './Home.css'
import Piano from "../assets/piano.mp4"
export default function Home() {
    return (
        <div className='home'>
            <div className='video-container'>
                <video autoPlay loop>
                    <source id="mp4" src="../assets/piano.mp4" type="video/mp4" />
                    <p>What happened?</p>
                </video>
            </div>
        </div>
    )
}
