import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const DateLocale = ({ children }) => {
  const [date, setDate] = useState(children.innerText);

  useEffect(() => {
    const dt = new Date(children);
    setDate(dt.toLocaleString());
  }, []);

  return (
    <>
      {date}
    </>
  );
};

DateLocale.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DateLocale;
