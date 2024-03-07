/* eslint-disable max-len */
import React from 'react';
import './About.scss';

export const About: React.FC = () => {
  return (
    <section className="page__about about" id="About">
      <div className="about__container">
        <div className="about__wrapper">
          <h2 className="about__title">
            About Me
          </h2>

          <div className="about__content">
            <div className="about__text">
              <p className="about__paragraph">
                My interest in programming began during the final years of school when I immersed myself in studying Turbo Pascal. Although my life diverged from programming for a while, I eventually rediscovered my passion for it.
              </p>

              <p className="about__paragraph">
                At the request of friends, I ventured into creating an online store on the Magento platform, followed by a second one, and subsequently assumed the role of administrator for both. My duties encompassed Magento installation, customization of themes and functionalities, configuration settings, product management (to streamline this process, I developed parsers to aggregate products from other stores), SEO optimization, and overseeing contextual advertising, among other tasks.
              </p>

              <p className="about__paragraph">
                {/* During the process, I realized that I liked working with code more than other responsibilities, and in 2021, in order to improve my skills and fully immerse myself in development, I took the Magento 2 Backend Developer course from
                <a
                  href="https://m2training.com.ua/"
                  className="about__paragraph-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  &#160;M2Training&#160;
                </a>
                and PHP/SQL courses on Udemy. But the acquired and existing knowledge was not enough to receive an offer and that this requires further development of skills. Then events in Ukraine made their own adjustments to life. */}

                Throughout this journey, I discovered my preference for coding over other responsibilities. In pursuit of enhancing my skills and delving deeper into development, I enrolled in the Magento 2 Backend Developer course offered by
                <a
                  href="https://m2training.com.ua/trained?id=3yxjfj9g3a&lang=en"
                  className="about__paragraph-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  &#160;M2Training
                </a>
                , as well as PHP/SQL courses on Udemy.
              </p>

              <p className="about__paragraph">
                {/* In 2024, I successfully completed the Full Stack Developer course at
                <a
                  href="https://mate.academy/en/courses/fullstack-parttime#course-program"
                  className="about__paragraph-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  &#160;Mate&#160;Academy&#160;
                </a>
                and am now fully prepared to dive into the field of web development! */}

                Following this, I successfully completed the Full Stack Developer course at
                <a
                  href="https://drive.google.com/file/d/1TwhkN4ZvdyuF4dt_2a-k3ZaewFYpvZ6i/view"
                  className="about__paragraph-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  &#160;Mate&#160;Academy
                </a>
                . Over the past year, I have been actively engaged in web development, utilizing technologies such as React, TypeScript, Node.js, and SQL. During this period, I have accumulated valuable experience through 14 projects, including collaborative team endeavors.
              </p>
            </div>

            <img
              src="img/foto.webp"
              alt="Volodymyr Kuzmin foto"
              className="about__foto"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
