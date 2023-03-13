import styled from "styled-components";

export const StyledCardBox = styled((props) => <div {...props} />)`
  width:33vw;
  height:170px;
  background-color: #f5f5f5;
  border-radius:10px;
  :nth-child(2){
  width:35vw;
};
&:nth-child(3){
  width:37vw;
};
`