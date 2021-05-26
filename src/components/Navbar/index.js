import React from 'react';
import { useMediaQuery } from "react-responsive";
import styled from 'styled-components';
import { Logo } from '../Logo';
import { NavLinks } from "./NavLinks";
import { Register } from './Register';
import { MobileNavLinks } from "./MobileNavLinks";
import { DeviceSize } from "../Responsive/index";


const NavbarContainer = styled.div`
   width: 100%;
   min-height: 64px;
   box-shadow: inset 0 -1px 0 0 rgba(0,0,0,0.1); 
   display: flex;
   align-item: center;
   position: fixed;
`;
const HeaderHeader = styled.div`
   display: flex;
   width: 1048px;
   margin: auto;
   padding-left: 24px;
   padding-right: 24px;
`;
const HeaderOne = styled.div`
   display: flex;
   flex:1.5
`;
const HeaderTwo = styled.div `
   display: flex;
   flex: 2;
   @media (max-width: 768px) {
      flex:0;
    }
`;
const HeaderThree = styled.div`
   display: flex;
   flex:1;
   @media (max-width: 768px) {
      flex:0;
    }
`;
   
export function Navbar(props) {
   const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile });
    return <NavbarContainer>
       <HeaderHeader>
          <HeaderOne>
             <Logo />
          </HeaderOne>
          <HeaderTwo>
          {!isMobile && <NavLinks />}
          </HeaderTwo>
          <HeaderThree>
          {!isMobile && <Register />}
          {isMobile && <MobileNavLinks />}
          </HeaderThree>
       </HeaderHeader>
        </NavbarContainer>
}
