import React from 'react'
import Card from './UI/Card'
import Button from '@mui/material/Button';
import "./Degree.css"
import MyModal from './UI/MyModal';
import { useState } from 'react';
type DegreeProps = {
    name: string,
    school: string,
    startDate: string,
    endDate: string,
    WAM: string,
    GPA: string,
    academicTranscript: string[]

}
export default function Degree(props: DegreeProps) {
    const [open, setOpen] = useState(false)
    return (
        <Card className='profile-detail-section'>
            <MyModal open={open} handleClose={()=>{setOpen(false)}}>
                {props.academicTranscript.map((item,index)=>{
                    console.log(item)
                    return(<img src={require(`../assets/${item}`)} key={index} alt="academic transcript"></img>)
                })}
            </MyModal>
            <section>
                <h3>{props.name}</h3>
                <label>{props.school}</label>
                <p>WAM : <span>{props.WAM}</span></p>
                <p>GPA : <span>{props.GPA}</span></p>
            </section>
            <section>
                <h3>{props.startDate} - {props.endDate}</h3>
                <Button variant="outlined" onClick={()=>{setOpen(true)}}>Academic Transcript</Button>
            </section>
        </Card>
    )
}
