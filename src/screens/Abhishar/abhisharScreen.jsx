import React from 'react';
import Abhisharcard from '../../components/abhisharCards/abhisharcard';
import CustomheaderComponent from '../../components/CustomHeaderComponent/CustomheaderComponent';
import { Fade } from 'react-reveal';
import AbhisharCard from './abhisharData.json';
import './abhisharScreen.css';
import { useState } from 'react';

function AbhisharScreen() {
  const [cardList, setCardList] = useState(AbhisharCard);

  return (
    <div>
      <CustomheaderComponent
        img='https://res.cloudinary.com/dzerj4bzd/image/upload/v1659433799/AASF%20Website/book_mjmmsx.png'
        text='Abhishar'
        SearchBarCondition='true'
        url1='https://abhisharv11.aasf.in/'
        url2='https://abhishar-v10.netlify.app/#magazine'
        link1='v11.0'
        link2='v10.0'
        data={AbhisharCard}
        setList={setCardList}
      />
      <div className='abhisharpage-section'>
        <Fade left>
          <div className='abhisharpage-content-box'>
            <div className='abhisharpage-headings heading-font'>
              ABOUT
              <br />
              ABHISHAR
            </div>
            <div className='abhisharpage-text secondary-font'>
              “Abhishar”, the annual magazine of AASF, means companionship and
              has evolved from the names of our late AASF members- Abhinav
              Saxena and Tushar Sharma -two indispensable work engines of AASF.
            </div>
          </div>
        </Fade>
        <Fade right>
          <div className='abhisharpage-image'>
            <img
              alt='abhishar'
              src='https://res.cloudinary.com/dzerj4bzd/image/upload/v1659515423/AASF%20Website/Late_olnlyi.png'
            ></img>
          </div>
        </Fade>
      </div>
      <div className='abhisharpage-card-container'>
        {console.log(cardList)}
        {cardList.map((card) => (
          <Abhisharcard
            key={card.version}
            image={card.image}
            heading={card.heading}
            version={card.version}
            text={card.text}
            link={card.link}
          />
        ))}
      </div>
    </div>
  );
}

export default AbhisharScreen;
