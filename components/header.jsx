import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Button from './button';

const Header = ({
  categories,
  socialNetworks,
}) => (
  <header>
    <div className="container">
      <h1 className="cursive">
        Menina, te contei?
      </h1>
      <div className="menu-button">
        <Button
          onClick={() => {}}
        >
          Navegar
        </Button>
      </div>
      <nav>
        {
          categories
            .map(({ id, name }) => (
              <Link
                key={id}
                href={`/cat/${id}`}
              >
                <a className="nav-link fancy">{name}</a>
              </Link>
            ))
        }
        <Link href="/contato">
          <a className="nav-link fancy">CONTATO</a>
        </Link>
        <div className="social-networks">
          <div className="separator" />
          {
            socialNetworks
              .map(({ id, type, link }) => (
                <Link
                  key={id}
                  href={link}
                >
                  <a
                    className="nav-link fancy"
                    target="_blank"
                  >
                    {type.charAt(0)}
                  </a>
                </Link>
              ))
          }
        </div>
      </nav>
    </div>
    <style jsx>
      {`
        header {
          padding: var(--size-2);
          border-bottom: solid thick var(--accent-color);
        }

        .container {
          display: flex;
          max-width: 1024px;
          margin-right: auto;
          margin-left: auto;
          align-items: center;
        }

        h1 {
          flex-grow: 1;
          flex-shink: 0;
          white-space: nowrap;
        }

        nav {
          display: none;
        }

        .nav-link {
          color: var(--primary-text-color);
          padding: var(--size-1) var(--size-2);
        }

        .nav-link:focus {
          background-color: var(--secondary-background-color);
        }

        .nav-link:hover {
          background-color: var(--tertiary-background-color);
        }

        .separator {
          width: var(--size-2);
        }

        .social-networks {
          display: none;
        }

        @media (min-width: 768px) {
          header {
            border-bottom: 0px;
            border-top: solid 5px var(--accent-color);
          }

          nav {
            display: flex;
            border-bottom: solid thick var(--accent-color);
          }

          .menu-button {
            display: none;
          }
        }

        @media (min-width: 1024px) {
          .social-networks {
            display: flex;
          }
        }
      `}
    </style>
  </header>
);

Header.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    }),
  ).isRequired,
  socialNetworks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      type: PropTypes.oneOf(['instagram', 'facebook', 'twitter', 'youtube']),
      link: PropTypes.string,
    }),
  ).isRequired,
};

export default Header;
