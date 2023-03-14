import styled from "styled-components"

import {
  CardBoxContainer,
  CardTextContainer,
  CardTitle,
  CardDescription
} from "../../components"

export const StyledCardTitle = styled((props) => <CardTitle {...props} />)`
  transition: all 0.5s ease-out;
  margin-top:20px;
  margin-bottom:0;
`

export const StyledCardBoxContainer = styled(({ ...props }) => <CardBoxContainer {...props} />)`
  transition: all 0.5s ease-out;
  display:flex;
  margin-bottom:35px;
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
  @media(max-width:1024px){
    width:96%;
    :nth-child(2){
      width:98%;
  };
    &:nth-child(3){
      width:100%;
  };
}
`
export const StyledImageContainer = styled.div`
  align-items:center;
  display:flex;
  min-width:50px;
  height:100%;
  margin-left:45px;
  margin-right:45px;
`
export const StyledTextContainer = styled((props) => <CardTextContainer {...props} />)`
`
export const StyledCardDescription = styled((props) => <CardDescription{...props} />)`
  margin:0;
  margin-right:20px;
  padding-top:10px;
`
export const StrongText = styled.span`
  font-weight:bold;
`