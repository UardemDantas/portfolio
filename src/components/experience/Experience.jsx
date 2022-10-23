import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";



import "./experience.css";


const Experience = () => {
  return (
    <section id="experience">
      <h5>Quais habilidades eu possuo</h5>
      <h2>Minhas Experiências</h2>
      <div className="container experience_container" data-aos="zoom-in">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>Javascript</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>React</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>Sass</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>Typescript</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>Angular</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>Vue</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience_backend">
          <h3>Other Technologies</h3>
          
          <div className="experience_content">
          <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>Inglês</h4>
                <small className="text-light">Advanced</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>Git</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>Python</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>Kotlin</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>Java</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>Tailwind</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
