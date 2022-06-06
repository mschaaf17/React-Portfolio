import React from 'react';
import codePrep from '../../assets/images/code-prep.png'
import parkAdvisor from '../../assets/images/park-advisor.PNG'
import noteTaker from '../../assets/images/note-taker.png'
import weather from '../../assets/images/weather.png'
import quiz from '../../assets/images/quiz.png'
import passwordGenerator from '../../assets/images/password.png'

function Portfolio() {
    return(
        <div class="info-container">
        <h1 id="portfolio" class="text-center">Projects</h1>
        <div class="projects">

            <div class="single-project">
               <h4> <a href="https://code-prep-project.herokuapp.com/">
                    <img class= "w-60 h-50" src={codePrep} target="_blank" alt="Website example of Code Prep."></img>
                Code Prep</a>
                </h4>
                <p>Node.js, Sequelize, Handlebars</p>
            </div>

            <div class="single-project">
               <h4> <a href="https://noahslusher.github.io/NP-trip-planner/">
                    <img class= "w-60 h-40" src={parkAdvisor} target="_blank" alt="Website example of Park Advisor."></img>
                Park Advisor</a>
                </h4>
                <p>HTML, Javascript, CSS, Tailwind</p>
            </div>

            <div class="single-project">
               <h4> <a href="https://note-taker-ms.herokuapp.com/">
                    <img class= "w-60 h-40" src={noteTaker} target="_blank" alt="Website example of Note Taker."></img>
                Note Taker</a>
                </h4>
                <p>Node.js, Javascript, CSS</p>
            </div>

            <div class="single-project">
               <h4> <a href="https://mschaaf17.github.io/Weather-Dashboard/">
                    <img class= "w-60 h-40" src={weather} target="_blank" alt="Website example of weather dashboard."></img>
                Note Taker</a>
                </h4>
                <p>HTML, Javascript, CSS</p>
            </div>

            <div class="single-project">
               <h4> <a href="https://mschaaf17.github.io/JavaScript-Quiz/">
                    <img class= "w-60 h-40" src={quiz}  target="_blank" alt="Website example of javascript quiz."></img>
                Note Taker</a>
                </h4>
                <p>HTML, Javascript, CSS</p>
            </div>

            <div class="single-project">
               <h4> <a href="https://mschaaf17.github.io/Password-generator/">
                    <img class= "w-60 h-40" src={passwordGenerator} target="_blank" alt="Website example of password generator."></img>
                Note Taker</a>
                </h4>
                <p>HTML, Javascript, CSS</p>
            </div>



            
        </div>
        </div>
        

    )
}

export default Portfolio;