import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
    display: flex;
    width:1048px;
    max-width: 100%;
    margin: auto;
    align-items: center;
    justify-content: space-between;
    padding: 24px 0 24px;
    font-family: sans-serif;
    @media (max-width:768px){
        flex-wrap: wrap;
        justify-content: center;
    }
`;
const CopyRight = styled.span`
    color: #666;
    font-size: 14px;
    @media (max-width:768px){
        order: 2;
        flex-basis: 100%;
        margin-top: 20px;
        text-align: center;
    }
`;
const Media = styled.span`
    @media (max-width:768px){
        order: 1;
        margin-left: 10px;
    }
`;
const MediaList = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: inline-flex;
    vertical-align: middle;
`;
const ListItem = styled.li`
    display: inline-flex;
    margin-right: 15px;
    border-right: 1px solid #eaeaea;
    padding-right: 15px
`;
const Link = styled.a`
    color: #663;
    text-decoration: none;
    font-size: 14px;
    transition: all .2s ease;
    display: inline-block;
    width: 18px;
    height: 18px;
`;
const System = styled.div`
    min-width: 223px;
    height:32px;
    @media (max-width: 768px){
        order: 0;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    }
`;
const LinkSystem = styled.a`
    cursor: pointer;
    color: inherit;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
`;
const Indicator = styled.div`
    height: 32px;
    width: 223px;
    display: flex;
    align-items: center;
    max-width: 300px;
    padding: 0 12px;
    border: 1px solid #eaeaea;
    border-radius: 5px;
    background-color: #fff;
    letter-spacing: -.01em;
`;
const Small = styled.small`
    font-size: 14px;
    font-weight: 400;
    color: #000;
    line-height: 1.5;
`;
const DotIndicatdor = styled.span`
    flex-shrink: 0;
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 100%;
    background-color: #0070f3;
    margin: 0 7px;
`;
const CSmall = styled.small`
    color: #0070f3;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.5;
`;
const Dark = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    color: #000;
`;

const Prefix = styled.span`
    left: 12px;
    display: inline-flex;
    position: absolute;
    pointer-events: none;
    color: #666;
    transition: color .15s ease;
`;
const Suffix = styled.span`
    display: inline-flex;
    position: absolute;
    pointer-events: none;
    color: #666;
    transition: color .15s ease;
    right: 12px;
`;
const Select = styled.select`
    appearance: none;
    padding-left: calc(1.5 * 24px);
    cursor: pointer;
    font-size: 100%;
    font: inherit;
    outline: none;
    font-size: 0.875rem;
    height: 40px;
    line-height: 1.25rem;
    text-rendering: auto;
    width: 100%;
    border-radius: 5px;
    border: 1px solid #eaeaea;
    background: #fff;
    color: #000;
    padding: 0 36px;
    padding-right: calc(1.5 * 24px)
    transition: border-color .15s ease;
`;
const Dark1 = styled.div`
    @media (max-width:768px){
        order: 0;
        flex-basis: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 20px;
    }
`;
export function EndFooter(){
    return <FooterContainer>
        <CopyRight>
        <span>
            Copyright
        </span>
           © 2021 Vercel Inc. All rights reserved.
        </CopyRight>
        <Media>
            <MediaList>
                <ListItem>
                    <Link class="footer_github__Tp1sb" href="https://github.com/vercel" rel="noopener" target="_blank" aria-label="GitHub">
                        <svg width="19" height="19" viewBox="0 0 14 14" aria-label="github">
                            <path d="M7 .175c-3.872 0-7 3.128-7 7 0 3.084 2.013 5.71 4.79 6.65.35.066.482-.153.482-.328v-1.181c-1.947.415-2.363-.941-2.363-.941-.328-.81-.787-1.028-.787-1.028-.634-.438.044-.416.044-.416.7.044 1.071.722 1.071.722.635 1.072 1.641.766 2.035.59.066-.459.24-.765.437-.94-1.553-.175-3.193-.787-3.193-3.456 0-.766.262-1.378.721-1.881-.065-.175-.306-.897.066-1.86 0 0 .59-.197 1.925.722a6.754 6.754 0 0 1 1.75-.24c.59 0 1.203.087 1.75.24 1.335-.897 1.925-.722 1.925-.722.372.963.131 1.685.066 1.86.46.48.722 1.115.722 1.88 0 2.691-1.641 3.282-3.194 3.457.24.219.481.634.481 1.29v1.926c0 .197.131.415.481.328C11.988 12.884 14 10.259 14 7.175c0-3.872-3.128-7-7-7z" fill="currentColor" fill-rule="nonzero">
        
                            </path>
                        </svg>
                    </Link>
                </ListItem>
                <ListItem>
                    <Link class="footer_bird__VLwWP" href="https://twitter.com/vercel" rel="noopener" target="_blank" aria-label="Twitter">
                        <svg height="16" viewBox="0 0 18 15" aria-label="twitter" fill="currentColor">
                            <path d="M18 1.684l-1.687 1.684v.28c0 .307-.05.602-.123.886-.04 2.316-.777 5.387-3.816 7.81C6.404 17.115 0 12.907 0 12.907c5.063 0 5.063-1.684 5.063-1.684-1.126 0-3.376-2.243-3.376-2.243.563.56 1.689 0 1.689 0C.56 7.295.56 5.61.56 5.61c.563.561 1.689 0 1.689 0C-.563 3.368 1.124.561 1.124.561 1.687 3.368 9 4.49 9 4.49l.093-.046A6.637 6.637 0 0 1 9 3.368C9 1.353 10.636 0 12.656 0c1.112 0 2.094.506 2.765 1.286l.329-.163L17.437 0l-1.122 2.245L18 1.684z" fill-rule="nonzero">
        
                            </path>
                        </svg>
                    </Link>
                </ListItem>
            </MediaList>
        </Media>
        <System>
            <LinkSystem>
                <Indicator>
                    <Small>
                        Status:
                    </Small>
                        <DotIndicatdor>
        
                        </DotIndicatdor>
                    <CSmall>
                        All systems normal.
                    </CSmall>
                </Indicator>
            </LinkSystem>
        </System>
        <Dark1>
            <label>
                <Dark>
                    <Prefix>
                        <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none" shape-rendering="geometricPrecision">
                            <path d="M2 13.381h20M8.66 19.05V22m6.84-2.95V22m-8.955 0h10.932M4 19.05h16a2 2 0 002-2V4a2 2 0 00-2-2H4a2 2 0 00-2 2v13.05a2 2 0 002 2z">
        
                            </path>
                        </svg>
                    </Prefix>
                    <Select>
                        <option value="system">System</option>
                        <option value="dark">Dark</option>
                        <option value="light">Light</option>
                    </Select>
                    <Suffix>
                        <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none" shape-rendering="geometricPrecision">
                            <path d="M17 8.517L12 3 7 8.517M7 15.48l5 5.517 5-5.517">
        
                            </path>
                        </svg>
                    </Suffix>
                </Dark>
            </label>
        </Dark1>
    </FooterContainer>
}