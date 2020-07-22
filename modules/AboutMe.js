import React from 'react';
import Projects from '../modules/Projects.js'

const AboutMe = () =>{

    return(
        <div className="container">
            <div className="about-item"> 
                <img src="UofTLogo.png"></img>
                <p> University of Toronto 
                <br></br> Major in Mathematics,
                Minors in Statistics and Computer Science</p>
            </div>
            <Projects></Projects>

            <style jsx>{`
            .container {
                height: 100vh;
                width: 100vw;
                background-color: black;
                position:relative;
            }
            .about-item{
                position: relative;
                height: 100px;
            }
            img {
                width: 100px;
                height 100px;
                position: absolute;
                opacity: 0.8;
                bottom: 0px;
                left: calc(50% - 50px);
            }
            img:hover {
                opacity: 1;
            }
            img:hover + p{
                opacity: 0.8;
                top: 100px;
                z-index: 1;
                transition: top .5s, opacity .5s;
            }
            p {
                top: 200px;
                position: relative;
                text-align: center;
                width: 100vw;
                height: 100px;
                display: table-cell; 
                vertical-align: middle; 
                background-color: black;
                opacity: 0;
            }
            `}</style>

            <style jsx global>{`
                p{
                    color: white;
                    font-family: Arial;
                }
            `}</style>
        </div>
    );
};

export default AboutMe;