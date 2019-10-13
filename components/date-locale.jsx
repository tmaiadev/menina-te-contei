import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

const DateLocale = ({ children }) => {
  const element = useRef();

  useEffect(() => {
    const dt = new Date(element.current.innerText);
    element.current.innerText = dt.toLocaleString();
  }, []);

  return (
    <div ref={element}>
      {children}
    </div>
  );
};

DateLocale.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DateLocale;
