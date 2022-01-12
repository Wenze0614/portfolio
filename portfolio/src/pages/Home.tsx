import React from 'react'
import './Home.css'
import Piano from "../assets/piano.mp4"
export default function Home() {
    return (
        <div className='home'>
            <div className='video-container'>
                <video autoPlay loop muted>
                    <source id="mp4" src={Piano} type="video/mp4" />
                </video>
            </div>
        </div>
    )
}
