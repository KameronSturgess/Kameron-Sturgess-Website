import Head from 'next/head';
import BackgroundImg from '../modules/Background.js';
import AboutMe from '../modules/AboutMe.js';
import Contact from '../modules/Contact.js';

let images = ["BGimg1.jpg", "BGimg2.jpg", "BGimg3.jpg"]

export default function Home() {
  return (
    <div>
      <Head>
        <title>Kameron Sturgess</title>
      </Head>
      <BackgroundImg imgs={images}>
        <h1 className="name">Kameron Sturgess</h1>
      </BackgroundImg>
      <AboutMe>
      </AboutMe>
      <Contact>
      </Contact>
      <style jsx>{`
        .name{
          position: relative;
          left: 7vw;
          top: 7vh;
          max-width: 93vw;
          max-height: 93vw;
          font-weight: 200;
        }
        `}</style>

      <style jsx global>{`
        html, body, h1{
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
      `}</style>
    </div>
  );
};