import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider/>
    <br/>
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>J'aime explorer de nouvelles technologies. Je suis fullstack, avec une appétence plus forte sur le back-end </SectionText>
    <SectionText>
      <List>
        <ListItem>
          <DiReact size="3em" />
          <ListContainer>
            <ListTitle>Front-End</ListTitle>
            <ListParagraph>
              Experience avec <br/>
              React.JS
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <DiFirebase size="3em" />
          <ListContainer>
            <ListTitle>Back-End</ListTitle>
            <ListParagraph>
              Experience avec <br/>
              Node.JS et base de données
            </ListParagraph>
          </ListContainer>
        </ListItem>
      </List>
    </SectionText>
  </Section>
);

export default Technologies;
