import React from 'react';
import styled from 'styled-components';
import VercelLogoImg from '../../assets/images/vercel_logo.PNG';

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`
const LogoImg = styled.div`
  
  img {
    width: 79%;
  }
`;

export function Logo(props) {
  return (
    <LogoWrapper>
      <LogoImg>
        <img src={VercelLogoImg} alt="vercel logo" />
      </LogoImg>
    </LogoWrapper>
  );
  }
