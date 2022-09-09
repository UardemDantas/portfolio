import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
    <h2>My Experience</h2>
      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
              <h4>HTML</h4>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
              <h4>CSS</h4>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
                <div> 
                <h4>Javascript</h4>
                </div>
            </article>

            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
                <div>
                <h4>Typescript</h4>
                </div>
            </article>

            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
              <h4>ReactJs</h4>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
              <h4>AngularJs</h4>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheckFill className="experience_details-icon" />
              <div>
              <h4>VueJs</h4>
              </div>
            </article>
          </div>
        </div>

        <div className="experience_backend">
          <h3>Backend Development</h3>
          <div className="experience_content">
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
              <h4>Python</h4>
              <small className="text-light">Basic</small>
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
              <h4>Git</h4>
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
