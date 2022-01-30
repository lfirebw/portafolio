import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Bienvenidos a <br />
        Mi portafolio personal
      </SectionTitle>
      <SectionText>
        Ingeniero de Sistemas y desarrollador software, me dedico desde hace mucho tiempo en la creación de soluciones tecnológicas, desde páginas web simples hasta aplicaciones a medida a diversas empresas.
      </SectionText>
      <Button onClick={()=> window.location = 'https://emmyseco.com/'}>Leer más</Button>
    </LeftSection>
  </Section>
);

export default Hero;