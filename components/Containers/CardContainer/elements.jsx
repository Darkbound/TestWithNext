import styled from "styled-components";

export const StyledCardContainer = styled((props) => <div {...props} />)`
display:grid;
gap:40px;
height:500px;
width:520px;

@media (max-width:1024px){
  width:84vw;
}
`