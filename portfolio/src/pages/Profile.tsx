
import './Profile.css'
import profile from '../assets/profile.JPG'
import Card from '../components/UI/Card'
import MyAccordion from '../components/UI/MyAccordion';
import Rating from '@mui/material/Rating';
import { Skills, Educations, Experiences } from '../Data';
import Detail from '../components/Detail';
import SkillSection from '../components/SkillSection';

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
                <p><span>Skills</span> lists all the programming languages and other techs that I am familiar with and have used before</p>
                <p><span>Education</span> lists all my degrees</p>
                <p><span>Experiences</span> lists all my work, internship and volunteer experiences</p>
            </Card>
            <Card className='profile-detail'>
                <MyAccordion label="Skills" id="skills">
                    <SkillSection name="Front End" dataName='FrontEnd'></SkillSection>
                    <SkillSection name="Back End" dataName='BackEnd'></SkillSection>
                    <SkillSection name="Cloud Web Dev" dataName='Cloud'></SkillSection>
                    <SkillSection name="Other Languages" dataName='OtherLanguages'></SkillSection>
                    <SkillSection name="Others" dataName='OtherTech'></SkillSection>
                </MyAccordion>
                <MyAccordion label="Education" id="education">
                    {Educations.uwa.degrees.map((item, index) => {
                        return (
                            <Detail
                                key={index}
                                type="degree"
                                name={item.name}
                                school={Educations.uwa.name}
                                startDate={item.startDate}
                                endDate={item.endDate}
                                WAM={item.WAM}
                                GPA={item.GPA}
                                academicTranscript={item.academicTranscript} ></Detail>)
                    })}
                </MyAccordion>
                <MyAccordion label="Experiences" id="experiences">
                    {Experiences.map((item, index) => {
                        return (
                            <Detail
                                key={index}
                                type="experience"
                                name={item.name}
                                position={item.position}
                                experienceType={item.experienceType}
                                location={item.location}
                                startDate={item.startDate}
                                endDate={item.endDate}
                                description={item.description}
                                ></Detail>
                        )
                    })}
                </MyAccordion>
            </Card>
        </div>
    )
}
