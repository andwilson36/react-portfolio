import React from 'react'
import self from '../assets/images/self.jpg'

function About() {
    return (
        <div>
            <div className="title">About Me</div>
            <p className="about-me">
                <img className="floated" alt="Picture of myself" src={self} />
                Hey, I'm Andrew Wilson. I have a passion for web development, I’m always up for a challenge, and love to learn new things. I am
                from Nacogdoches, Texas. I enjoy working with computers, playing games with friends, and love cars. During my free time,
                I enjoy reading books about web development in order to gain knowledge of technologies. I also work on projects, and open source applications.
                <br></br><br></br>
                I am a coding bootcamp grad from UT of Austin Full-Stack Coding Bootcamp. During my time at the bootcamp, I was constantly learning and
                being pushed to better myself and improve my code. I got to work with several different people and technologies which helped me learn multiple
                 new skills and gain more experience. I also had the chance to work on several projects while I attended which are featured on the project tab.
                <br></br><br></br>
                I have experience in working with JavaScript, CSS, HTML, MERN stack(MongoDB, Express.js, React.js, Node.js), MySQL, AJAX, jQuery, Handlebars.js and
                several front-end frameworks. I have also used tools such as Insomnia, Heroku, GIT and VSCode. I am a quick learner and can adapt well and implement new
                technologies. Along with being good at working with technology, I can also work well with people of all backgrounds and have great teamwork skills.
            </p>
        </div>
    )
}

export default About
