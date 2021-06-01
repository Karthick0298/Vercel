import React from 'react';
import styled from 'styled-components';

const ListHeading = styled.div`
    font-weight: 400;
    font-size: .875rem;
    margin: 12px 0;
    @media (max-width:950px){
        border-bottom: 1px solid #eaeaea;
        margin: 0;
    }
`;

const Heading = styled.h3`
    font-weight: 400;
    font-size: .875rem;
    margin: 12px 0;
    cursor: pointer;
    @media (max-width:950px){
        &:after {
            content: "+";
            float: right;
          }
    }
`;
const List = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    @media (max-width: 950px){
        display:none;
    }
`;
const ListItem = styled.li`
    color:#666;
    padding:8px 0;
`;
const  Link = styled.a`
    text-decoration: none;
    color: inherit;
    cursor: pointer;
    outline: none;
`;
export function Company(){
    return <ListHeading>
            <Heading>
                Company
            </Heading>
            <List>
                <ListItem>
                    <Link>
                        Home
                    </Link>
                </ListItem>
                <ListItem>
                    <Link>
                        Blog
                    </Link>
                </ListItem>
                <ListItem>
                    <Link>
                        Changelog
                    </Link>
                </ListItem>
                <ListItem>
                    <Link>
                        About
                    </Link>
                </ListItem>
                <ListItem>
                    <Link>
                        Carrers
                    </Link>
                </ListItem>
                <ListItem>
                    <Link>
                        Pricing
                    </Link>
                </ListItem>
                <ListItem>
                    <Link>
                        Security
                    </Link>
                </ListItem>
                <ListItem>
                    <Link>
                        Partners
                    </Link>
                </ListItem>
                <ListItem>
                    <Link>
                        Nuxt.js Conf
                    </Link>
                </ListItem>
                <ListItem>
                    <Link>
                        Contact Us
                    </Link>
                </ListItem>

            </List>
        </ListHeading>
}