import React from "react";
import IMG1 from "../../assets/alura-project.png";
import IMG2 from "../../assets/uardemzon.png";
import "./portfolio.css";


const data = [
  {
    id: 2,
    image:IMG2,
    title: "UardemZon",
    github: "https://github.com/UardemDantas/uardemzon",
    demo: "https://uardemzon.vercel.app/",
  },
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
