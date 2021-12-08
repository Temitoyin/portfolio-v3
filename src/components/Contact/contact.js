import React, { useRef } from "react";
import styles from "./contact.module.scss";
import emailjs from "emailjs-com";

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_kbyu9sk",
        "template_a9ibd6j",
        form.current,
        "user_TcClAr0FqQOAYvW45xlVP"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className={styles.contact}>
      <div className={styles.contact__content}>
        <div className={styles.contact__heading}>
          <h5>Get in touch</h5>
          <p>
            Got a question or proposal, or just want to say hello? Go ahead.
          </p>
        </div>
        <div>
          <form className={styles.form} ref={form} onSubmit={sendEmail}>
            <div className={styles.form__top}>
              <div className={styles.form__top_input}>
                <label htmlFor="fullName">Your Name</label>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Enter your name"
                />
              </div>
              <div className={styles.form__top_input}>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                />
              </div>
            </div>
            <div className={styles.form__bottom__input}>
              <label htmlFor="message">Your Message</label>
              <input
                type="text"
                name="message"
                placeholder="Hi I think we need a design system for our products at Company X. How soon can you hop on to discuss this ?"
              />
            </div>
            <button className={styles.sendButton} type="submit">
              Send
            </button>
          </form>
          <div class={styles.socialmedia__icons}>
            {/* <p>Socials: </p> */}
            <div className={styles.icons}>
              <a
                href="https://twitter.com/toyin_ayorinde"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fab fa-2x fa-twitter-square"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/toyin-ayorinde-55a859101/"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fab fa-2x fa-linkedin"></i>
              </a>
              <a
                href="https://github.com/Temitoyin"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fab fa-2x fa-github"></i>
              </a>
              <a
                href="https://codepen.io/temitoyin"
                target="blank"
                rel="noreferrer"
              >
                <i class="fab fa-2x fa-codepen"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
