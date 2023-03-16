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
  const { highlightedSentences, description } = card

  const MappedDescrption = highlightedSentences.map((sentence) => {
    if (!description.includes(sentence)) return

    const splitedDesc = description.split(sentence)
    splitedDesc.splice(1, 0, <StrongText>{sentence}</StrongText>)
    return splitedDesc

  })

  return (
    <StyledCardBoxContainer isActive={isActive} onClick={() => changeActiveSelection(card.title)}>
      <StyledImageContainer>
        <Image src={card.image.src} alt={card.image.alt} height={70} width={70} />
      </StyledImageContainer>
      <StyledTextContainer>
        <StyledCardTitle>{card.title}</StyledCardTitle>
        <StyledCardDescription>
          {MappedDescrption}
        </StyledCardDescription>
      </StyledTextContainer>
    </StyledCardBoxContainer>
  )
}
