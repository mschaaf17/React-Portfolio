import React from 'react';
import linkedInIcon from '../../assets/images/linkedin-icon.gif';
import facebookIcon from '../../assets/images/facebook-icon.gif'
import github from '../../assets/images/github.jpeg'

function About() {
    return(
        <div class="info-container">
        <h1 id="about" class="text-center pt-5 ">About Me</h1>
        <p class="m-5 px-10 text-white text-[20px] about">Hello, thanks for stopping by this page. My name is Madison Schaaf. I have a Bachelors of Science in Psychology with a Masters of Education in Special Education. I have taught for the last 5 years and am looking to challenge myself in software development. I am currently learning full stack development to strengthen my skills in the tech industry. I have loved teaching for the last few years and am looking to expand my knowledge and challenge myself in other areas as well. I am hopeful to find a role where I can utilize my full stack development skills with a company that I can grow with.</p>
        <div class='follow'>
        {" "}
        <a
          href="https://www.linkedin.com/in/madison-schaaf-b3b892102/"
          target="_blank"
        >
          <img className='icon pr-1'src={linkedInIcon} alt="linkedIn logo"/>
          
        </a>
        <a
          href="https://github.com/mschaaf17"
          target="_blank"
        >
          <img className='facebook animation'src={github} alt="githu logo"/>
        </a>
        <a
          href="https://www.facebook.com/people/Maddy-Schaaf/100072535338867/"
          target="_blank"
        >
          <img className='facebook'src={facebookIcon} alt="facebook logo"/>
        </a>

      
      </div>
      <a href="#Nav" class="text-indigo-200">Back to Navigation</a>
        </div>

    )
}

export default About;