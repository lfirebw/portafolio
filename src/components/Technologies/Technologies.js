import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id='tech'>
    <SectionDivider></SectionDivider>
    <br></br>
    <SectionTitle>Tecnologías</SectionTitle>
    <SectionText>
      Trabajamos con las mejores tecnologías en el desarrollo de software a nivel mundial.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem"></DiReact>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experiencia con: <br></br>
            React.js, Vue.js y otros...
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem"></DiFirebase>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experiencia con: <br></br>
            PHP/C#/Node y Base de datos
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiZend size="3rem"></DiZend>
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Experiencia con herramientas como: <br></br>
            Figma
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider></SectionDivider>
  </Section>
);

export default Technologies;
