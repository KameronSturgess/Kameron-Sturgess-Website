import React from 'react';

const Projects = () =>{

    return(
        <div>
            <div className="project">  
                <a className ="project-logo" href="https://oad.netlify.com/">
                    <img src="OAD.png"></img>
                </a>
                <p className="project-description">
                    An accessibility app designed to be used for improved 
                    communication primarily between the deaf and Police,
                     Firefighter, EMS. Built as a PWA using React Router.
                </p>
            </div>
            <div className="project">  
                <a className ="project-logo" href="https://ks-calorie-count.herokuapp.com/">
                    <img src="CCLogo.png"></img>
                </a>
                <p className="project-description">
                    A calorie counting app designed to keep track of food consumption. Allows 
                    user to create custom food items.
                </p>
            </div>

            <style jsx>{`
            .project{
                position: relative;
                height: 100px;
            }
            .project-logo{
                opacity: .8;  
            }
            .project-logo:hover{
                opacity: 1;
            }
            .project-logo:hover + p{
                opacity: 0.7;
                top: 100px;
                z-index: 1;
                transition: top .5s, opacity .5s;
            }
            img {
                width: 100px;
                height 100px;
                position: absolute;
                left: calc(50% - 50px);
                bottom: 0px;
            }
            p {
                top: 200px;
                position: relative;
                text-align: center;
                height: 100px;
                width: 100vw;
                background-color: black;
                display: table-cell; 
                vertical-align: middle; 
                opacity: 0;
            }
            `}</style>
        </div>
    );
};

export default Projects;