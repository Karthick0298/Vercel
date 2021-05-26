import React from "react";
import styled from "styled-components";

const LinkItem = styled.li`
  height: 100%;
  color:#fff;
  font-weight: 500;
  font-size: 0.875rem;
  align-items: center;
  justify-content: center;
  display: flex;
  font-family: var(--font-sans);
`;

const Link = styled.a`
  text-decoration: none;
  color: inherit;
  font-size: inherit;
`;

const SignupButton = styled.button`
    border: 0;
    outline: 0;
    color: #fff;
    font-size: .975rem;
    font-weight: 500;
    border-radius: 5px;
    background-color: #000;
    cursor: pointer;
    padding: 6px 8px 6px 8px;
    min-height: auto;
    height: 32px;
    line-height: 0
`;

export function SignUp(props) {
    return (
          <SignupButton>
          <LinkItem>
            <Link href="#">Sign up</Link>
          </LinkItem>
          </SignupButton>
    );
  }