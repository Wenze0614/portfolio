import React from 'react'
import Card from './UI/Card'
import Button from '@mui/material/Button';
import "./Degree.css"
type DegreeProps = {
    name: string,
    school: string,
    startDate: string,
    endDate: string,
    WAM: string,
    GPA: string,
    academicTranscript: string

}
export default function Degree(props: DegreeProps) {
    return (
        <Card className='profile-detail-section'>
            <section>
                <h3>{props.name}</h3>
                <label>{props.school}</label>
                <p>WAM : <span>{props.WAM}</span></p>
                <p>GPA : <span>{props.GPA}</span></p>
            </section>
            <section>
                <h3>{props.startDate} - {props.endDate}</h3>
                <Button variant="outlined">Academic Transcript</Button>
            </section>
        </Card>
    )
}
