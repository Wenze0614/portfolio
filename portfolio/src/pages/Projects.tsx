import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { Projects as projects } from '../Data';
import "./Projects.css"
import { useState } from 'react';
import MyModal from '../components/UI/MyModal';

type project = {
    name: string;
    img: string;
    url: string;
    gitHub: string;
    tools: string[];
    description: string;
}
export default function Projects() {
    const [active, setActive] = useState(false)
    const [selected, setSelected] = useState<project>()
    return (
        <div className='projects-container'>
            {projects.map((item, index) => {
                return (
                    <Card sx={{ maxWidth: 345 }} key={index} className="project-item">
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="140"
                            image={require(`../assets/${item.img}`)}
                        />
                        <CardContent>
                            <h3>
                                {item.name}
                            </h3>
                            <p>
                                {item.description.slice(0, 100)}...
                            </p>
                        </CardContent>
                        <CardActions>
                            <Button size="small" onClick={() => { setActive(true); setSelected(item); console.log(item) }}>Learn More</Button>
                        </CardActions>
                    </Card>)
            })}
            {active ? <MyModal open={active} handleClose={() => { setActive(false) }} className="project-detail">
                <div className='img-wrapper'>
                    <img src={require(`../assets/${selected?.img}`)} alt="project img"></img>
                </div>
                <div className='project-detail-content'>
                    <section>
                        <label>Introduction</label>
                        <p>{selected?.description}</p>
                    </section>
                    <section className='project-info'>
                        <h2>{selected?.name}</h2>
                        {selected?.gitHub ? <label>GitHub: <a href={selected.gitHub} target={'_blank'} rel="noreferrer">{selected.gitHub}</a></label> : null}
                        {selected?.url ? <><label>URL: </label><a href={selected.url} target={'_blank'} rel="noreferrer">{selected.url}</a></>: null}
                        <div className='tools'>

                            <label>What's used in this project</label>
                            <ul className='tool-list'>
                                {selected?.tools.map((item, index) => {
                                    return (
                                        <li key={index}>
                                            {item}
                                        </li>)
                                })}
                            </ul>
                        </div>
                    </section>
                </div>
            </MyModal> : <></>
            }

        </div >)
}
