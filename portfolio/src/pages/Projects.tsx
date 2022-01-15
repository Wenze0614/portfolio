import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { Projects as projects } from '../Data';
import "./Projects.css"
export default function Projects() {
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
                                {item.description}
                            </p>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>)
            })}
        </div>)
}
