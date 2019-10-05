import React from 'react';
import PropTypes from 'prop-types';
import App from '../components/app';
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
