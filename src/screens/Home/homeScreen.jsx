import React from 'react';
import { Link } from 'react-router-dom';
import './homeScreen.css';
import CustomButton from '../../components/custom-button/CutsomButton';
import ToTop from '../../components/ToTop';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-parallax-tilt';

function HomeScreen() {
  return (
    <div>
      <ToTop />
      <div className='homepage-section'>
        <Fade left>
          <div className='homepage-content-box'>
            <div className='homepage-headings homepage-college-name heading-font'>
              ABV - IIITM Gwalior
            </div>
            <div className='homepage-headings aasf-heading heading-font'>
              Abhigyan Abhikaushalam Students&apos; Forum
            </div>
            <div className='homepage-text secondary-font'>
              AASF works to conjugate knowledge and skills into a single bunch.
              The forum also aims to inculcate in the students the spirit of
              excellence in every field along with promoting innovative ideas.
            </div>
          </div>
        </Fade>
        <Fade right>
          <Tilt trackOnWindow='true' tiltMaxAngleX={10} tiltMaxAngleY={10}>
            <div className='homepage-image'>
              <img
                alt='teaching'
                src='https://i.ibb.co/vDXzqpd/homepage-title.png'
              ></img>
            </div>
          </Tilt>
        </Fade>
      </div>
      <div className='homepage-section homepage-section-reverse'>
        <Fade left>
          <div className='homepage-content-box'>
            <div className='homepage-headings homepage-align-right heading-font'>
              Our Vision
            </div>
            <div className='homepage-text homepage-align-right secondary-font'>
              Abhigyan Abhikaushalam Students’ Forum aims to construct a
              shoreline that would help students construct a future path for
              themselves. It works to conjugate knowledge and skills into a
              single bunch. Knowledge is incomplete in itself, unless it is
              complemented by skills. This forum aims in providing the right
              kind of knowledge to the students and development of skills.
            </div>
          </div>
        </Fade>
        <Fade right>
          <Tilt trackOnWindow='true' tiltMaxAngleX={10} tiltMaxAngleY={10}>
            <div className='homepage-image'>
              <img
                alt='rocket'
                src='https://res.cloudinary.com/dzerj4bzd/image/upload/v1654251556/AASF%20Website/homepage-rocket_wfv6jp.png'
              ></img>
            </div>
          </Tilt>
        </Fade>
      </div>
      <div className='homepage-section'>
        <Fade left>
          <div className='homepage-content-box'>
            <div className='homepage-headings heading-font'>Abhishar</div>
            <div className='homepage-text secondary-font'>
              <b>“Abhishar”</b>, the annual magazine of AASF, contains articles
              by students, alumni and the institute’s faculty and serves as a
              medium to exchange ones thoughts and experiences. The highlights
              of the happenings at the institute and insight on
              techno-managerial topics are the spirit of the magazine.
            </div>
            <Link className='homepage-text' exact to='/abhishar'>
              <CustomButton customButton__text='ABHISHAR' />
            </Link>
          </div>
        </Fade>
        <Fade right>
          <Tilt trackOnWindow='true' tiltMaxAngleX={10} tiltMaxAngleY={10}>
            <div className='homepage-image'>
              <img
                alt='abhishar'
                src='https://res.cloudinary.com/dzerj4bzd/image/upload/v1654114321/AASF%20Website/homepage-abhishar_ugkdqk.png'
              ></img>
            </div>
          </Tilt>
        </Fade>
      </div>
      <div className='homepage-section homepage-section-reverse'>
        <Fade left>
          <div className='homepage-content-box'>
            <div className='homepage-headings homepage-align-right heading-font'>
              Download
              <br />
              Our Android App
            </div>
            <div className='homepage-text homepage-align-right secondary-font'>
              Download our Android app to access your profile, leaderboard and
              many more exciting features. The app also provides you with our
              event calendar and notifies you of all the updates!
            </div>
            <a
              className='homepage-text homepage-align-right'
              href='https://drive.google.com/drive/folders/1Rc0wMjLU-VsjP_QLLOLCMNa-4mQtqJtT?usp=sharing'
              target='_blank'
              rel='noreferrer'
            >
              <CustomButton customButton__text='DOWNLOAD' />
            </a>
          </div>
        </Fade>
        <Fade right>
          <Tilt trackOnWindow='true' tiltMaxAngleX={10} tiltMaxAngleY={10}>
            <div className='homepage-image'>
              <img
                alt='mobile-app'
                src='https://res.cloudinary.com/dzerj4bzd/image/upload/v1654274887/AASF%20Website/homepage-new-mobile_i2aded.png'
              ></img>
            </div>
          </Tilt>
        </Fade>
      </div>
    </div>
  );
}

export default HomeScreen;
