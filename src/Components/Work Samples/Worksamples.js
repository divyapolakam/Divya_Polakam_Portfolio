import React from "react";
import './worksample.css';
import worksample1 from './work_sample1.png';
import worksample2 from './work_sample2.jpg';
import worksample3 from './work_sample3.jpg';

function Worksamples(props){
    return (
        <div class="container-1">
            <h1> Work Samples</h1>
            <img src = { worksample3 } />
            <img src = { worksample1 } /> 
            <img src = { worksample2 } />
            

        </div>
    )
}

export default Worksamples;