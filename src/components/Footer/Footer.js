import React from 'react'

import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';
import { CgCodeSlash, CgCode } from "react-icons/cg";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Celular</LinkTitle>
          <LinkItem href="tel:21 99049-7280">(21) 99049-7280</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:talitabeneves15@gmail.com">
            talitabeneves15@gmail.com 
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>
            
              <CgCode style={{marginBottom:'-4px'}}/>
                Inovando um projeto de cada vez
                <CgCodeSlash style={{marginBottom:'-4px'}}
              />
             
          </Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/TalitaBeneves" target="_blank">
            <AiFillGithub size="3rem"/>
          </SocialIcons>
          <SocialIcons href="https://linkedin.com/in/talitabeneves/" target="_blank">
            <AiFillLinkedin size="3rem"/>
          </SocialIcons>
          <SocialIcons href="https://www.instagram.com/talita_beneves/" target="_blank">
            <AiFillInstagram size="3rem"/>
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  )
}

export default Footer;
