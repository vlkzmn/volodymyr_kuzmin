import React from 'react';

const GitHubSVG: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <title>GitHub</title>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const InstagramSVG: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <title>Instagram</title>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const LinkedinSVG: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <title>LinkedIn</title>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const TelegramSVG: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
  >
    <rect width="256" height="256" fill="none" />
    <title>Telegram</title>
    <path d="M88,134.9,177.9,214a8,8,0,0,0,13.1-4.2L228.6,45.6a8,8,0,0,0-10.7-9.2L33.3,108.9c-7.4,2.9-6.4,13.7,1.4,15.3Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24" />
    <line x1="88" y1="134.9" x2="224.1" y2="36.6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24" />
    <path d="M132.9,174.4l-31.2,31.2A8,8,0,0,1,88,200V134.9" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24" />
  </svg>
);

interface Components {
  [key: string]: React.FC;
}

interface ComponentsData {
  name: string;
  link: string;
}

export const socialSvgComponents: Components = {
  GitHubSVG,
  InstagramSVG,
  LinkedinSVG,
  TelegramSVG,
};

export const socialSvgData: ComponentsData[] = [
  {
    name: 'GitHubSVG',
    link: 'https://github.com/vlkzmn',
  },
  {
    name: 'InstagramSVG',
    link: 'https://www.instagram.com/volodymyr.kuzmin/',
  },
  {
    name: 'TelegramSVG',
    link: 'https://t.me/VolodymyrKuzmin',
  },
  {
    name: 'LinkedinSVG',
    link: 'https://www.linkedin.com/in/volodymyr-kuzmin/',
  },
];
