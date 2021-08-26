import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import longRides from '../assets/long-rides.png';
import ticket from '../assets/ticket.png';
import weather from '../assets/weather.png';


function Projects() {
    return (
        <div>
            <div className="title">Projects</div>
            <div className="carousel-container">
                <Carousel>
                    <div>
                        <img src={longRides} />
                        <p className="legend">
                            <strong>Long Rides</strong>
                            <br></br>
                            Long Rides is an application that allows UT students to have an affordable and convenient rideshare system.
                            <br></br>
                            <a href="https://github.com/andwilson36/Long_Rides_project_two" target="_blank">Deployment</a>&nbsp;&nbsp;|&nbsp;&nbsp;  
                            <a href="https://github.com/andwilson36/Long_Rides_project_two" target="_blank">GitHub Repo</a>
                        </p>
                    </div>
                    <div>
                        <img src={ticket} />
                        <p className="legend">
                            <strong>Ticket</strong>
                            <br></br>
                            Ticket is a website where you can search anywhere in the world for flights and hotels and see quotes for the areas you want.
                            <br></br>
                            <a href="https://andwilson36.github.io/Ticket_Project_One/" target="_blank">Deployment</a>&nbsp;&nbsp;|&nbsp;&nbsp;  
                            <a href="https://github.com/andwilson36/Ticket_Project_One" target="_blank">GitHub Repo</a>
                        </p>
                    </div>
                    <div>
                        <img src={weather} />
                        <p className="legend">
                            <strong>Weather Dashboard</strong>
                            <br></br>
                            This weather dashboard will take input from users choice of city and display the next five days forecast including, temperature, wind speed, humidity and UV index.
                            <br></br>
                            <a href="https://andwilson36.github.io/Weather_Dashboard/" target="_blank">Deployment</a>&nbsp;&nbsp;|&nbsp;&nbsp;  
                            <a href="https://github.com/andwilson36/Weather_Dashboard" target="_blank">GitHub Repo</a>
                        </p>
                    </div>
                </Carousel>
            </div>
        </div>
    )
}

export default Projects