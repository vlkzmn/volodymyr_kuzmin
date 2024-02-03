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
                In 2012, at the request of friends, I created an online store on the Magento platform, and later a second one, and subsequently held the position of administrator in them. My responsibilities included: Magento installation, theme and functionality customization, configuration settings, product addition (to optimize the process of adding products, I developed parsers to collect products from other stores), SEO optimization and managing contextual advertising.
              </p>

              <p className="about__paragraph">
                During the process, I realized that I liked working with code more than other responsibilities, and in 2021, in order to improve my skills and fully immerse myself in development, I took the Magento 2 Backend Developer course from
                <a
                  href="https://m2training.com.ua/"
                  className="about__paragraph-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  &#160;M2Training&#160;
                </a>
                and PHP/SQL courses on Udemy. But the acquired and existing knowledge was not enough to receive an offer and that this requires further development of skills. Then events in Ukraine made their own adjustments to life.
              </p>

              <p className="about__paragraph">
                In 2024, I successfully completed the Full Stack Developer course at
                <a
                  href="https://mate.academy/en/courses/fullstack-parttime#course-program"
                  className="about__paragraph-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  &#160;Mate&#160;Academy&#160;
                </a>
                and am now fully prepared to dive into the field of web development!
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
