import React from 'react';
import styled from 'styled-components';

const Contact = styled.div`

`;
const ContactText = styled.h2`
  font-size: 3.5rem;
  font-weight: 700;
  margin: auto;
  font-family: sans-serif;
  @media (max-width: 767px) {
    font-size: 2rem;
    margin: auto;
  }
  @media (min-width: 768px and max-width:960) {
    font-size: 3rem;
    margin: auto;
  }
`;
const ContactDesc = styled.h2`
   color:#666;
   font-weight: 400; 
   font-size: 1.5rem;
   font-family: sans-serif;; 
   @media (max-width: 767px) {
    font-size: 1rem;
    line-height: 1.41em;
    letter-spacing: -.01125rem;
  }
  @media (min-width: 768px and max-width:960) {
    font-size: 1.5rem;
    line-height: 1.41em;
    letter-spacing: -.01125rem;
  }
`;
const Space = styled.div`
    padding-top: 138px;
    @media (max-width: 767px) {
        padding: 20px;
      }
      @media (min-width: 768px) {
        padding-top: 138px;
      }
`;
const Space1 = styled.div`
    padding-bottom: 20px;
`;

   
export function ContactSales(props) {
  
    return <Contact>
        <Space></Space>
        <ContactText>
        Contact our sales team
        </ContactText>
        <ContactDesc>
        Tell us how we can help and we’ll get in touch shortly.
        </ContactDesc>
        <Space1></Space1>
    </Contact>
    
}