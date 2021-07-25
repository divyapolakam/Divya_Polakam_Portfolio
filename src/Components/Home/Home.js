import React, {component} from "react";
import { Link } from 'react-router-dom';
import logo1 from './logo1.jpg';
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
                <div>
                    <div className="navigation">
                        <img src="logo1.jpg"/>
                        <Link to="/resume" className="item"> Resume </Link>
                        <Link to="/projects" className="item"> Projects </Link>
                        <Link to="/work samples" className="item"> Work Samples </Link>
                        <Link to="/about" className="item"> About </Link>
                    </div>
                    <div className="container">
                        <br/>
                        <img src={divya}/>
                        <h1> I'm Divya </h1>
                        
                        <p> A Computer Science Engineering student <br/> looking for a good opportunity which enhance <br/>my skills  and improve knowledge everyday! <br/></p>
                        
                    </div>
                    
            </div>
            <div className= "footer">
                        <p> Design and development by Divya Polakam </p>
                        <FontAwesomeIcon icon= { faEnvelope } mailto="mailto:divyapolakam24@gmail.com" /> 
                        <FontAwesomeIcon icon= { faLinkedinIn } onClick ={clicklinkedinHandler}/>
                        <FontAwesomeIcon icon= { faGithub } onClick ={clickgithubHandler} />
                        </div>
            </body>
        </div>
    )
}

export default Home;