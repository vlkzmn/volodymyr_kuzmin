/* eslint-disable max-len */
import React from 'react';
import './Header.scss';
import linksList from '../../api/header_links.json';

export const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header__container">
        <nav className="header__nav">
          <div className="header__logo">
            <a href="https://vlkzmn.github.io/volodymyr_kuzmin/" className="header__logo-link">
              <img
                src="img/logo.svg"
                className="header__logo-image"
                alt="Volodymyr Kuzmin | Logo"
              />
            </a>
          </div>

          <div className="header__links">
            <ul className="header__list">
              {linksList.map(link => (
                <li className="header__list-item" key={link}>
                  <a href={`#${link}`} className="header__list-link">
                    {link}
                  </a>
                </li>
              ))}
            </ul>

            <a
              href="img/resume-Volodymyr-Kuzmin.pdf"
              download="resume-Volodymyr-Kuzmin.pdf"
              className="header__buttom"
            >
              Resume
            </a>
          </div>
        </nav>

        <div className="header__content">
          <div className="header__hi">
            Hi, my name is
          </div>

          <h1 className="header__title">
            Volodymyr Kuzmin
          </h1>

          <div className="header__legend">
            I build things for the web
          </div>

          <div className="header__text">
            I am Full Stack Developer specializing in creating (and sometimes designing) web applications, I approach my work with both enthusiasm and pleasure! I am currently looking for a job, I am willing to consider participation in various projects or startups.
          </div>
        </div>
      </div>
    </header>
  );
};
