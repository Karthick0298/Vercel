import {react} from 'react';
import styled from 'styled-components';

const GridContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    min-width: 1px;
    max-width: 100%;
    flex: 1;
    justify-content: flex-start;
    align-items: center;
`;
const Small = styled.small`
font-size:0.875rem;
letter-spacing:0.1rem;
padding-left:0;
color:#999;
text-align: center;
font-weight: 700;
text-transform: uppercase;
margin: 24px;
`;
const SalesDesktop = styled.div`
   @media (max-width: 768px){
       display: none;
   }
`;

const SalesBrands = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 48px;
    justify-items: center;
    align-items: center;
    margin: 0 auto;
    white-space: nowrap;
    overflow: hidden;
`;
const Brand = styled.div`
display:inline-block;
overflow:hidden;
position:relative;
box-sizing:border-box;
margin:0;
`;

const BrandName = styled.div`
box-sizing:border-box;
display:block;

`;
const BrandImg = styled.img`

display:block;
margin:0;
border:none;
padding:0;
`;
const BrandImg1 = styled.img`
position:absolute;
top:0;
left:0;
bottom:0;
right:0;
box-sizing:border-box;
padding:0;
border:none;
margin:auto;
display:block;
width:0;
height:0;
min-width:100%;
max-width:100%;
min-height:100%;
max-height:100%;
`;

export function Grid(props) {
  
    return <GridContainer>
    <Small>
        Join the thousands of innovators that are already building with Vercel
    </Small>
    <SalesDesktop>
    <SalesBrands>
        <Brand>
            <BrandName>
                <BrandImg alt="" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI5LjYiIGhlaWdodD0iMzYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIi8+" />
            </BrandName>
                <BrandImg1 alt="HashiCorp Logo" src="https://assets.vercel.com/image/upload/front/home/new/logos/hashicorp.svg"/>
        </Brand>
                <Brand>
                    <BrandName>
                        <BrandImg alt="" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDUiIGhlaWdodD0iMzYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIi8+"/>
                    </BrandName>
                    <BrandImg1 alt="McDonald’s Logo" src="https://assets.vercel.com/image/upload/front/home/new/logos/mcdonalds.svg"/>
                </Brand>
                <Brand>
                    <BrandName>
                        <BrandImg alt="" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTc2IiBoZWlnaHQ9IjE5IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIvPg=="/>
                    </BrandName>
                    <BrandImg1 alt="Facebook Logo" src="https://assets.vercel.com/image/upload/front/home/new/logos/facebook.svg"/>
                </Brand>
                <Brand>
                    <BrandName>
                        <BrandImg alt="" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjA4LjM1IiBoZWlnaHQ9IjMyLjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIi8+"/>
                    </BrandName>
                    <BrandImg1 alt="Washington Post Logo" src="https://assets.vercel.com/image/upload/front/home/new/logos/washingtonpost.svg"/>
                </Brand>
                <Brand>
                    <BrandName>
                        <BrandImg alt="" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTcuNjAwMDAwMDAwMDAwMDEiIGhlaWdodD0iMzYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIi8+"/>
                    </BrandName>
                    <BrandImg1 alt="Auth0 Logo" src="https://assets.vercel.com/image/upload/front/home/new/logos/auth0.svg"/>
                </Brand>
                <Brand>
                    <BrandName>
                        <BrandImg alt="" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAxIiBoZWlnaHQ9IjMxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIvPg=="/>
                    </BrandName>
                    <BrandImg1 alt="Twilio Logo" src="https://assets.vercel.com/image/upload/front/home/new/logos/twilio.svg"/>
                </Brand>
                <Brand>
                    <BrandName>
                        <BrandImg alt="" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjkuMTY2NjY2NjY2NjY2NjciIGhlaWdodD0iMjUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIi8+"/>
                    </BrandName>
                    <BrandImg1 alt="Uber Logo" src="https://assets.vercel.com/image/upload/front/home/new/logos/uber.svg"/>
                </Brand>
                <Brand>
                    <BrandName>
                        <BrandImg alt="" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkwIiBoZWlnaHQ9IjI5IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIvPg=="/>
                    </BrandName>
                    <BrandImg1 alt="Tripadvisor Logo" src="https://assets.vercel.com/image/upload/front/home/new/logos/tripadvisor-horizontal.svg"/>
                </Brand>
                <Brand>
                    <BrandName>
                        <BrandImg alt="" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTEzLjM5OTk5OTk5OTk5OTk5IiBoZWlnaHQ9IjE1LjYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIi8+"/>
                    </BrandName>
                    <BrandImg1 alt="Patreon Logo" src="https://assets.vercel.com/image/upload/front/home/new/logos/patreon.svg"/>
                </Brand>
                <Brand>
                    <BrandName>
                        <BrandImg alt="" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzMuMiIgaGVpZ2h0PSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="/>
                    </BrandName>
                    <BrandImg1 alt="Hulu Logo" src="https://assets.vercel.com/image/upload/front/home/new/logos/hulu.svg"/>
                </Brand>
                <Brand>
                    <BrandName>
                        <BrandImg alt=""src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODQuNjAwMDAwMDAwMDAwMDEiIGhlaWdodD0iMzYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIi8+"/>
                    </BrandName>
                    <BrandImg1 alt="Scale Logo" src="https://assets.vercel.com/image/upload/front/home/new/logos/scale_.svg"/>
                </Brand>
                <Brand>
                    <BrandName>
                        <BrandImg alt="" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ1IiBoZWlnaHQ9IjMyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIvPg=="/>
                    </BrandName>
                    <BrandImg1 alt="Carhartt WIP Logo" src="https://assets.vercel.com/image/upload/front/home/new/logos/carhartt-work-in-progress.svg"/>
                </Brand>
                <Brand>
                    <BrandName>
                        <BrandImg alt="" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI1LjMiIGhlaWdodD0iMzkuMTk5OTk5OTk5OTk5OTk2IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIvPg=="/>
                    </BrandName>
                    <BrandImg1 alt="Barstool Sports Logo" src="https://assets.vercel.com/image/upload/front/home/new/logos/barstool-sports.svg"/>
                </Brand>
                <Brand>
                    <BrandName>
                        <BrandImg alt="" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODUuNSIgaGVpZ2h0PSIzOS42IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIvPg=="/>
                    </BrandName>
                    <BrandImg1 alt="Devolver Digital Logo" src="https://assets.vercel.com/image/upload/front/home/new/logos/devolver-digital.svg"/>
                </Brand>
                <Brand>
                    <BrandName>
                        <BrandImg alt="" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTcwIiBoZWlnaHQ9IjE5IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIvPg=="/>
                    </BrandName>
                    <BrandImg1 alt="Harry Rosen Logo" src="https://assets.vercel.com/image/upload/front/home/new/logos/harry-rosen.svg"/>
                </Brand>
                <Brand>
                    <BrandName>
                        <BrandImg alt="" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTg4IiBoZWlnaHQ9IjM3IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIvPg=="/>
                    </BrandName>
                    <BrandImg1 alt="Herman Miller Logo" src="https://assets.vercel.com/image/upload/front/home/new/logos/herman.svg"/>
                </Brand>
        </SalesBrands>
    </SalesDesktop>
  </GridContainer>
    

}