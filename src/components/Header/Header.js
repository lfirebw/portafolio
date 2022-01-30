import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons,Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="https://emmyseco.com/" target="_blank">
        <a target="_blank" style={ { display: "flex", alignItems:"center", color: "white", marginBottom: "20px" } }>
          {/* <DiCssdeck size="3rem" /><Span>EmmySeco</Span> */}
          <img src="https://emmyseco.com/wp-content/uploads/2021/01/logo_emmyseco.png" />
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Proyectos</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Tecnologías</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>Sobre mi</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/lfirebw" target="_blank">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://ve.linkedin.com/in/emmyseco" target="_blank">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.instagram.com/emmyseco/" target="_blank">
        <AiFillInstagram size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
