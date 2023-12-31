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
                My interest in programming began in the last grades of school with the study of Turbo Pascal. Later my life diverged from programming, but over time I returned to it.
              </p>

              <p className="about__paragraph">
                In 2014, I launched an online store on the Magento platform and subsequently worked as an administrator there. What I did: Magento installing, working with versions 1.6, 1.9, connecting a domain, theme installing, customizing, configuration settings, adding products (to simplify the process, I wrote parsers in PHP that collected products from other stores and structured the received information into files for bulk import), SEO optimization, contextual advertising.
              </p>

              <p className="about__paragraph">
                In 2021, to upgrade my skills and to fully immerse myself in development, I took the Magento 2 Backend Developer course from
                <a
                  href="https://m2training.com.ua/"
                  className="about__paragraph-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  &#160;M2Training.&#160;
                </a>
                But, my basic knowledge of HTML, CSS and JavaScript was not enough for employment, plus events in Ukraine made adjustments to life.
              </p>

              <p className="about__paragraph">
                In 2023, I completed the Full Stack Developer course from
                <a
                  href="https://mate.academy/en/courses/fullstack-parttime#course-program"
                  className="about__paragraph-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  &#160;Mate&#160;Academy&#160;
                </a>
                and am now 100% ready to dive into the world of Web Development!
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
