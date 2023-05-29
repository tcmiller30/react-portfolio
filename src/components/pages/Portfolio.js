import React from "react";
import Project from "../Project";
import { weatherDashboardImg, workDaySchedulerImg,passwordGeneratorImg, 
    codeQuizImg, noteTakerImg } from "../../assets";

export default function Portfolio() {

    const projectList = [
        {
            "name": "Weather Dashboard",
            "deployed_url": "https://tcmiller30.github.io/weather-dashboard/",
            "github_url": "https://github.com/tcmiller30/weather-dashboard",
            "img_src": weatherDashboardImg,
        },
        {
            "name": "Work Day Scheduler",
            "deployed_url": "https://tcmiller30.github.io/work-day-scheduler/",
            "github_url": "https://github.com/tcmiller30/weather-dashboard",
            "img_src": workDaySchedulerImg,
        },
        {
            "name": "Password Generator",
            "deployed_url": "https://tcmiller30.github.io/password-generator/",
            "github_url": "https://github.com/tcmiller30/password-generator/",
            "img_src": passwordGeneratorImg,
        },
        {
            "name": "Code Quiz",
            "deployed_url": "https://tcmiller30.github.io/coding-quiz-challenge/",
            "github_url": "https://github.com/tcmiller30/coding-quiz-challenge/",
            "img_src": codeQuizImg,
        },
        {
            "name": "Note Taker",
            "deployed_url": "https://boiling-everglades-64675.herokuapp.com/",
            "github_url": "https://github.com/tcmiller30/note-taker/",
            "img_src": noteTakerImg,
        },
        {
            "name": "CMS-Style Tech Blog",
            "deployed_url": "https://tcmiller30.github.io/tech-blog/",
            "github_url": "https://github.com/tcmiller30/tech-blog/",
            "img_src": noteTakerImg,
        }
    ]
    return (
        <main className="container">
            <h2 className="section-title"> Web Development Portfolio </h2>
            <div className="project-list row">
                {projectList.map((project, i) => (
                    <div className="col-md-6 col-lg-4" key={i}>
                    <Project
                        key={i}
                        name={project.name}
                        github_url={project.github_url}
                        deployed_url={project.deployed_url}
                        img_src={project.img_src}
                    />
                    </div>
                ))}
            </div>
        </main>
    )
}
