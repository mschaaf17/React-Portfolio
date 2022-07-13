import React from 'react';
import codePrep from '../../assets/images/code-prep.png'
import parkAdvisor from '../../assets/images/park-advisor.PNG'
import noteTaker from '../../assets/images/note-taker.png'
import weather from '../../assets/images/weather.png'
import quiz from '../../assets/images/quiz.png'
import passwordGenerator from '../../assets/images/password.png'
import github from '../../assets/images/github.jpeg'
import stacked from '../../assets/images/stacked.png'


function Portfolio() {
    return(
        <div className="info-container">
        <h1 id="portfolio" class="text-[48px]">Projects</h1>
        <div class="projects">

            <div className="single-project">
               <h4> <a href="https://code-prep-project.herokuapp.com/" target="_blank">
                    <img class= "single-project-img"  src={codePrep}  alt="Website example of Code Prep."></img>
                Code Prep</a>
                </h4>
                <a 
          href="https://github.com/mschaaf17/code-prep.git"
          target="_blank"
        >
          <img className='github'src={github} alt="githu logo"/>
        </a>
                <p>Node.js, Sequelize, Handlebars</p>
            </div>

            <div class="single-project">
               <h4> <a href="https://noahslusher.github.io/NP-trip-planner/"  target="_blank">
                    <img class= "single-project-img" src={parkAdvisor} alt="Website example of Park Advisor."></img>
                Park Advisor</a>
                </h4>
                <a 
          href="https://github.com/noahslusher/NP-trip-planner.git"
          target="_blank"
        >
          <img className='github'src={github} alt="githu logo"/>
        </a>
                <p>HTML, Javascript, CSS, Tailwind</p>
            </div>

            <div class="single-project">
               <h4> <a href="https://stacked-sports.herokuapp.com/"  target="_blank" >
                    <img class= "single-project-img" src={stacked} alt="Website example of Stacked."></img>
                Stacked</a>
                </h4>
                <a 
          href="https://github.com/mschaaf17/Exercise-Mern.git"
          target="_blank"
        >
          <img className='github'src={github} alt="githu logo"/>
        </a>
                <p>Mern Stack and GraphQl</p>
            </div>

            {/* <div class="single-project">
               <h4> <a href="https://mschaaf17.github.io/Weather-Dashboard/"  target="_blank" >
                    <img class= "w-60 h-40" src={weather} alt="Website example of weather dashboard."></img>
                Weather Dashboard</a>
                </h4>
                <p>HTML, Javascript, CSS</p>
            </div> */}

            <div class="single-project">
               <h4> <a href="https://mschaaf17.github.io/JavaScript-Quiz/"  target="_blank" >
                    <img class= "single-project-img" src={quiz} alt="Website example of javascript quiz."></img>
                Javascript Quiz</a>
                </h4>
                <a 
          href="https://github.com/mschaaf17/JavaScript-Quiz.git"
          target="_blank"
        >
          <img className='github'src={github} alt="githu logo"/>
        </a>
                <p>HTML, Javascript, CSS</p>
            </div>

            {/* <div class="single-project">
               <h4> <a href="https://mschaaf17.github.io/Password-generator/"  target="_blank" >
                    <img class= "w-60 h-40" src={passwordGenerator} alt="Website example of password generator."></img>
                Password Generator</a>
                </h4>
                <p>HTML, Javascript, CSS</p>
            </div> */}



            
        </div>
        <a href="#Nav" class="text-indigo-200">Back to Navigation</a>
        </div>
        

    )
}

export default Portfolio;