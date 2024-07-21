import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LaunchSharpIcon from '@mui/icons-material/LaunchSharp';

// Define the data object
const resumeData = {
    Name: "Leule Yonas",
    Title: "Software Engineer",
    Email: "leulemerso2003@gmail.com",

    Socials: {
        LinkedIn: {
            link: "https://www.linkedin.com/in/leule-yonas-2894301b5/",
            text: 'My LinkedIn',
            icon: <LinkedInIcon />,
        },
        Github: {
            link: "https://github.com/LeuleY",
            text: 'My GitHub',
            icon: <GitHubIcon />,
        }
    },

    About: "Hi, I am Leule Yonas, a dedicated software engineer focused on problem-solving and collaborative teamwork for thriving in a software development environment. I am very eager to apply my experiences to intricate projects. Always willing to learn and work. That being said, I am very enthusiastic about contributing my knowledge in a professional setting. Thrilled to show you what I am capable of.",

    Experiences: [
        {
            Title: "TU-COE Robotics Summer Camp Instructor",
            Date: "June 2024 - Aug 2024",
            Description: "TU-COE-Robotics Program focused on helping students improve STEM and creativity skills, and develop their expressive language."
        },
        {
            Title: "National Science Foundation (NSF) Data Science Corps",
            Date: "Jan 2024 - May 2024",
            Description: "Baltimore Data Science Corps focused on analytics of Baltimore 311 calls and Baltimore crime. Researched, analyzed, and organized public Baltimore crime data to highlight and bring awareness to criminal activity problems. Used Streamlit and Pandas with Python to clean the data and transform CSV files into a functional map graph to visualize the cleaned data. Worked in an Agile environment to organize data and look at trends that affected the city of Baltimore.",
        },
        {
            Title: "IT Assistant",
            Date: "Spring 2023 - Fall 2023",
            Description: "Provided technical assistance to students and faculty with technical questions, troubleshooting problems, network service access requests, and software installation. Tutored and assisted students with understanding significant course concepts, developing problem-solving strategies, and study techniques."
        }
    ],

    Education: [
        {
            School: "Towson University",
            Date: "Sep 2021 - May 2025",
            Degree: "Bachelor of Science in Computer Science"
        }
    ],

    Skills: [
        {
            title: "LANGUAGES",
            description: ["Java", "Python", "JavaScript", "R", "HTML", "CSS"]
        },
        {
            title: "DBMS",
            description: ["MongoDB", "PostgreSQL", "Supabase", "MYSQL"]
        },
        {
            title: "TOOLS & FRAMEWORKS",
            description: ["GIT", "REACTJS", "DOCKER", "NODE", "GITHUB", "JUPYTER", "FLASK", "PYSCRIPT"]
        },
        {
            title: "OPERATING SYSTEMS",
            description: ["LINUX", "WINDOWS", "MAC"]
        }
    ],

    projects: [
        {
            tag: 'WebDev',
            images: [
                'https://i.imgur.com/Pj8YZ3B.png',
                'https://i.imgur.com/cOGVEGb.png',
            ],
            title: 'Top Song Generator',
            caption: "Website that displays the top 10 songs of the artist you enter.",
            description: 'A service website that allows the user to enter an artist of their choice. The website will then display the top 10 songs the artist has in order of highest streams. Used Python to construct the code and receive client ID and client Secret from Spotify API. Used Flask to translate HTML code to display to live host.',
            links: [
                {
                    link: 'www.google.com',
                    icon: <GitHubIcon />
                },
            ],
        },
        {
            tag: 'DataScience',
            images: [
                'https://i.imgur.com/IrxENQU.png',
                'https://i.imgur.com/8P2YiXd.png',
                'https://i.imgur.com/1pNBITB.png',
                'https://i.imgur.com/kLovFOD.png',
                'https://i.imgur.com/MHKrtSG.png',
            ],
            title: 'Baltimore Data Science Corps',
            caption: "Research Program with the NSF analyzing Baltimore crime and 311 calls to track trends.",
            description: 'Baltimore Data Science Corps focused on analytics of Baltimore 311 calls and Baltimore crime. Researched, analyzed, and organized public Baltimore crime data to highlight and bring awareness to criminal activity problems. Used Streamlit and Pandas with Python to clean the data and transform CSV files into a functional map graph to visualize the cleaned data. Worked in an Agile environment to organize data and look at trends affecting the city of Baltimore.',
            links: [
                {
                    link: 'https://311mappeddata.streamlit.app/',
                    icon: <LaunchSharpIcon />
                },
                {
                    link: 'https://github.com/LeuleY',
                    icon: <GitHubIcon />
                },
            ],
        },
        {
            tag: 'WebDev',
            images: [
                'https://i.imgur.com/oy8t3Jf.png',
                'https://i.imgur.com/XMCspli.png',
            ],
            title: 'Personal Resume',
            caption: "The exact website you are currently on!",
            description: 'Personal website to display Leule Yonas information and achievements. Used React and MUI as a framework to construct the resume page.',
            links: [
                {
                    link: 'https://github.com/LeuleY',
                    icon: <GitHubIcon />
                },
            ],
        },
    ]
};

// Export the variable
export default resumeData;
