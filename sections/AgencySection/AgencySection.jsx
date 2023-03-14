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
  descriptionFirstHalf: 'Complete',
  highlightedText: 'brief writing or simple guidance',
  descriptionSecondHalf: 'on what to include, we`ve got you covered.',
  image: { src: "/img/workbench.svg", alt: "workbench icon", },
}
const secondCardProps = {
  title: 'Search',
  descriptionFirstHalf: 'In-depth agency search covering;',
  highlightedText: 'criteria matching,',
  descriptionSecondHalf: 'door knocking and due-dilligence vetting.',
  image: { src: "/img/presentation.svg", alt: "workbench icon", },
}
const thirdCardProps = {
  title: 'Pitch',
  descriptionFirstHalf: 'Comprehensive',
  highlightedText: 'pitch management',
  descriptionSecondHalf: 'including comms, diary management and pitch hosting.',
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
