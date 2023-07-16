import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";
import { FaRegHeart } from "react-icons/fa";
import { MdComputer } from "react-icons/md";

const Hero = () => {
  const dataNascimento = 2002;
  const anoAtual = new Date().getFullYear();
  const idade = anoAtual - dataNascimento;

  return (
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Bem-vindo (a) <br /> Ao meu Portfólio
        </SectionTitle>
        <SectionText>
          Oi! Meu nome é Talita, tenho {idade} anos. <br /> Atualmente faço
          faculdade de Analise e Desenvolvimento de sistemas pela Descomplica.{" "}
          <br />
          <FaRegHeart /> <MdComputer />
        </SectionText>
        <Button
          onClick={() => (window.location = "mailto:talitabeneves15@gmail.com")}
        >
          Saiba Mais
        </Button>
      </LeftSection>
    </Section>
  );
};

export default Hero;
