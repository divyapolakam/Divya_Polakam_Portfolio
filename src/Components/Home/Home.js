import React, {component} from "react";
import { Link } from 'react-router-dom';
import divya from './divya.jpg';
import './Home.css';
import { getByDisplayValue } from "@testing-library/dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

function Home(props){

    function clickgithubHandler() {
        window.location.href = "https://github.com/divyapolakam";
    }

    function clicklinkedinHandler() {
        window.location.href = "https://www.linkedin.com/in/divya-polakam-9a0246189/";
    }

    const ButtonMailto =({ mailto, label}) => {
        return (
            <Link 
            to='#'
            onClick={(e) => {
                window.location = mailto;
                e.preventDefault();
            }}
            >
                {label}
            </Link>
        )
    }
    return (
        <div>
            <body>
                <div class="home-container">
                    <div className="main-container">
                        <br/>
                        <img src={divya} class="divya-img"/>
                        <h1 class="hello-heading"> Hello,</h1>
                        <h1 class="home-heading"> I'm Divya </h1>
                        <br/>
                        <p class="home-paragraph"> A Computer Science Engineering student <br/> looking for a good opportunity which enhance <br/>my skills  and improve knowledge everyday! <br/><br/><br/></p>
                        </div>
                </div>
                <div className= "footer">
                        <p class="footer-paragraph"> >> Designed and Developed by Divya Polakam </p>
                        
                        <FontAwesomeIcon icon= { faEnvelope } mailto="mailto:divyapolakam24@gmail.com" class="icon envelope-icon"/> 
                        <FontAwesomeIcon icon= { faLinkedinIn } onClick ={clicklinkedinHandler} class="icon linkedin-icon"/>
                        <FontAwesomeIcon icon= { faGithub } onClick ={clickgithubHandler} class="icon github-icon"/>
                        <p class="footer-contact"> Contact: </p>
                </div>
                    
            </body>
        </div>
    )
}

export default Home;