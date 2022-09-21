import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/alura-project.png";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

const data = [
  {
    id: 1,
    image:IMG1,
    title: "Organograma - Alura - Project",
    github: "https://github.com/UardemDantas/organograma-alura",
    demo: "https://organograma-alura.vercel.app/",
  },
  {
    id: 2,
    image: "",
    title: "",
    github: "https://github.com",
    demo: "",
  },
  {
    id: 3,
    image: "",
    title: "",
    github: "https://github.com",
    demo: "",
  },
  {
    id: 4,
    image: "",
    title: "",
    github: "https://github.com",
    demo: "",
  },
  {
    id: 5,
    image: "",
    title: "",
    github: "https://github.com",
    demo: "",
  },
  {
    id: 6,
    image: "",
    title: "",
    github: "https://github.com",
    demo: "",
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
