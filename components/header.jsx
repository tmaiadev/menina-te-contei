import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Button from './button';
import Icon from './icon';

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
          <a className="nav-link nav-link--eol fancy">CONTATO</a>
        </Link>
        <div className="social-networks">
          {
            socialNetworks
              .map(({ id, type, link }, index) => (
                <a
                  key={id}
                  href={link}
                  className={`nav-link ${
                    index === socialNetworks.length - 1
                      ? 'nav-link--eol'
                      : ''
                  } nav-link--small fancy`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon type={type} />
                  <span className="sr-only">{type}</span>
                </a>
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
          margin-bottom: var(--size-2);
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
          text-align: center;
          font-weight: thin;
        }

        nav {
          display: none;
        }

        .nav-link {
          color: var(--primary-text-color);
          padding: var(--size-1) var(--size-2);
        }

        .nav-link {
          padding: var(--size-1);
        }

        .nav-link--eol {
          margin-right: var(--size-2);
        }

        .nav-link:focus {
          background-color: var(--secondary-background-color);
        }

        .nav-link:hover {
          background-color: var(--tertiary-background-color);
        }

        .social-networks {
          display: none;
        }

        @media (min-width: 768px) {
          h1 {
            font-size: 50px;
          }

          header {
            padding-right: 0px;
            border-bottom: 0px;
            border-top: solid 8px var(--accent-color);
          }

          nav {
            display: flex;
            border-bottom: solid 4px var(--accent-color);
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
