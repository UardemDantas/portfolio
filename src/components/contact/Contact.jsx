import React from "react";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { MdOutlineMail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";


import "./contact.css";

const Contact = () => {
  const form = useRef();
  const [name, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_afupalo",
        "template_khzjgeg",
        form.current,
        "jDpQx3LrfraD7NXG5"
      )
      .then(
        (result) => {
          console.log(result.text);
          setNome("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact">
      <h5>Entrar em Contato</h5>
      <h2>Fale comigo</h2>

      <div className="container contact_container" data-aos="zoom-in">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineMail className="contact_option-icon" />
            <h4>E-mail</h4>
            <h5>uardemj12@gmail.com</h5>
            <a href="mailto:uardemj12@gmail.com">Enviar mensagem</a>
          </article>

          <article className="contact_option">
            <BsWhatsapp className="contact_option-icon" />
            <h4>WhatsApp</h4>
            <h5>73 9 98530118</h5>
            <a href=" https://wa.me/557398530118" target="_blank">
              Enviar mensagem
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input
            onChange={(e) => {
              setNome(e.target.value);
            }}
            value={name}
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />
          <textarea
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            value={message}
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          />
          <button type="submit" className="btn btn-primary btn-submit" data-aos="zoom-in">
            Enviar Menssagem
          </button>
        </form>
        <a href="#" className="scroll_up">Scroll Up</a>
      </div>
    </section>
  );
};

export default Contact;
