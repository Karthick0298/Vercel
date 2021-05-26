import React from "react";
import styled from "styled-components";

const NavLinksContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const LinksWrapper = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  height: 100%;
  list-style: none;
  font-family: var(--font-sans);
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

export function NavLinks(props) {
  return (
    <NavLinksContainer>
      <LinksWrapper>
        <LinkItem>
          <Link href="#">Templates</Link>
        </LinkItem>
        <LinkItem>
          <Link href="#">Analytics</Link>
        </LinkItem>
        <LinkItem>
          <Link href="#">Pricing</Link>
        </LinkItem>
      </LinksWrapper>
    </NavLinksContainer>
  );
}