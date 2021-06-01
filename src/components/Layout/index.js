import React from 'react';
import styled from 'styled-components';
import {ContactSales} from './ContactSales';
import {Form} from './Form';
import {Develop} from './Develop';
const LayoutSection = styled.div`
    background: #fafafa;
`;
const ContactContainer = styled.div`
    display: flex;
    max-width: 100%;
    margin-left: auto;
    margin-right: auto;
    width: 1048px;
    padding-left: 24px;
    padding-right:24px;
    box-sizing: border-box;
`;
const FormContainer = styled.div`
    max-width: 100%;
    margin-left: auto;
    margin-right: auto;
    width: 1048px;
    padding-left: 24px;
    padding-right:24px;
    box-sizing: border-box;
`;
const GridContainer = styled.div`
    max-width: 100%;
    margin-left: auto;
    margin-right: auto;
    width: 1048px;
    padding-left: 24px;
    padding-right:24px;
    box-sizing: border-box;
`;
const DevelopColor = styled.div `
    color: rgb(255, 255, 255);
    background: #0070f3;
    padding: calc(1.5 * 48px) 0;
    border-top: 1px solid #eaeaea;
    @media (max-width: 768px){
        padding:  calc(1.5 * 24px) 0;
    }
`;

export function Layout(props) {
  
    return <LayoutSection>
        <ContactContainer>
            <ContactSales/>
        </ContactContainer>
        <FormContainer>
            <Form />
        </FormContainer>
        <GridContainer>
        </GridContainer>
        <DevelopColor>
            <Develop/>
        </DevelopColor>
    </LayoutSection>
}