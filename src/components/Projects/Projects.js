import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';
import { FaGithub } from "react-icons/fa";
import { RiVideoFill } from "react-icons/ri";

const Projects = () => {
  return (
    <Section nopadding id="projects">
    <SectionDivider /> <br />
    <SectionTitle>Projetos</SectionTitle>
    <GridContainer>
      {projects.map(({id, title, desc, image, tags, source, visit}) => (
        <BlogCard key={id}>
          <Img src={image} />
          <TitleContent>
            <HeaderThree HeaderThree title>{title}</HeaderThree>
            <Hr />
                </TitleContent>
            <CardInfo>{desc}</CardInfo>
            <div>
              <br/>
              <TitleContent>Criado com</TitleContent>
              <TagList>
                {tags.map((tag, index) => (
                  <Tag key={index}>| {tag}</Tag>
                ))}
              </TagList>
            </div>
            <UtilityList>
              <ExternalLinks href={visit} target="_blank">
                <FaGithub style={{marginBottom: '-2px' }}/> Code</ExternalLinks>
              <ExternalLinks href={source} target="_blank"><RiVideoFill style={{marginBottom: '-2px' }}/> 
                Video
              </ExternalLinks>
            </UtilityList>
          </BlogCard>
      ))}
     
    </GridContainer>
  </Section>
  )
}

export default Projects
