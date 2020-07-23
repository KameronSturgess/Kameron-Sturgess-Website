import React, { useEffect } from 'react';

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

    useEffect(() => {
        for (var i = 0; i < imgRefArray.length; i++) {
            imgRefArray[i].style.opacity = 0;
        }
        SlideShow()
    });

    const SlideShow = () => {
        nextSlide()
        setTimeout(SlideShow,7000);
    }

    const prevSlide = () => {
        if(imgRefArray[0]){
            imgRefArray[shownSlideIndex].style.opacity = 0;
            updateShownSlideIndex(-1);
            imgRefArray[shownSlideIndex].style.opacity = 1;
        }
    }

    function nextSlide (){
        if(imgRefArray[0]){
            imgRefArray[shownSlideIndex].style.opacity = 0;
            updateShownSlideIndex(1);
            imgRefArray[shownSlideIndex].style.opacity = 1;
        }
    }

    function updateShownSlideIndex(n) {
        shownSlideIndex += n;
        if (shownSlideIndex == imgRefArray.length) {
            shownSlideIndex = 0;
        }
        if (shownSlideIndex == -1) {
            shownSlideIndex = imgRefArray.length - 1;
        }
    }  

    return (
        <div className="container">
            {props.imgs.map((img) => (
                <div className="backgroundImg" 
                ref={linkref}
                key={img}
                style={{ backgroundImage: `url(${img})`}}>
                    {props.children}
                </div>
                
            ))}
            <a className="prev" onClick={prevSlide}>&#10094;</a>
            <a className="next" onClick={nextSlide}>&#10095;</a>
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
                .prev, .next {
                    cursor: pointer;
                    position: absolute;
                    top: 50%;
                    width: auto;
                    margin-top: -22px;
                    padding: 16px;
                    color: white;
                    font-weight: bold;
                    font-size: 20px;
                    border-radius: 0 3px 3px 0;
                    user-select: none;
                  }
                .container {
                    position:relative;
                    height: 100vh;
                    width: 100vw;
                }
                .next {
                    right: 0;
                    border-radius: 3px 0 0 3px;
                }
                .prev:hover, .next:hover {
                    background-color: rgba(0,0,0,0.8);
                    transition: 0.6s ease;
                  }
                `}</style>
        </div>
    );
};

export default BackgroundImg;