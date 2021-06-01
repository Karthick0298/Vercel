import React, { useState } from "react";
import styled from "styled-components";
import { MenuToggle } from "./MenuToggle";

const NavLinksContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  padding-top: 4px;
`;

const LinksWrapper = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  height: 594px;
  list-style: none;
  background-color: #fff;
  width: 100%;
  flex-direction: column;
  position: fixed;
  top: 100px;
  left: 0;
  overflow-y: scroll;
`;

const LinkItem = styled.li`
  height: calc(2 * 24px);
  width: 100%;
  color: #666;
  font-weight: 500;
  font-size: 16px;
  display: flex;
  font-family: sans-serif;
  border-bottom: 1px solid #eaeaea;
  align-items: center;
`;

const LinkButton = styled.li`
  align-items: center;
  justify-content: center;
  width: 100%;
  color: #666;
  font-size: .885rem;
  display: flex;
  font-family: sans-serif;
`;

const LinkButton1 = styled.li`
  align-items: center;
  justify-content: center;
  width: 100%;
  color: #fff;
  font-size: .875rem;
  display: flex;
  font-family: sans-serif;
`;

const Link = styled.a`
  text-decoration: none;
  color: inherit;
  font-size: inherit;
  font-family: sans-serif;
`;

const Marginer = styled.div`
  height: 2em;
`;

const ButtonLogin = styled.button`
    border: 1px solid #eaeaea;
    outline: 0;
    font-weight: 500;
    border-radius: 5px;
    background-color: #fff;
    cursor: pointer;
    padding: 6px 8px 6px 8px;
    min-height: auto;
    height: 42px;
    line-height: 0;
    display: flex;
    align-items: center;
    margin-bottom: 19px;
`;
const ButtonSignUp = styled.button`
    border: 1px solid #eaeaea;
    outline: 0;
    font-weight: 500;
    border-radius: 5px;
    background-color: #0070f3;
    cursor: pointer;
    padding: 6px 8px 6px 8px;
    min-height: auto;
    height: 42px;
    line-height: 0;
    display: flex;
    align-items: center;
`;
const ButtonGroup =  styled.div`
    display: flex;
    flex-direction: column;
    padding: 0px 20px 0px 20px;
`
const LinkGroup = styled.div`
    display:flex;
    flex-direction: column;
    padding: 30px 23px 0px 23px;
`;

export function MobileNavLinks(props) {
  const [isOpen, setOpen] = useState(false);

  return (
    <NavLinksContainer>
      <MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
      {isOpen && (
        <LinksWrapper>
        <ButtonGroup>
        <ButtonLogin>
            <LinkButton>
               <Link href="#">Login</Link>
            </LinkButton>
        </ButtonLogin>
        <ButtonSignUp>
            <LinkButton1>
               <Link href="#">SignUp</Link>
            </LinkButton1>
        </ButtonSignUp>
        </ButtonGroup>
        <LinkGroup>
        <LinkItem>
            <Link href="#">Templates</Link>
          </LinkItem>
          <LinkItem>
            <Link href="#">Analytics</Link>
          </LinkItem>
          <LinkItem>
            <Link href="#">Pricing</Link>
          </LinkItem>
          <LinkItem>
            <Link href="#">Contact</Link>
          </LinkItem>
          <LinkItem>
            <Link href="#">Documentation</Link>
          </LinkItem>
          <LinkItem>
            <Link href="#">Experts</Link>
          </LinkItem>
          <LinkItem>
            <Link href="#">Security</Link>
          </LinkItem>
          <LinkItem>
            <Link href="#">Blog</Link>
          </LinkItem>
          <LinkItem>
            <Link href="#">Careers</Link>
          </LinkItem>
          <LinkItem>
            <Link href="#">Frameworks</Link>
          </LinkItem>
          <LinkItem>
            <Link href="#">Resources</Link>
          </LinkItem>
        </LinkGroup>
          <Marginer />
        </LinksWrapper>
      )}
    </NavLinksContainer>
  );
}