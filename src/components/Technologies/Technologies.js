import React from 'react'

import { DiFirebase, DiReact, DiAngularSimple, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => {
  return (
    <Section id="tech">
    <SectionDivider/> 
    <br/> 
    <SectionTitle>Tecnologias</SectionTitle>
    <SectionText>
    Já fiz projetos com várias tecnologias no mundo do desenvolvimento web. Do Back-end ao Design 
    </SectionText>
   
    <List>
      <ListItem>
        <h2>
          <DiReact size="5rem" /> <DiAngularSimple size="5rem" />
        </h2>
        <ListContainer> 
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experiência em <br />
            React.js e Angular
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="5rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experiência com <br />
            Node and Databases
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiZend size="5rem" />
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Experiência com <br />
            Ferramentas como Figma
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
  );
}

export default Technologies
