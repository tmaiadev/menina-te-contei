import React from 'react';
import PropTypes from 'prop-types';
import Icon from './icon';

const Input = ({
  name,
  type,
  placeholder,
  title,
  icon
}) => {
  return (
    <div className="wrapper">
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        title={title}
      />
      {icon &&
        <div
          className="icon"
          aria-hidden
          tabIndex="0"
        >
          <Icon type={icon} />
        </div>}
      <style jsx>
        {/*css*/`
          input {
            border: solid 4px var(--accent-color);
            height: 40px;
            width: 100%;
            padding: 0 var(--size-1);
            color: var(--primary-text-color);
            background-color: transparent;
          }

          .wrapper {
            position: relative;
          }

          .icon {
            position: absolute;
            top: 55%;
            transform: translateY(-50%);
            right: var(--size-2);
            pointer-events: none;
          }
        `}
      </style>
    </div>
  )
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  icon: PropTypes.string,
}

Input.defaultProps = {
  type: 'text'
};

export default Input;
