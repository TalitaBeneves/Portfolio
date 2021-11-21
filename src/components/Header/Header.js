import React from 'react';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

const Header = () => {
  return (
    <Container>
    <Div1>
      <a href="/">
        <a style={{ display: "flex", alignItems: "center", color: "white" }}>
          <DiCssdeck size="3rem" /> 
            <Span>Talita Beneves</Span>
        </a>
      </a>
    </Div1>
    <Div2>
      <li>
        <a href="#projects">
          <NavLink>Projetos</NavLink>
        </a>
      </li>
      <li>
        <a href="#tech">
          <NavLink>Tecnologias</NavLink>
        </a>
      </li>
      <li>
        <a href="#about">
          <NavLink>About</NavLink>
        </a>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/TalitaBeneves" target="_blank">
        <AiFillGithub size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https://linkedin.com/in/talitabeneves/" target="_blank">
        <AiFillLinkedin size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https://www.instagram.com/talita_beneves/" target="_blank">
        <AiFillInstagram size="3rem"/>
      </SocialIcons>
    </Div3>
  </Container>

  )
}

export default Header
