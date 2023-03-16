import styled from "styled-components"

import {
  CardBoxContainer,
  CardTextContainer,
  CardTitle,
  CardDescription
} from "../../components"

export const StyledCardTitle = styled((props) => <CardTitle {...props} />)`
  transition: all 0.5s ease-out;
  font-weight:550;
  margin:0
`

export const StyledCardBoxContainer = styled(({ ...props }) => <CardBoxContainer {...props} />)`
  align-items:center;
  transition: all 0.5s ease-out;
  display:flex;
  cursor:pointer;
  border: 2px solid ${({ isActive }) => isActive ? '#006efd' : 'transparent'};

  ${StyledCardTitle}{
    color: ${({ isActive }) => isActive ? '#006efd' : 'black'};
    text-decoration: ${({ isActive }) => isActive ? 'underline' : 'none'};
  }
  
  :hover{
    border:2px solid #006efd
  };
  &:hover ${StyledCardTitle} {
    color:#006efd !important;
    text-decoration: underline;
  }
`
export const StyledImageContainer = styled.div`
  padding:2.5rem; 
  align-items:center;
  display:flex;
  min-width:60px;
  height:60px;
`

export const StyledTextContainer = styled((props) => <CardTextContainer {...props} />)`
padding-right:5em;
padding-top:1rem;
`

export const StyledCardDescription = styled((props) => <CardDescription{...props} />)`
  line-height: 1.5;
  margin-top:.35em;
  font-size:1.05rem
`
export const StrongText = styled.span`
  font-weight:bold;
`