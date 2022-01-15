import React from 'react'
import './Profile.css'
import profile from '../assets/profile.JPG'
import Card from '../components/UI/Card'
import Tooltip from '@mui/material/Tooltip';
import MyAccordion from '../components/UI/MyAccordion';
import Rating from '@mui/material/Rating';
import { Skills, Educations } from '../Data';
import Degree from '../components/Degree';
// const skills = {
//     languages: [
//         {
//             name: "Javascript",
//             proficiency: 5
//         },
//         {
//             name: "Typescript",
//             proficiency: 5
//         },
//         {
//             name: "HTML",
//             proficiency: 4
//         },
//         {
//             name: "CSS",
//             proficiency: 4
//         },
//         {
//             name: "Python",
//             proficiency: 3
//         },
//         {
//             name: "R",
//             proficiency: 3
//         },
//         {
//             name: "Java",
//             proficiency: 2
//         },
//         {
//             name: "C",
//             proficiency: 2
//         }
//     ],
//     tech:[
//         {
//             name:"ReactJS",
//             proficiency:5
//         },
//         {
//             name:"GIT",
//             proficiency:5
//         },
//         {
//             name:"StrapiJS",
//             proficiency:5
//         },
//         {
//             name:"Power BI",
//             proficiency:4
//         },
//         {
//             name:"AWS",
//             proficiency:3
//         },
//         {
//             name:"MySQL",
//             proficiency:3
//         },
//         {
//             name:"Flask",
//             proficiency:2
//         },
//     ]
// }
export default function Profile() {
    return (
        <div className='profile-container'>
            <Card className='profile-photo-container'>
                <img src={profile} alt="myPic"></img>
            </Card>
            <Card className='contact-info'>
                <h3>My Name:<span>Wenze Zhang</span></h3>
                <h3>My Age:<span>21</span></h3>
                <h3>My Gender:<span>Male</span></h3>
                <h3>My Status:<span>Student</span></h3>
                <h3>Where am I from:<span>China</span></h3>
                <h3>Current Degree:<span>Master of IT (UWA)</span></h3>
                <h3>Email:<span>wenze0614@gmail.com</span></h3>
                <p>Hi! This is Wenze. Welcome to my website!</p>
                <p>This profile contains the following sections: Skills, Education, Experiences</p>
                <p><Tooltip title="Jump to Skills"><span>Skills</span></Tooltip> lists all the programming languages that I used before</p>
                <p><Tooltip title="Jump to Education"><span>Education</span></Tooltip> lists all my degrees</p>
                <p><Tooltip title="Jump to Experiences"><span>Experiences</span></Tooltip> lists all my project experiences</p>
            </Card>
            <Card className='profile-detail'>
                <MyAccordion label="Skills">
                    <Card className='profile-detail-section'>
                        <label>Languages</label>
                        <ul>
                            {Skills.languages.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <h3>{item.name}</h3>
                                        <Rating name="read-only" value={item.proficiency} style={{ color: "rgb(97, 94, 233)" }} readOnly />
                                    </li>
                                )
                            })}

                        </ul>
                    </Card>
                    <Card className='profile-detail-section'>
                        <label>Technologies</label>
                        <ul>
                            {Skills.tech.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <h3>{item.name}</h3>
                                        <Rating name="read-only" value={item.proficiency} style={{ color: "rgb(97, 94, 233)" }} readOnly />
                                    </li>
                                )
                            })}

                        </ul>
                    </Card>
                </MyAccordion>
                <MyAccordion label="Education">
                    {Educations.uwa.degrees.map((item, index) => {
                        return(
                        <Degree
                            key={index}
                            name={item.name}
                            school={Educations.uwa.name}
                            startDate={item.startDate}
                            endDate={item.endDate}
                            WAM={item.WAM}
                            GPA={item.GPA}
                            academicTranscript={item.academicTranscript} ></Degree>)
                    })}
                </MyAccordion>
                <MyAccordion label="Experiences"></MyAccordion>
            </Card>
        </div>
    )
}
