import React from "react";
import './Project.css';
import'bootstrap/dist/css/bootstrap.min.css';
import card1 from './card-1.jpg';
import card2 from './card-2.png';
import card3 from './card-3.png';

function Projects(props) {
    function clickcard1buttonHandler() {
        window.location.href = "https://github.com/divyapolakam/A-Detailed-investigation-and-analysis-of-using-machine-learning-techniques-in-Intrusion-Detection.git";
    }
    function clickcard2buttonHandler() {
        window.location.href = "https://github.com/divyapolakam/plasmadonarapp2.git";
    }
    function clickcard3buttonHandler() {
        window.location.href = "https://github.com/divyapolakam/Highcharts-using-Python-Django-and-Values-from-AWS-IAM.git";
    }
    return (
        <div class="project-container">
            <div class="project-first-row d-flex flex-row justify-content-center">
                <div class="project-card d-flex flex-column">
                    <h5 class="project-card-heading">A Detailed investigation and analysis of using machine learning techniques in Intrusion Detection</h5>
                    <img src={card1} class="project-card-image" class="project-card-image" alt = "Project Image"/>
                    <div class="project-card-bottom-section">
                    <p class="project-paragraph">Intrusion detection is one of the important security problems in today’s 
cyber world. A significant number of techniques have been developed which 
are based on machine learning approaches. So, for identifying the intrusion 
we have designed the machine learning algorithms.</p></div>
                    <div class="project-card-buttonsection">
                    <button class="project-card-button btn btn-primary" onClick ={clickcard1buttonHandler}> Click Here </button>
                    </div>
                    
                </div>
                <div class="project-card d-flex flex-column">
                    <h5 class="project-card-heading">Plasma Donar App</h5>
                    <img src={card2} class="project-card-image" class="project-card-image" alt = "Project Image"/>
                    <div class="project-card-bottom-section">
                    <p class="project-paragraph">Intrusion detection is one of the important security problems in today’s 
cyber world. A significant number of techniques have been developed which 
are based on machine learning approaches. So, for identifying the intrusion 
we have designed the machine learning algorithms.</p></div>
                    <div class="project-card-buttonsection">
                    <button class="project-card-button btn btn-primary" onClick ={clickcard2buttonHandler}> Click Here </button>
                    </div>
            </div>
            <div class="project-card d-flex flex-column">
                    <h5 class="project-card-heading">A Detailed investigation and analysis of using machine learning techniques in Intrusion Detection</h5>
                    <img src={card3} class="project-card-image" class="project-card-image" alt = "Project Image"/>
                    <div class="project-card-bottom-section">
                    <p class="project-paragraph">Intrusion detection is one of the important security problems in today’s 
cyber world. A significant number of techniques have been developed which 
are based on machine learning approaches. So, for identifying the intrusion 
we have designed the machine learning algorithms.</p></div>
                    <div class="project-card-buttonsection">
                    <button class="project-card-button btn btn-primary" onClick ={clickcard3buttonHandler}> Click Here </button>
                    </div>
        </div>
        </div>
        <div class="project-second-row d-flex flex-row justify-content-center">
                <div class="project-card d-flex flex-column">
                    <h5 class="project-card-heading">A Detailed investigation and analysis of using machine learning techniques in Intrusion Detection</h5>
                    <img src={card1} class="project-card-image" class="project-card-image" alt = "Project Image"/>
                    <div class="project-card-bottom-section">
                    <p class="project-paragraph">Intrusion detection is one of the important security problems in today’s 
cyber world. A significant number of techniques have been developed which 
are based on machine learning approaches. So, for identifying the intrusion 
we have designed the machine learning algorithms.</p></div>
                    <div class="project-card-buttonsection">
                    <button class="project-card-button btn btn-primary" onClick ={clickcard1buttonHandler}> Click Here </button>
                    </div>
                    </div>
                    
                </div>
        </div>
    )
}

export default Projects;