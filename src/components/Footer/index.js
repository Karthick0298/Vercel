import React from 'react';
import styled from 'styled-components';
import { Company } from './Company';
import { Frameworks } from './Frameworks';
import { Legal } from './Legal';
import { Resources } from './Resources';
import { Logo } from '../Logo';
import { EndFooter } from './EndFooter';

const Footer = styled.div`
    font-size: .875rem;
    background: #fafafa;
    border-top: 1px solid #eaeaea;
    padding: calc(1.5 * 24px) 24px 24px;
`;
const Nav = styled.div`
    max-width:1000px;
    margin: 0 auto;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    @media (max-width: 950px){
        display:flex;
        flex-direction: column;
    }
`;
const Section = styled.section`
    max-width:1000px;
    margin: 0 auto;
    margin-top: 24px;
`;
const LogoStyle = styled.div`
    @media (max-width: 768px){
        display:flex;
        justify-content:center;
    }
`;
function FooterFun(){
    return <Footer>
        <Nav>
        <Frameworks/>
        <Resources/>
        <Company/>
        <Legal/>
        </Nav>
        <Section>
            <LogoStyle>
            <Logo />
            </LogoStyle>
            <EndFooter/>
        </Section>
    </Footer>
}

export default FooterFun;