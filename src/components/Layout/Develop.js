import React, { useState } from "react";
import styled from "styled-components";

const DevelopWrapper = styled.div`
    max-width: 100%;
    margin-left: auto;
    margin-right: auto;
    width: 1048px;
    padding-left: 24px;
    padding-right: 24px;
    @media (max-width:768px){
        padding:0;
    }
`;
const DevelopContainer = styled.div`
    display: flex;
    flex-direction: row;
    position: relative;
    min-width: 1px;
    max-width: 100%;
    flex: 1;
    justify-content: flex-start;
    align-items: stretch;
    @media (max-width:768px){
        display:flex;
        flex-direction: column;
        padding-left: 24px;
        padding-right: 24px;
    }
`;
const Content = styled.p`
    font-size: 3.5rem;
    line-height: 1.1em;
    font-weight: 800;
    letter-spacing: -.049375rem;
    display: flex;
    margin: auto;
    margin-left: 0;
    @media (max-width: 768px){
        text-align: center;
        margin: auto;
    }
`;
const Content1 = styled.p`
    color: rgba(255, 255, 255, 0.7);
    font-size: 1.25rem;
    line-height: 1.5em;
    @media (max-width: 768px){
        font-size: 1.05rem;
        text-align: center;
    }
`;
const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    min-width: 1px;
    max-width: 100%;
    flex: 0 0 auto;
    justify-content: flex-start;
    align-items:stretch;
`;
const Container = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    min-width: 1px;
    max-width: 100%;
    flex: 1;
    justify-content: flex-start;
    align-items: stretch;
`;
const ContainerP = styled.div`
    display: flex;
    flex-direction: column;
    flex:1
`;
const Styling = styled.div`
    display: flex;
    align-items: center;
    @media (max-width: 768px){
        display: contents;
    }
`;
const Button = styled.a`
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    z-index: 0;
    text-align: center;
    text-decoration: none;
    line-height: 38px;
    white-space: nowrap;
    font-weight: 500;
    min-width: 200px;
    height: 50px;
    padding: 0px 25px;
    border-radius: 5px;
    font-size: 1rem;
    flex-shrink: 0;
    margin: 0px;
    color: #fff;
    background-color: #000;
    border: 1px solid #000;
    transition: all 0.2s ease 0s;
    cursor: pointer;
    overflow: hidden;
    outline: none;
    box-sizing: border-box;
`;
export function Develop(){
    return <DevelopWrapper>
        <DevelopContainer>
            <ContainerP>
            <Content>
                    Develop.
                    Preview. 
                    Ship.
            </Content>
            <Content1>
                The development platform for the best frontend teams.
            </Content1>
            </ContainerP>
            <Styling>
                <ButtonContainer>
                    <Container>
                        <Button href="#" class=" color button icon-color">
                            <span class="color text">
                                Start Deploying
                            </span>
                        </Button>
                    </Container>
                </ButtonContainer>
            </Styling>
        </DevelopContainer>
    </DevelopWrapper>
}