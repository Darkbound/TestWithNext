import { StyledDescription } from "../../sections/AgencySection/elements";
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
  const { highlightedIndexes, description } = card

  const MappedDescription = description.split(' ')
  const shouldBeBold = (idx) => highlightedIndexes.includes(idx)

  return (
    <StyledCardBoxContainer isActive={isActive} onClick={() => changeActiveSelection(card.title)}>
      <StyledImageContainer>
        <Image src={card.image.src} alt={card.image.alt} height={70} width={70} />
      </StyledImageContainer>
      <StyledTextContainer>
        <StyledCardTitle>{card.title}</StyledCardTitle>
        <StyledCardDescription>
          {MappedDescription.map((word, idx) => shouldBeBold(idx) ? <StrongText>{word + ' '}</StrongText> : word + ' ')}
        </StyledCardDescription>
      </StyledTextContainer>
    </StyledCardBoxContainer>
  )
}
