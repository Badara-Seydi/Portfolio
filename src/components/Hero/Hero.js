import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection> 
      <SectionTitle main center>
        Bienvenue, je suis  <br/>
        Badara Seydi
        </SectionTitle>
        <SectionText>
          Développeur Javascript Full Stack orienté Back-End. 
        </SectionText>
        {/* <Button onCLick={()=>window.location='https://google.com'}>En Savoir +</Button> */}
    </LeftSection>
  </Section>
);

export default Hero;