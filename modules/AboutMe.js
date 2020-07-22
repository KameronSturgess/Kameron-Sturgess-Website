import React from 'react';
import Projects from '../modules/Projects.js'

const AboutMe = () =>{

    return(
        <div className="container">
            <div className="about-item"> 
            <img src="UofTLogo.png"></img><p className="img-text"> University of Toronto 
            <br></br> Major in Mathematics,
            Minors in Statistics and Computer Science</p></div>
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
            .img-text{
                position: absolute;
                width: calc(100% - 100px);
                bottom: 0px;
                left: 100px;
            }
            img {
                width: 100px;
                height 100px;
                position: absolute;
                bottom: 0px;
            }
            div, p, img{
                margin: 0;
                padding: 0;
                color: white;
                font-family: Arial;
            }
            `}</style>
        </div>
    );
};

export default AboutMe;