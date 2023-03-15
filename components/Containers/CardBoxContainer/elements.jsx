import styled from "styled-components";

export const StyledCardBox = styled((props) => <div {...props} />)`
  display:inline-block ;
  width:500px;
  height:170px;
  background-color: #f5f5f5;
  border-radius:10px;
  :nth-child(2){
  width:525px;
};
&:nth-child(3){
  width:550px;
};
`