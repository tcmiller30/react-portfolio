import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";


export default function About() {
    return (
        <main className="container">
            <div className="row align-items-center">
                <div className="col-md-4">
                    <h2 className="section-title"> Hi, I'm Travis Miller.</h2>
                </div>
                <div className="col-md-4">
                    <p>I am a full-stack web developer based out of Southern California. Coming from a background in food service, I have a passion for creating things that people can enjoy. 
                        As a burgeoning developer, I'm working hard to imporve my skills so that I can strive to create the next-best-thing.
                    </p>
                </div>
                <div className="col-md-4">
                    <FontAwesomeIcon icon={faUser} size="10x" />
                </div>
            </div>
        </main>
    )
}
