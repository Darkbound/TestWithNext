import styled from "styled-components";
import { SectionContainer, SectionBigHeading, SectionSubheading } from "~/components";

import BackgroundImage from '../../resources/background.png'

import { CardContainer } from "../../components/Containers";

export const StyledImageContainer = styled.div`
  position:relative;
  width:370px;
  height:610px;
  margin-left:240px;
  @media(max-width:1024px){
    width:450px;
    margin-left:auto;
    margin-right:auto;
    margin-bottom:50px;
  }
`;

export const StyledContainer = styled((props) => <SectionContainer {...props} />)`
  width:100%;
  display:block;
  align-items: center;
  text-align:center;
  margin-bottom: 150px;
  @media(max-width:1024px){
  width:100%;
  background-size:100%;
  background-position:40px 180px;
  };
`;
export const StyledSectionContainer = styled(({ height, ...props }) => <SectionContainer {...props} />)`
  background-image: url(${BackgroundImage?.src});
  background-repeat: no-repeat;
  background-position:left 20px;
  background-size:960px;
  margin-bottom: 150px;
  width: 85%;
  min-height:600px;
  margin-top:30px;
  @media(min-width:1024px) and (max-width:1400px){
    width:115%;
  }
  @media(max-width:1024px){
    width:100%;
    display:block;
    text-align:center;
  };
`;

export const StyledTitle = styled((props) => <SectionBigHeading {...props} />)`
  margin:0;
  color: black;
`;
export const StyledDescription = styled((props) => <SectionSubheading {...props} />)`
  margin: 0;
`;

export const StyledCardContainer = styled((props) => <CardContainer {...props} />)`
  margin-top:10px;
  margin-left:30px;
  height:100%;
  @media(max-width:1024px){
    margin-left:auto;
    margin-right:auto;
  }
`