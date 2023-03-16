import styled from "styled-components";
import { SectionContainer, SectionBigHeading, SectionSubheading } from "~/components";

import BackgroundImage from '../../resources/background.png'

import { CardContainer } from "../../components/Containers";

export const StyledImageContainer = styled.div`
  border-radius: .75rem;
  padding-bottom: .5rem;
  overflow:hidden;
  position:relative;
  width: clamp(380px,410px, 450px);
  height:610px;
`;

export const StyledContainer = styled((props) => <SectionContainer {...props} />)`
  display:grid;
  place-items:center;
  text-align:center;
`;
export const StyledSectionContainer = styled(({ height, ...props }) => <SectionContainer {...props} />)`
  padding-top:4rem;
  justify-content:center;
  flex-wrap:wrap;
  gap:80px;
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
  font-size: 1.5rem;
`;

export const StyledCardContainer = styled((props) => <CardContainer {...props} />)`
  padding-top:2rem;
  height:100%;
`