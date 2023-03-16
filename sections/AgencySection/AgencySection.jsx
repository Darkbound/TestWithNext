import { useState } from 'react'
import { Card } from '../../collections'
import {
  StyledCardContainer,
  StyledContainer,
  StyledDescription,
  StyledImageContainer,
  StyledSectionContainer,
  StyledTitle,
} from './elements'

import Image from 'next/image'


const firstCardProps = {
  title: 'Brief',
  description: 'Complete brief writing or simple guidance on what to include, we`ve got you covered. ',
  highlightedIndexes: [1, 2, 3, 4, 5],
  image: { src: "/img/workbench.svg", alt: "workbench icon", },
}
const secondCardProps = {
  title: 'Search',
  description: 'In-depth agency search covering; criteria matching, door knocking and due-dilligence vetting.',
  highlightedIndexes: [4, 5],
  image: { src: "/img/presentation.svg", alt: "workbench icon", },
}
const thirdCardProps = {
  title: 'Pitch',
  description: 'Comprehensive pitch management including comms, diary management and pitch hosting.',
  highlightedIndexes: [1, 2],
  image: { src: "/img/talking.svg", alt: "workbench icon", },
}

export const AgencySection = ({ title, description, image }) => {
  const [activeSelection, setActiveSelection] = useState('')

  const changeActiveSelection = (value) => setActiveSelection(value)

  return (
    <StyledContainer>
      <StyledTitle>{title}</StyledTitle>
      <StyledDescription>{description}</StyledDescription>
      <StyledSectionContainer>
        <StyledImageContainer>
          <Image src={image.src} alt='video image' layout="fill" objectFit="cover" />
        </StyledImageContainer>
        <StyledCardContainer>
          <Card {...firstCardProps} activeSelection={activeSelection} changeActiveSelection={changeActiveSelection} />
          <Card {...secondCardProps} activeSelection={activeSelection} changeActiveSelection={changeActiveSelection} />
          <Card {...thirdCardProps} activeSelection={activeSelection} changeActiveSelection={changeActiveSelection} />
        </StyledCardContainer>
      </StyledSectionContainer>
    </StyledContainer>
  )
}
