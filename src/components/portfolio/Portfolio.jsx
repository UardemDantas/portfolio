import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/alura-project.png";


const data = [
  {
    id: 1,
    image:IMG1,
    title: "Organograma",
    github: "https://github.com/UardemDantas/organograma-alura",
    demo: "https://organograma-alura.vercel.app/",
  },

];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Meus trabalhos recentes</h5>
      <h2>Portifolio</h2>

      <div className="container portfolio_container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio_item">
              <div className="portfolio_item-image">
                <img src={image} alt={title} />
              </div>
              <h3> {title} </h3>
              <div className="portfolio_item-cta">
                <a href={github} className="btn">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
        
      </div>
    </section>
  );
};

export default Portfolio;
