import {
  StyledCardBoxContainer,
  StyledCardTitle,
  StyledImageContainer,
  StyledTextContainer,
  StyledCardDescription,
  StrongText,
  SpecialChar
} from "./elements";

import Image from 'next/image'


export const Card = ({ activeSelection, changeActiveSelection, ...card }) => {
  const isactive = card.title === activeSelection ? true : undefined
  const { highlightedIndexes, description } = card

  const MappedDescription = description.split(' ')
  const shouldBeBold = (idx) => highlightedIndexes.includes(idx)

  const BoldText = ({ validWord }) => {
    const wordString = validWord.split('')
    const mappedWord = wordString.map((word) => word.match(/\W|_/g) ? <SpecialChar>{word} </SpecialChar> : word)
    return (<StrongText>{mappedWord}{" "}</StrongText>)
  }

  return (
    <StyledCardBoxContainer isactive={isactive} onClick={() => changeActiveSelection(card.title)}>
      < StyledImageContainer >
        <Image src={card.image.src} alt={card.image.alt} height={70} width={70} />
      </StyledImageContainer >
      <StyledTextContainer>
        <StyledCardTitle>{card.title}</StyledCardTitle>
        <StyledCardDescription>
          {MappedDescription.map((word, idx) => shouldBeBold(idx) ? <BoldText validWord={word} /> : word + ' ')}
        </StyledCardDescription>
      </StyledTextContainer>
    </StyledCardBoxContainer >
  )
}
