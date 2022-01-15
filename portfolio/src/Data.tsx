export const Skills = {
    languages: [
        {
            name: "Javascript",
            proficiency: 5
        },
        {
            name: "Typescript",
            proficiency: 5
        },
        {
            name: "HTML",
            proficiency: 4
        },
        {
            name: "CSS",
            proficiency: 4
        },
        {
            name: "Python",
            proficiency: 3
        },
        {
            name: "R",
            proficiency: 3
        },
        {
            name: "Java",
            proficiency: 2
        },
        {
            name: "C",
            proficiency: 2
        }
    ],
    tech: [
        {
            name: "ReactJS",
            proficiency: 5
        },
        {
            name: "GIT",
            proficiency: 5
        },
        {
            name: "StrapiJS",
            proficiency: 5
        },
        {
            name: "Power BI",
            proficiency: 4
        },
        {
            name:"GraphQL",
            proficiency:3
        },
        {
            name: "AWS",
            proficiency: 3
        },
        {
            name: "MySQL",
            proficiency: 3
        },
        {
            name: "Flask",
            proficiency: 2
        },
    ]
}

export const Educations = {
    uwa: {
        name: "The University of Western Australia",
        degrees: [
            {
                name: "Master of Information Technology",
                startDate: "Jul 2021",
                endDate: "Present",
                WAM:"81.5",
                GPA:"6.750",
                academicTranscript:[
                    "master.PNG"
                ]
            },
            {
                name: "Bachelor of Computer Science",
                startDate: "Jul 2018",
                endDate: "Jun 2021",
                WAM:"75.6",
                GPA:"6.067",
                academicTranscript:[
                    "bachelor-1.PNG",
                    "bachelor-2.PNG"
                ]
            }
        ]
    }

}

export const Experiences = [
    {
        name:"Sites4Good",
        position:"Website Designer",
        experienceType:"volunteer",
        location:"Perth",
        startDate:"Jul 2021",
        endDate:"Nov 2021",
        description:"Design website using WIX for not-for-profit charities in WA.",
        // majorAchievements:["Website design", "SEO theory", "Interaction with clients"]
    
    },
    {
        name:"Takor Group",
        position:"Front-end Developer",
        experienceType:"Intern",
        location:"Perth",
        startDate:"Mar 2021",
        endDate:"Jul 2021",
        description:"Participated in the front-end development of a website application called Soar.",
        // majorAchievements:["TypeScript and ReactJS", "Team workflow with GIT", ""]
    }
]

export const Projects = [
    {
        name:"Kalina Horse Rescue Website",
        img:"KHR.PNG",
        url:"",
        gitHub:"https://github.com/Wenze0614/KHR-Web.git",
        tools:["ReactJS", "TypeScript", "StrapiJS", "AWS", "SendGrid", "Formik", "Yup", "GraphQL", "CSS module", "react pagination", "react router"],
        description:"This is the website that I am currently building for a horse charity called Kalina Horse Rescue. I used a headless content management system called StrapiJS as the server, which has been deployed to Heroku, and a ReactJS web app for front end. The purpose of this website is to show clients all the horses rehabited in KHR and provide them a way of donating, sponsoring, and adopting, through email plugin and paypal API. "
    },
    {
        name:"Wenze's Website",
        img:"MyWeb.PNG",
        gitHub:"",
        url:"",
        tools:[""],
        description:""
    },
    {
        name:"Smart Watering System",
        img:"waterSystem.PNG",
        url:"",
        gitHub:"",
        tools:[""],
        description:""
    },
    {
        name:"US Mining Accidents Data Analysis",
        img:"USData.PNG",
        url:"",
        gitHub:"",
        tools:[""],
        description:""
    },
    {
        name:"Car Price Data Analysis and Prediction",
        img:"carPrice.PNG",
        url:"",
        gitHub:"",
        tools:[""],
        description:""
    }
]