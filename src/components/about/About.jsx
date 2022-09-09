import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import {TbAwardOff} from 'react-icons/tb'
import {AiOutlineFolderOpen} from 'react-icons/ai'

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
          <img src={ME} alt="About Image" />
          </div>
        </div>


        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
            <TbAwardOff className="about_icon"/>
              <h5>Experience</h5>
              <small>Don't have any experience yet.</small>
            </article>

            <article className="about_card">
              <AiOutlineFolderOpen className="about_icon" />
              <h5>Projects</h5>
              <small>Making a new projects to post here.</small>
            </article>
          </div>
          <p>
          Olá, me chamo Uardem, tenho 22 anos, sou uma pessoa que é apaixonada por tecnologia, comecei usar o computador aos meus 7 anos e não parei desde então. Atualmente não possuo experiencia no mercado de trabalho de programação, mas estou cursando uma faculdade voltada para tecnologia, comecei a aprender programação no inicio desse ano de 2022, e desde lá estou estudando para poder me aperfeiçoar. Gosto de trabalhar em equipe, gosto de arriscar (com consciência), tenho uma boa oratória e gosto de conhecer pessoas novas.
          </p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>

        </div>
      </div>
    </section>
  );
};

export default About;
