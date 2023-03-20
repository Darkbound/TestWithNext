import {
  StyledCardBoxContainer,
  StyledCardTitle,
  StyledImageContainer,
  StyledTextContainer,
  StyledCardDescription,
} from "./elements";

import Image from 'next/image'


export const Card = ({ activeSelection, changeActiveSelection, ...card }) => {
  const isactive = card.title === activeSelection ? true : undefined

  const description = card.description.split('*')

  return (
    <StyledCardBoxContainer isactive={isactive} onClick={() => changeActiveSelection(card.title)}>
      < StyledImageContainer >
        <Image src={card.image.src} alt={card.image.alt} height={60} width={60} />
      </StyledImageContainer >
      <StyledTextContainer>
        <StyledCardTitle>{card.title}</StyledCardTitle>
        <StyledCardDescription>
          {description.map((text, index) => (
            <>
              {index % 2 === 1 ? <b key={index}>{text}</b> : text}
            </>
          ))}
        </StyledCardDescription>
      </StyledTextContainer>
    </StyledCardBoxContainer >
  )
}
