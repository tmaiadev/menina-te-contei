import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  'aria-label': ariaLabel,
  children,
  onClick,
}) => (
  <button
    type="button"
    className="fancy"
    onClick={onClick}
    aria-label={ariaLabel}
  >
    {children}
    <style jsx>
      {`
        button {
          margin: 0px;
          padding: var(--size-1) var(--size-2);
          background-color: var(--accent-color);
          border: 0px;
          cursor: pointer;
        }
      `}
    </style>
  </button>
);

Button.propTypes = {
  'aria-label': PropTypes.string,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  'aria-label': undefined,
};

export default Button;
