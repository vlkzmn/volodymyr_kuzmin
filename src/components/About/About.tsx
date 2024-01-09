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
                My interest in programming began during the final years of school when I delved into studying Turbo Pascal. Although my life took a different path away from programming for a while, over time, I found my way back to it.
              </p>

              <p className="about__paragraph">
                In 2014, I initiated the launch of an online store on the Magento platform and subsequently served as an administrator. My responsibilities included Magento installation, proficiency with versions 1.6 and 1.9, domain connection, theme installation, customization, configuration settings, product addition (for streamlining the process, I developed parsers in PHP to gather products from other stores and organized the information into files for bulk import), SEO optimization, and managing contextual advertising.
              </p>

              <p className="about__paragraph">
                In 2021, with the aim of enhancing my skills and fully immersing myself in development, I took the Magento 2 Backend Developer course offered by
                <a
                  href="https://m2training.com.ua/"
                  className="about__paragraph-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  &#160;M2Training.&#160;
                </a>
                Additionally, I completed PHP/SQL courses on Udemy. But my basic knowledge in HTML, CSS, and JavaScript, I realized further skill development was necessary for employment. Plus events in Ukraine made adjustments to life.
              </p>

              <p className="about__paragraph">
                In 2023, I successfully completed the Full Stack Developer course at
                <a
                  href="https://mate.academy/en/courses/fullstack-parttime#course-program"
                  className="about__paragraph-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  &#160;Mate&#160;Academy&#160;
                </a>
                and am now fully prepared to embark on a journey into the realm of Web Development!
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
