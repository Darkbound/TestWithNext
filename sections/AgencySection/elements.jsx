import styled from "styled-components";
import { SectionContainer, SectionBigHeading, SectionSubheading } from "~/components";

import BackgroundImage from '../../resources/background.png'

import { CardContainer } from "../../components/Containers";

export const StyledImageContainer = styled.div`
  position:relative;
  width:370px;
  height:610px;
  margin-left:140px;
  margin-bottom:50px;
  @media(max-width:1024px){
    width:450px;
    margin-left:auto;
    margin-right:auto;
  }
`;

export const StyledContainer = styled((props) => <SectionContainer {...props} />)`
  width:100%;
  display:block;
  align-items: center;
  text-align:center;
  margin-bottom: 150px;
`;
export const StyledSectionContainer = styled(({ height, ...props }) => <SectionContainer {...props} />)`
  background-image: url(${BackgroundImage?.src});
  background-repeat: no-repeat;
  background-position:-120px 20px;
  background-size:1100px;
  margin-bottom: 150px;
  width: 80%;
  min-height:600px;
  margin-top:30px;
  @media(max-width:1024px){
    display:block;
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