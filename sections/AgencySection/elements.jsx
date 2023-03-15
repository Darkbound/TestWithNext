import styled from "styled-components";
import { SectionContainer, SectionBigHeading, SectionSubheading } from "~/components";

import BackgroundImage from '../../resources/background.png'

import { CardContainer } from "../../components/Containers";

export const StyledImageContainer = styled.div`
  position:relative;
  width: clamp(370px,400px, 450px);
  height:610px;
`;

export const StyledContainer = styled((props) => <SectionContainer {...props} />)`
  display:grid;
  place-items:center;
`;
export const StyledSectionContainer = styled(({ height, ...props }) => <SectionContainer {...props} />)`
  padding:25px;
  justify-content:center;
  flex-wrap:wrap;
  gap:60px;
  background-image: url(${BackgroundImage?.src});
  background-repeat: no-repeat;
  background-position: -30px 50px;
  background-size:950px;
`;

export const StyledTitle = styled((props) => <SectionBigHeading {...props} />)`
  margin:0;
  color: black;
`;
export const StyledDescription = styled((props) => <SectionSubheading {...props} />)`
  margin: 0;
`;

export const StyledCardContainer = styled((props) => <CardContainer {...props} />)`
  height:100%;
`