import React from 'react';
import PropTypes from 'prop-types';

const Separator = ({ children }) => (
  <div className="separator">
    <div className="line" />
    <h2 className="cursive">{children}</h2>
    <style jsx>
      {/*css*/`
        .separator {
          display: block;
          position: relative;
          height: 60px;
        }

        .line {
          display: block;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 100%;
          height: 4px;
          background-color: var(--accent-color);
        }

        h2 {
          display: block;
          position: absolute;
          top: 0px;
          left: 50%;
          font-size: 32px;
          transform: translateX(-50%);
          background-color: var(--primary-background-color);
          padding: 0px 16px;
          white-space: nowrap;
        }
      `}
    </style>
  </div>
);

Separator.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Separator;
