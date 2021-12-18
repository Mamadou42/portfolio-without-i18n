import React from 'react'

import {
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents'
import Button from '../../styles/GlobalComponents/Button'
import { LeftSection } from './HeroStyles'

const downloadCV = () => {
  const url = '/assets/files/mamadoucv.pdf'
  window.open(url, '_blank')
}

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hi, I'm Mamadou Lo COLY
          <br />
          This is my Portfolio
        </SectionTitle>
        <SectionText>
          My Purpose is to become one of the bests React and Node developers in
          the world.
        </SectionText>
        <Button target='_blank' onClick={downloadCV}>
          Download CV
        </Button>
      </LeftSection>
    </Section>
  </>
)

export default Hero
