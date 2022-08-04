export const Skills = {
    FrontEnd:[
        {
            name: "ReactJS",
            proficiency: 5
        },
        {
            name: "Typescript",
            proficiency: 5
        },
        {
            name: "Javascript",
            proficiency: 5
        },
        {
            name: "HTML",
            proficiency: 4
        },
        {
            name: "CSS",
            proficiency: 4
        }
    ],
    BackEnd:[
        {
            name:"NodeJS & Express",
            proficiency:4
        },
        {
            name: "Flask",
            proficiency: 4
        },

    ],
    Cloud:[
        {
            name:"AWS API Gateway",
            proficiency:4
        },
        {
            name:"AWS Lambda",
            proficiency:3
        },
        {
            name:"AWS DynamoDB",
            proficiency:3
        },
        {
            name:"AWS S3",
            proficiency:3
        },
        {
            name:"AWS Cognito",
            proficiency:2
        }
    ],
    OtherLanguages: [
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
    OtherTech: [
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
            name: "MySQL",
            proficiency: 3
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

        name:"Children's University",
        position:"application developer",
        experienceType:"Internship",
        location:"Perth",
        startDate:"Jun 2022",
        endDate:"Jul 2022",
        description:"Developed a mobile map application using google AppSheet"
    },
    {
        name:"Sites4Good",
        position:"Website Designer",
        experienceType:"volunteer",
        location:"Perth",
        startDate:"Jul 2021",
        endDate:"Nov 2021",
        description:"Designed a website using WIX for a charity in WA.",
        // majorAchievements:["Website design", "SEO theory", "Interaction with clients"]
    
    },
    {
        name:"Takor Group",
        position:"Front-end Developer",
        experienceType:"Internship",
        location:"Perth",
        startDate:"Mar 2021",
        endDate:"Jul 2021",
        description:"Participated in the front-end development of a website application",
        // majorAchievements:["TypeScript and ReactJS", "Team workflow with GIT", ""]
    }
]

export const Projects = [
    {
        name:"Kalina Horse Rescue Website",
        img:"KHR.PNG",
        url:"",
        gitHub:"https://github.com/Wenze0614/KHR-Web.git",
        tools:["ReactJS", "TypeScript", "StrapiJS", "AWS", "SendGrid", "GraphQL", "Material UI"],
        description:"This is the website that I am currently building for a horse charity called Kalina Horse Rescue. I used a headless content management system called StrapiJS as the server, which has been deployed to Heroku, and a ReactJS web app for front end. The purpose of this website is to show clients all the horses rehabited in KHR and provide them a way of donating, sponsoring, and adopting, through email plugin and paypal API. "
    },
    {
        name:"Wenze's Website",
        img:"MyWeb.PNG",
        gitHub:"https://github.com/Wenze0614/portfolio.git",
        url:"https://wenze0614.netlify.com",
        tools:["ReactJS","TypeScript", "Material UI"],
        description:"The first website for myself, which contains my information and projects. This website is built with ReactJS and Typescript. Currently it is a static website with only react. Later on I will set up a NodeJS server to connect to."
    },
    {
        name:"Smart Watering System",
        img:"waterSystem.PNG",
        url:"",
        gitHub:"https://github.com/Wenze614/CITS5506.git",
        tools:["ReactJS", "Flask", "InfluxDB","Raspberry Pi"],
        description:"This is an IoT project with Raspberry Pi. Our goal of this project is to design a smart watering system where people can monitor and water their plants through our application. ReactJS is used for the front-end. FLask is used for the back-end. InfluxDB is used to store data from sensors."
    },
    {
        name:"US Mining Accidents Data Analysis",
        img:"USData.PNG",
        url:"",
        gitHub:"",
        tools:["R", "ggplot2", "R MarkDown"],
        description:"A data analysis project, where I used R markdown to document the analysis of different factors from the given data, and ggplot2 for plotting. "
    },
    {
        name:"Car Price Data Analysis and Prediction",
        img:"carPrice.PNG",
        url:"",
        gitHub:"",
        tools:["PowerBI", "R", "Machine Learning"],
        description:"A data analysis project where I need to build price prediction modals for the car price of a given brand. 2 Models wrere built, one is by logistic regression, the other one is by random forest. Power BI is then used to present the data of these 2 models"
    }
]