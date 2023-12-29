/* eslint-disable max-len */
import React from 'react';
import classNames from 'classnames';

import './Projects.scss';

import projects from '../../api/projects.json';
import { socialSvgComponents } from '../SVG/socialSVG';
import { ExternalLinkSVG } from '../SVG/ExternalLinkSVG';
import { FolderSVG } from '../SVG/FolderSVG';

export const Projects: React.FC = () => {
  const featuredProjects = projects.filter(project => project.isFeatured);
  const otherProjects = projects.filter(project => !project.isFeatured);
  const { GitHubSVG } = socialSvgComponents;

  return (
    <section className="projects" id="Projects">
      <div className="container">
        <div className="projects__wrapper">
          <h2 className="projects__title">
            My Works
          </h2>

          <div className="projects__list">
            {featuredProjects.map((project, index) => {
              return (
                <div className="projects__item" key={project.id}>
                  <img
                    src={project.image}
                    className="projects__item-image"
                    alt={project.title}
                  />

                  <div className={classNames(
                    'projects__item-description',
                    { 'projects__item-description--reverse': (index + 1) % 2 === 0 },
                  )}
                  >
                    <h3 className="projects__item-title">
                      {project.title}
                    </h3>

                    <div className="projects__item-text">
                      {project.description}
                    </div>

                    <div className="projects__item-technology">
                      {project.stack}
                    </div>

                    <div className="projects__item-links">
                      <a
                        href={project.gitHubUrl}
                        className="projects__item-link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="projects__item-link-icon">
                          <GitHubSVG />
                        </div>
                      </a>

                      <a
                        href={project.url}
                        className="projects__item-link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="projects__item-link-icon">
                          <ExternalLinkSVG />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="projects__other">
            <div className="projects__other-grid">
              {otherProjects.map(project => {
                return (
                  <div className="projects__other-element" key={project.id}>
                    <div>
                      <div className="projects__other-element-icons">
                        <div className="projects__other-element-icons-folder">
                          <FolderSVG />
                        </div>

                        <div className="projects__other-element-icons-links">
                          <a
                            href={project.gitHubUrl}
                            className="projects__other-element-icons-link"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <div className="projects__item-link-icon">
                              <GitHubSVG />
                            </div>
                          </a>

                          <a
                            href={project.url}
                            className="projects__other-element-icons-link projects__other-element-icons-link--external"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <div className="projects__item-link-icon">
                              <ExternalLinkSVG />
                            </div>
                          </a>
                        </div>
                      </div>

                      <h4 className="projects__other-element-title">
                        {project.title}
                      </h4>

                      <div className="projects__other-element-text">
                        {project.description}
                      </div>
                    </div>

                    <div className="projects__other-element-technology">
                      {project.stack}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
