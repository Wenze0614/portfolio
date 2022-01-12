import './Home.css'
import Piano from "../assets/piano.mp4"
import { useState } from 'react'
export default function Home() {
    const [play,setPlay] = useState(true)
    return (
        <div className='home'>
            <div className='video-container'>
                <video autoPlay loop muted={play}>
                    <source id="mp4" src={Piano} type="video/mp4" />
                </video>
            </div>
            <button onClick={()=>setPlay(false)}>Play</button>
        </div>
    )
}
