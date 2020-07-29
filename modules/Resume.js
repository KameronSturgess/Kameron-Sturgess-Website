import React, {useEffect} from 'react';

const Resume = () =>{

    useEffect(() => {
        const currentTime = new Date().getTime();
        const resumeUpdateTime = new Date().setHours(0, 0, 0, 0);
        var timeTillUpdate = resumeUpdateTime + 86400000 - currentTime;
        setTimeout(updateResume, timeTillUpdate)
    });

    const updateResume = () =>{
        console.log('api call')
        setTimeout(updateResume, 86400000)
    }

    return(
        <div className="about-item"> 
            <p> Resume </p>
            <div className="about-item-content">
                <object data="Resume.pdf" type="application/pdf" width="100%" height="100%"></object>
            </div>
            
            <style jsx>{`
            .about-item {
                position: relative;
                height: 30px;
                opacity: 0.8;
            }
            .about-item:hover {
                opacity: 1;
            }
            .about-item:hover .about-item-content{
                opacity: 1;
                height: 750px;
                top: 0px;
                z-index: 1;
                transition: top .5s, opacity .5s;
            }
            .about-item-content {
                top: 100px;
                position: relative;
                opacity: 0;
                height: 0px;
                z-index: -1;
            }
            p {
                text-align: center;
                font-size: 30px;
            }
            `}</style>
        </div>
    );
};

export default Resume;