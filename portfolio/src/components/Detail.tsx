import React from 'react'
import Card from './UI/Card'
import Button from '@mui/material/Button';
import "./Detail.css"
import MyModal from './UI/MyModal';
import { useState } from 'react';
type DegreeProps = {
    type: "degree",
    name: string,
    school: string,
    startDate: string,
    endDate: string,
    WAM: string,
    GPA: string,
    academicTranscript: string[]

}

type ExperiencesProps = {
    type: "experience"
    name: string,
    position: string,
    experienceType: string,
    location: string,
    startDate: string,
    endDate: string,
    description: string
}
export default function Detail(props: DegreeProps | ExperiencesProps) {
    const [open, setOpen] = useState(false)
    return (
        <Card className='profile-detail-section'>
            {props.type === 'degree' ? (<>
                <MyModal open={open} handleClose={() => { setOpen(false) }}>
                    {/* <div className='img-wrapper'> */}
                        {props.academicTranscript.map((item, index) => {
                            console.log(item)
                            return (<img src={require(`../assets/${item}`)} key={index} alt="academic transcript"></img>)
                        })}
                    {/* </div> */}
                </MyModal>
                <section>
                    <h3>{props.name}</h3>
                    <label>{props.school}</label>
                    <p>WAM : <span>{props.WAM}</span></p>
                    <p>GPA : <span>{props.GPA}</span></p>
                </section>
                <section>
                    <h3>{props.startDate} - {props.endDate}</h3>
                    <Button variant="outlined" onClick={() => { setOpen(true) }}>Academic Transcript</Button>
                </section>
            </>) : (<>
                <section>
                    <h3>{props.name} - {props.location} </h3>
                    <label>{props.position} - {props.experienceType}</label>
                    <p>{props.description}</p>
                </section>
                <section>
                    <h3>{props.startDate} - {props.endDate}</h3>
                </section>
            </>)}

        </Card>
    )
}
