import {
  StyledCardBoxContainer,
  StyledCardTitle,
  StyledImageContainer,
  StyledTextContainer,
  StyledCardDescription,
  StrongText,
} from "./elements";

import Image from 'next/image'

export const Card = ({ activeSelection, changeActiveSelection, ...card }) => {
  const isActive = card.title === activeSelection

  return (
    <StyledCardBoxContainer isActive={isActive} onClick={() => changeActiveSelection(card.title)}>
      <StyledImageContainer>
        <Image src={card.image.src} alt={card.image.alt} height={50} width={50} />
      </StyledImageContainer>
      <StyledTextContainer>
        <StyledCardTitle>{card.title}</StyledCardTitle>
        <StyledCardDescription>
          {card.descriptionFirstHalf} <StrongText>{card.highlightedText}</StrongText> {card.descriptionSecondHalf}
        </StyledCardDescription>
      </StyledTextContainer>
    </StyledCardBoxContainer>
  )
}
