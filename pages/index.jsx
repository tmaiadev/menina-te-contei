import React from 'react';
import PropTypes from 'prop-types';
import App from '../components/app';
import Bio from '../components/bio';
import Header from '../components/header';
import {
  getCategories,
  getSocialNetworks,
} from '../helpers/db';

const Home = ({
  categories,
  socialNetworks,
}) => (
  <App>
    <Header
      categories={categories}
      socialNetworks={socialNetworks}
    />
    <div className="container">
      <div className="layout-main-aside">
        <main>
          MAIN
        </main>
        <aside>
          <Bio />
        </aside>
      </div>
    </div>
    <style jsx>
      {`
        .container {
          margin-right: auto;
          margin-left: auto;
          max-width: 1024px;
          padding: var(--size-2);
        }

        @media (min-width: 768px) {
          .layout-main-aside {
            display: grid;
            grid-template-columns: auto 320px;
            grid-gap: var(--size-2);
          }
        }
      `}
    </style>
  </App>
);

Home.getInitialProps = async () => ({
  categories: await getCategories(),
  socialNetworks: await getSocialNetworks(),
});

Home.propTypes = {
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

export default Home;
