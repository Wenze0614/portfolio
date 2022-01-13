import './Home.css'
import Piano from "../assets/piano.mp4"
import { useState, useRef, useEffect } from 'react'
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';
export default function Home() {
    const [play, setPlay] = useState(false)
    const [volume, setVolume] = useState(0)
    const [active, setActive] = useState(false)
    const handleChangeVolume = (e: Event, newValue: number | number[]) => {
        setVolume(newValue as number)
    }
    const handlePlay = () => {
        if (play) {
            setPlay(false)
            setVolume(0)
        } else {
            setPlay(true)
            setVolume(30)
        }
    }
    const vid = useRef<HTMLVideoElement>(null)
    useEffect(() => {
        if (vid.current) {
            vid.current.volume = volume / 100
        }
    }, [volume])

    console.log(vid)
    return (
        <div className='home'>
            <div className='video-container'>
                <video autoPlay loop muted={!play} id="myVideo" ref={vid}>
                    <source id="mp4" src={Piano} type="video/mp4" />
                </video>
            </div>
            <div className={`home-content ${active ? "active" : ""}`}>
                <h2 onClick={handlePlay} className={`${play ? "onPlay" : "offPlay"}`}>Play</h2>
                <Stack spacing={2} direction="row" sx={{ mb: 1, width: 200, color: 'white' }} alignItems="center">
                    <VolumeDown />
                    <Slider aria-label="Volume" className={play ? "onPlay" : "offPlay"} value={volume} onChange={handleChangeVolume} />
                    <VolumeUp />
                </Stack>
                <h2 onClick={() => { setActive(true) }} className="">About Me</h2>
                <h2>Projects</h2>
                <h2 onClick={() => { setActive(false) }}>Home</h2>
            </div>
            {/* <div className={`profile ${active? "active":""}`}></div> */}
        </div>
    )
}
