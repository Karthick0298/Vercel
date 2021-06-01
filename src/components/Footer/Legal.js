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
export function Legal(){
    return <ListHeading>
            <Heading>
                Legal
            </Heading>
            <List>
                <ListItem>
                    <Link>
                    Privacy Policy
                    </Link>
                </ListItem>
                <ListItem>
                    <Link>
                    Terms of Service
                    </Link>
                </ListItem>
                <ListItem>
                    <Link>
                    Trademark Policy
                    </Link>
                </ListItem>
                <ListItem>
                    <Link>
                    Inactivity Policy
                    </Link>
                </ListItem>
                <ListItem>
                    <Link>
                    DMCA Policy
                    </Link>
                </ListItem>
                <ListItem>
                    <Link>
                    DPA
                    </Link>
                </ListItem>
                <ListItem>
                    <Link>
                        SLA
                    </Link>
                </ListItem>
                </List>
        </ListHeading>
}