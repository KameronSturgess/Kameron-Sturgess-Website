import React from 'react';

const Projects = () =>{

    return(
        <div>
            <div className="project">  
                <a href="https://oad.netlify.com/">
                    <img className="project-logo" src="OAD.png"></img>
                </a>
            </div>

            <style jsx>{`
            .project{
                position: relative;
                height: 100px;
            }
            .project-logo{
                opacity: .8;
                position: absolute;
                left: calc(50% - 50px);
            }
            .project-logo:hover{
                opacity: 1;
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

export default Projects;