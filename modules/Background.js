import React, { useRef, createRef } from 'react';

const BackgroundImg = (props) => {

    var imgRefArray = []
    var linkedRefs = 0;
    var shownSlideIndex = 0;

    for(var i = 0; i < props.imgs.length; i++){
        const imgRef = null;
        imgRefArray.push(imgRef);
    }

    const linkref = element => {
        imgRefArray[linkedRefs] = element;
        linkedRefs++;
    }

    function slideShow (){
        if(imgRefArray[0]){
            changeSlide();
            setTimeout(slideShow,7000);
        }else{
            setTimeout(slideShow,0);
        }

        function changeSlide() {
            for (var i = 0; i < imgRefArray.length; i++) {
                imgRefArray[i].style.opacity = 0;
            }
            updateShownSlideIndex();
            imgRefArray[shownSlideIndex].style.opacity = 1;
        }

        function updateShownSlideIndex() {
            shownSlideIndex += 1;
            if (shownSlideIndex == imgRefArray.length) {
                shownSlideIndex = 0;
            }
        }
    }

    return (
        <div className="container" onLoad={slideShow()}>
            {props.imgs.map((img) => (
                <div className="backgroundImg" 
                ref={linkref}
                key={img}
                style={{ backgroundImage: `url(${img})`}}>
                    {props.children}
                </div>
            ))}
            <style jsx>{`
                .backgroundImg {
                    height: 100%;
                    width: 100%;
                    background-position: center;
                    background-repeat: no-repeat;
                    background-size: cover;
                    position: absolute;
                    transition: opacity 0.7s linear;
                }
                .container {
                    position:relative;
                    height: 100vh;
                    width: 100vw;
                }
                `}</style>
        </div>
    );
};

export default BackgroundImg;