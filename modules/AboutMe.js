import React from 'react';

const AboutMe = () =>{

    return(
        <div className="container">
            <p className="aboutMe"> About Me</p> 
            <div className="education"> 
            <img src="UofTLogo.png"></img><p className="img-text"> University of Toronto 
            <br></br> Major in Mathematics,
            Minors in Statistics and Computer Science</p></div>
            <style jsx>{`
            .container {
                height: 100vh;
                width: 100vw;
                background-color: black;
                position:relative;
            }
            .aboutMe{
                text-align: center;
            }
            .education{
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
            div, p, img {
                margin: 0;
                padding: 0;
                color: white;
                font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
            }
            `}</style>
        </div>
    );
};

export default AboutMe;