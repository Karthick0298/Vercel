import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';
import HashicorpImg from '../../assets/images/hashicorp.svg';
import FacebookImg from '../../assets/images/facebook.svg';
import DonaldsImg from '../../assets/images/mcdonalds.svg';
import WashingtonImg from '../../assets/images/washingtonpost.svg';
import AuthImg from '../../assets/images/auth0.svg';
import TwilioImg from '../../assets/images/twilio.svg';
import UberImg from '../../assets/images/uber.svg';
import TripImg from '../../assets/images/tripadvisor-horizontal.svg';


const Infinite = styled.div`
display:none;
@media (max-width:768px){
  padding-top: 15px;
  padding-bottom: 40px;
  display:block;
}
`;
const StyledSlider = styled(Slider)`
.slick-list {
   padding: 200px;
}
`;

class Another extends React.Component {
  render() {
    const settings = {
      className: "slider variable-width",
      infinite: true,
      centerMode: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      variableWidth: true,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear"
    };
    return (
      <Infinite>
        <StyledSlider {...settings}>
          <div style={{ width: 200 }}>
            <img src={HashicorpImg} style={{width: '150px'}}/>
          </div>
          <div style={{ width: 120 }}>
            <img src={DonaldsImg} style={{width: '50px'}}/>
          </div>
          <div style={{ width: 230 }}>
          <img src={FacebookImg} style={{width: '180px'}}/>
          </div>
          <div style={{ width: 220 }}>
           <img src={WashingtonImg} style={{width: '180px'}}/>
          </div>
          <div style={{ width: 150 }}>
          <img src={AuthImg} style={{width: '110px'}}/>
          </div>
          <div style={{ width: 150 }}>
          <img src={TwilioImg} style={{width: '110px'}}/>
          </div>
          <div style={{ width: 130 }}>
          <img src={UberImg} style={{width: '80px'}}/>
          </div>
          <div style={{ width: 250}}>
          <img src={TripImg}/>
          </div>
        </StyledSlider>
      </Infinite>
    );
  }
}
export default Another;
