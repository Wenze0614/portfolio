import './Home.css'
import Piano from "../assets/piano.mp4"
import profile from '../assets/profile.JPG'
import { useState, useRef, useEffect } from 'react'
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';
import Avatar from '@mui/material/Avatar';
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
export default function Home() {
    const navigate = useNavigate()
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
                <Stack spacing={2} direction="row" sx={{ mb: 1, color: 'white' }} alignItems="center" className="volume-slider">
                    <VolumeDown />
                    <Slider aria-label="Volume" className={play ? "onPlay" : "offPlay"} value={volume} onChange={handleChangeVolume} />
                    <VolumeUp />
                </Stack>
                <NavLink to='profile' onClick={() => { setActive(true) }} className={(NavStatus) => NavStatus.isActive ? 'active' : ''}>
                    <h2>About Me</h2>
                </NavLink>
                <NavLink to='projects' onClick={() => { setActive(true) }} className={(NavStatus) => NavStatus.isActive ? 'active' : ''}><h2>Projects</h2></NavLink>
                <NavLink to='/' onClick={() => { setActive(false) }} className={(NavStatus) => NavStatus.isActive ? 'active' : ''}><h2>Home</h2></NavLink>
            </div>
            <div className={`page-container ${active ? "active" : ""}`}>
                <Outlet></Outlet>
            </div>
        </div>
    )
}
