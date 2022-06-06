import React from 'react';
import codePrep from '../../assets/images/code-prep.png'
import parkAdvisor from '../../assets/images/park-advisor.PNG'

function Portfolio() {
    return(
        <div class="info-container">
        <h1 id="portfolio" class="text-center">Projects</h1>
        <div class="projects">

            <div class="single-project">
               <h4> <a href="https://code-prep-project.herokuapp.com/">
                    <img class= "w-60 h-50" src={codePrep} alt="Website example of Code Prep."></img>
                Code Prep</a>
                </h4>
                <p>Node.js, Sequelize, Handlebars</p>
            </div>

            <div class="single-project">
               <h4> <a href="https://noahslusher.github.io/NP-trip-planner/">
                    <img class= "w-60 h-40" src={parkAdvisor} alt="Website example of Park Advisor."></img>
                Park Advisor</a>
                </h4>
                <p>HTML, Javascript, CSS, Tailwind</p>
            </div>

            
        </div>
        </div>
        

    )
}

export default Portfolio;