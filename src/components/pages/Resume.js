import React from "react";

export default function Resume() {
    return (
        <main className="container">
            <h2 className="section-title"> Hello from Resume </h2>
            <button className="btn btn-secondary">    
                <a href='./assets/travis-miller-resume.pdf' download>Download Resume</a>
            </button>
            <div className="row align-self-center">
                <div className="col-sm-12 col-md-6">
                    <h3>Front-end Proficiencies</h3>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>JQuery</li>
                        <li>React</li>
                        <li>Bootstrap</li>
                    </ul>\
                </div>
                <div className="col-sm-12 col-md-6">
                    <h3>Back-end Proficiencies</h3>
                    <ul className="skills-list">
                        <li>APIs</li>
                        <li>Node</li>
                        <li>Express</li>
                        <li>MySQL, Sequelize</li>
                        <li>MongoDB, Mongoose</li>
                        <li>REST</li>
                    </ul>
                </div>
            </div>
        </main>   
    )
}
