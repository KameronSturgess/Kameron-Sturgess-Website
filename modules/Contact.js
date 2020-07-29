import React from 'react';

const contactMethods = [
    {
        key:'Linkedin',
        src:'LILogo.png',
        link:'https://www.linkedin.com/in/kameron-sturgess-46bb6295/',
    },
    {
        key:'GitHub',
        src:'GitHubMark.png',
        link:'https://github.com/KameronSturgess',
    },
    {
        key:'Facebook',
        src:'FBLogo.png',
        link:'https://www.facebook.com/kameron.sturgess',
    },
];

const Contact = () =>{
    return(
        <div className="container">
            <p className="quote">“In order to write about life first you must live it.”</p>
            <p>- <span className="underline">Ernest Hemingway</span></p>
            {contactMethods.map((contact) => (
                <a 
                key={contact.key}
                href={contact.link} 
                style={{ backgroundImage: `url(${contact.src})`}}></a>
            ))}
            <style jsx>{`
            .container {
                height: 20vh;
                width: 100vw;
                background-color: black;
                border-top: 1px solid rgba(255, 255, 255, .5);
                color: white;
                text-align: center;
            }
            .quote {
                font-family: Bradley Hand;
                font-size: 20px;
            }
            .underline{
                text-decoration: underline;
            }
            a {
                display: inline-block;
                min-height: 50px;
                min-width: 50px;
                bottom: -10px;
                background-size: cover;
                position: relative;
                margin: 10px;
            }
            `}</style>
        </div>
    );
};

export default Contact;