import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

const CategoryLabel = ({
  category: {
    id,
    name,
  },
}) => (
  <Link href={`/cat/${id}`}>
    <a className="fancy">
      {name}
      <style jsx>
        {/*css*/`
          a {
            color: var(--accent-text-color);
            background-color: var(--accent-color);
            padding: 8px;
          }
        `}
      </style>
    </a>
  </Link>
);

CategoryLabel.propTypes = {
  category: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
};

export default CategoryLabel;
