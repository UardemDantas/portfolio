import React from "react";
import IMG1 from "../../assets/alura-project.png";
import IMG2 from "../../assets/uardemzon.png";
import IMG3 from '../../assets/tmdb.png'
import IMG4 from '../../assets/uardemflix.png'



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
    id: 4,
    image:IMG4,
    title: "UardemFlix",
    github: "https://github.com/UardemDantas/netflixclone",
    demo: "https://uardemflix.vercel.app/",
  },
  {
    id: 3,
    image:IMG3,
    title: "TmdbClone",
    github: "https://github.com/UardemDantas/apiconsumertmdb",
    demo: "https://tmdbapiconsumer.vercel.app/",
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
      <h5>Meus projetos recentes</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container" data-aos="fade-up">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio_item">
              <div className="portfolio_item-image">
                <img src={image} alt={title} />
              </div>
              <h3> {title} </h3>
              <div className="portfolio_item-cta">
                <a href={github} className="btn" target='_blank'>
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target='_blank'>
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
