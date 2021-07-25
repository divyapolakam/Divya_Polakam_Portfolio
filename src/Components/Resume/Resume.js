import React from "react";
import './Resume.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMapMarkerAlt, faMobileAlt } from '@fortawesome/free-solid-svg-icons'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

library.add(
    faEnvelope,
    faLinkedinIn,
    faMobileAlt,
    faMapMarkerAlt,
    faGithub
)



function Resume(props){
    return (
            <div id="body">
                <div class="box">
                    <div class="column-1">
                    <FontAwesomeIcon icon= { faEnvelope }/> divyapolakam24@gmail.com <br/>
                    <FontAwesomeIcon icon= { faMobileAlt }/> +917993842779 <br/>
                    <FontAwesomeIcon icon= { faMapMarkerAlt }/> Telangana, India <br/>
                    <FontAwesomeIcon icon= { faLinkedinIn }/> linkedin.com/in/divya-polakam <br/>
                    <FontAwesomeIcon icon= { faGithub }/> github.com/divyapolakam <br/>
                    <h1> Technical Skills </h1>
                    <input type="button" value="Python"></input>
                    <input type="button" value="Sql"></input>
                    <input type="button" value="C"></input>
                    <input type="button" value="HTML"></input>
                    <input type="button" value="Basics in Linux"></input>
                    <h1> Languages </h1>
                    
                    <h4> English </h4>
Full Professional Proficiency
<h4> Telugu </h4>
Native or Bilingual Proficiency
                    <h1> Interests </h1>
                    <input type="button" value="Music"></input>
                    <input type="button" value="Reading"></input>
                    <input type="button" value="Creative Writing"></input>
                    <input type="button" value="Mindfulness"></input>
                    </div>
                    <div class="column-2">
                        <h1> Divya Polakam </h1>
                        <p>Seeking a position in the field of Computer Science where I can utilize my skills to further work towards personal and professional
development and contribute towards the prosperity of the organization.
</p>
<h1> Education </h1>
<h3> B.Tech - Computer Science and Engineering </h3>
Khammam Institute of Technology and Sciences <br/>
07/2017 - Present  
<h3> Intermediate </h3>
Krishnaveni Junior College <br/>
06/2015 - 05/2017
<h1> Personal Projects </h1>
<h3> A detailed investigation and analysis of using machine learning techniques in Intrusion
Detection </h3>
By this one can secure system from multiple threats by using machine learning techniques
<h3> Build a plasma Donar app with AWS serverless computing </h3>
One can get plasma from registered users as well as they can donate plasma
<h3> Highcharts using Python, Django and values from AWS IAM </h3>
Displaying a bar graph by using Highcharts and HTML, JavaScript as frontend, Python as Backend, Django Web
framework, Dynamodb database
<h1> Certificates </h1>
<h3> Python </h3>
From Telangana Academy for Skills and Knowledge (TASK)
<h3> Data Science through Python </h3>
From Edustartnow
<h1> Soft Skills</h1>
<ul> Teamwork </ul>
<ul> Leadership </ul>
<ul> Good Communication skills </ul>
<ul> Time management </ul>
<h1> Achievements </h1>
Gave presentations in other colleges <br/>
Participated in technical events like Hackathons and Workshops <br/>
Team leader in every of my project <br/>


                    </div>

                </div>
                </div>
    )

}

export default Resume; 