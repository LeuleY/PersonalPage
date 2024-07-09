import React from "react"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default {
    Name: " Leule Yonas" ,
    Title: " Software Engineer" ,
    Email: "leulemerso2003@gmail.com",


    Socials:{
        LinkedIn:{
            link: "https://www.linkedin.com/in/leule-yonas-2894301b5/",
            text: ' MyLinkedIn',
            icon: <LinkedInIcon/>,

        },

        Github:{
            link: "https://github.com/LeuleY",
            text: ' MyGithub',

            icon: <GitHubIcon/>,


        }
    },

    About: "Dedicated focus on problem-solving and collaborative teamwork for thriving in software development. Very eager to apply experience to intricate projects, Willing to learn and work  and very enthusiastic about contributing knowledge in a professional setting. ",

    Experiences:[
        {
            Title: " Data Science",
            Date: "Jan 2024 - May 2024",
            Description: "Baltimore Data Science Corps , focused on analytics of Baltimore 311 calls and Baltimore crime. Researched, analyzed, and organized public Baltimore crime data to highlight and bring awareness to criminal activity problems.Used Streamlit and Pandas with Python to clean the data and transform CSV files into a functional map graph to visualize the cleaned data. Worked in an Agile environment to organize data and look at trends that affected the city of Baltimore. ",

        },

        {
            Title: "IT Assistant",
            Date: "Spring 2023 - Fall 2023",
            Description: "Provided technical assistance to students and faculty with technical questions, troubleshooting problems, network service access requests, and software installation. Tutored and assisted students with understanding significant course concepts, developing problem-solving strategies and study techniques"

        },


    ],

    
    Education:[
        {
            School: " Towson University ",
            Date: "Sep 2021 - May 2025",
            Degree: "Bachelor of Science in Computer Science"
        },

        


    ],

    Skills:[
        {title: "LANGUAGES",
         description: ["JAVA", "PYTHON", "JavaScript", "R", "HTML" , "CSS" ] 


        },
        {title: "DBMS",
            description: ["MongoDB", "PostgreSQL", "Supabase", "MYSQL"  ]   
   
   
        },
        {title: "TOOLS & FRAMEWORKS",
            description: ["GIT", "REACTJS", "DOCKER", "NODE" , "GITHUB" , "JUPYTER", "FLASK" , "PYSCRIPT" ]    
    
        },{title: "OPERATING SYSTEMS",
            description: ["LINUX", "WINDOWS", "MAC",  ] 



        },

    ],
};