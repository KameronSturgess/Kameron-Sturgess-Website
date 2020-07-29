import React from 'react';

const Spotify = () =>{

    return(
        <div className="about-item">
            <img src="SpotifyLogo.png"></img>
            <div className="about-item-content" id="playlist-container">
                <iframe src="https://open.spotify.com/embed/playlist/2SHBiY7Ee05mWh0xDJ7nRM" 
                width="300" height="80" frameborder="0" allowtransparency="true" 
                allow="encrypted-media"></iframe>
                <iframe src="https://open.spotify.com/embed/playlist/5tGFL2Dx1wPQORTUKPfR57" 
                width="300" height="80" frameborder="0" allowtransparency="true" 
                allow="encrypted-media"></iframe>
                <iframe src="https://open.spotify.com/embed/playlist/4VY1uzSV3CnSBI4ytdsR8U" 
                width="300" height="80" frameborder="0" allowtransparency="true" 
                allow="encrypted-media"></iframe>
            </div>

            <style jsx>{`
            .about-item {
                position: relative;
                height: 100px;
            }
            img {
                width: 100px;
                height: 100px;
                position: absolute;
                opacity: 0.8;
                bottom: 0px;
                left: calc(50% - 50px);
            }
            img:hover {
                opacity: 1;
            }
            img:hover + #playlist-container{
                opacity: 0.8;
                top: 100px;
                height: 100px;
                width: 100vw;
                z-index: 1;
                transition: top .5s, opacity .5s;
            }
            #playlist-container:hover {
                opacity: 0.8;
                top: 100px;
                height: 100px;
                width: 100vw;
                z-index: 1;
            }
            .about-item-content {
                top: 200px;
                position: relative;
                background-color: black;
                opacity: 0;
            }
            #playlist-container {
                display: flex;
                justify-content: space-around;
                align-items: center;
                height: 0px;
                width: 0px;
                flex-wrap: wrap;
                z-index: -1;
            }
            `}</style>
        </div>
    );
};

export default Spotify;