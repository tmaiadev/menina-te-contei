import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

const Footer = ({
  categories,
  subCategories
}) => (
  <footer>
    <div className="container">
      {
        categories
          .map(({ id, name }) => (
            <div key={id}>
              <Link href={`/cat/${id}`}>
                <a className="title serif">{name}</a>
              </Link>
              {
                subCategories
                  .filter(({ category }) => category === id)
                  .map(({ id, name }) => (
                    <Link
                      key={`subcat-${id}`}
                      href={`/subcat/${id}`}
                    >
                      <a className="serif">{name}</a>
                    </Link>
                  ))
              }
            </div>
          ))
      }
    </div>
    <style jsx>
      {`
        footer {
          padding: var(--size-2);
          color: var(--secondary-text-color);
          background-color: var(--secondary-background-color);
          border-bottom: solid var(--size-1) var(--accent-color);
        }

        .container {
          display: grid;
          grid-gap: var(--size-2);
          margin-left: auto;
          margin-right: auto;
          max-width: 1024px;
        }

        .title {
          font-size: 18px;
        }

        .serif {
          display: block;
          color: var(--secondary-text-color);
          margin-bottom: var(--size-1);
        }

        .serif:hover {
          color: var(--tertiary-text-color);
        }

        @media (min-width: 375px) {
          .container {
            grid-template-columns: repeat(2, 50%);
          }
        }

        @media (min-width: 768px) {
          .container {
            grid-template-columns:  repeat(4, 25%);
          }
        }
      `}
    </style>
  </footer>
)

Footer.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    }),
  ).isRequired,
  subCategories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      category: PropTypes.string,
      name: PropTypes.string,
    }),
  ).isRequired,
};

export default Footer;
