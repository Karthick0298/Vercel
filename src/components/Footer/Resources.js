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
export function Resources(){
    return <ListHeading>
            <Heading>
                Resources
            </Heading>
            <List>
                <ListItem>
                    <Link>
                        Documentation
                    </Link>
                </ListItem>
                <ListItem>
                    <Link>
                        Experts
                    </Link>
                </ListItem>
                <ListItem>
                    <Link>
                        Customers
                    </Link>
                </ListItem>
                <ListItem>
                    <Link>
                        Guides
                    </Link>
                </ListItem>
                <ListItem>
                    <Link>
                        Support
                    </Link>
                </ListItem>
                <ListItem>
                    <Link>
                        API Reference
                    </Link>
                </ListItem>
                <ListItem>
                    <Link>
                        OSS
                    </Link>
                </ListItem>
                <ListItem>
                    <Link>
                        Command line
                    </Link>
                </ListItem>
                <ListItem>
                    <Link>
                        Integration
                    </Link>
                </ListItem>
            </List>
        </ListHeading>
}