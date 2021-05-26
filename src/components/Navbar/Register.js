import React from "react";
import {SignUp} from './SignUp';
import styled from "styled-components";

const LinksWrapper = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  height: 100%;
  list-style: none;
  font-family: var(--font-sans);
  align-item: center;
`;

const LinkItem = styled.li`
  height: 100%;
  padding: 0 1.1em;  
  color:#666;
  font-weight: 400;
  font-size: 0.975rem;
  align-items: center;
  justify-content: center;
  display: flex;
`;

const Link = styled.a`
  text-decoration: none;
  color: inherit;
  font-size: inherit;
`;
const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;

export function Register(props) {
  return (
      <LinksWrapper>
        <LinkItem>
          <Link href="#">Contact</Link>
        </LinkItem>
        <LinkItem>
          <Link href="#">Login</Link>
        </LinkItem>
        <ButtonContainer>
            <SignUp />
        </ButtonContainer>
      </LinksWrapper>

  );
}