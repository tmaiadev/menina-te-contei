import React from 'react';
import PropTypes from 'prop-types';

const App = ({ children }) => (
  <div className="app">
    {children}
    <style jsx global>
      {`
        @font-face {
          font-family: 'Midnight Signature';
          src: url("/static/MidnightSignature.otf") format("opentype");
        }

        @font-face {
          font-family: 'Champagne & Limousines';
          src: url("/static/Champagne&Limousines.ttf") format("opentype");
        }

        @font-face {
          font-family: 'Bodoni MT';
          src: url("/static/BodoniMT.tff") format("opentype");
        }

        body {
          --accent-color: #E6E659;
          --accent-text-color: #000;

          --primary-background-color: #FFFFFF;
          --secondary-background-color: #E6E9E8;
          --tertiary-background-color: #CBCAC9;

          --primary-text-color: #000000;
          --secondary-text-color: #5F5F5F;

          --size-1: 8px;
          --size-2: 16px;
          --size-3: 32px;
          --size-4: 64px;

          margin: 0px;
          padding: 0px;
          font-family: Arial;
          color: var(--primary-text-color);
          background-color: var(--primary-background-color);
        }

        @media (prefers-color-scheme: darked) {
          body {
            --primary-background-color: #000;
            --secondary-background-color: #3b3b3b;
            --tertiary-background-color: #62605e;

            --primary-text-color: #FFF;
            --secondary-text-color: #CBCAC9;
          }
        }

        .cursive {
          font-family: 'Midnight Signature', cursive;
        }

        .serif {
          font-family: 'Bodoni MT', 'Times New Roman';
        }

        .fancy {
          font-family: 'Champagne & Limousines', Arial;
        }

        .sr-only {
          display: block;
          width: 1px;
          height: 1px;
          position: absolute;
          top: 0px;
          left: 0px;
          opacity: 0;
          pointer-events: none;
        }

        * {
          box-sizing: border-box;
        }

        a {
          text-decoration: none;
          color: var(--accent-color);
          font-weight: bold;
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          margin: 0px;
        }
      `}
    </style>
  </div>
);

App.propTypes = {
  children: PropTypes.node.isRequired,
};

export default App;
