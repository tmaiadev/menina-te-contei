import React from 'react';
import Head from 'next/head'
import PropTypes from 'prop-types';
import App from '../components/app';
import Bio from '../components/bio';
import Header from '../components/header';
import Post from '../components/post';
import SearchArticleForm from '../components/search-article-form';
import Separator from '../components/separator';
import Footer from '../components/footer';
import {
  getCategories,
  getSubCategories,
  getSocialNetworks,
  getLatestPost,
} from '../helpers/db';

const Home = ({
  categories,
  subCategories,
  socialNetworks,
  post,
}) => (
  <App>
    <Head>
      <meta charset="utf-8" />
      <title>Menina te Contei</title>
      <meta name="description" content={post.name} />
    </Head>
    <Header
      categories={categories}
      socialNetworks={socialNetworks}
    />
    <div className="container">
      <div className="layout-main-aside">
        <main>
          <Post post={post} />
        </main>
        <aside>
          <div className="aside-content">
            <Bio />
            <SearchArticleForm />
          </div>
        </aside>
      </div>
    </div>
    <Separator>Favoritos</Separator>
    FAVORITOS
    <Separator>Posts Novos</Separator>
    POSTS NOVOS
    <Footer
      categories={categories}
      subCategories={subCategories}
    />
    <style jsx>
      {/*css*/`
        .container {
          margin-right: auto;
          margin-left: auto;
          max-width: 1024px;
          padding: var(--size-2);
        }

        .aside-content {
          position: sticky;
          top: 0;
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
  subCategories: await getSubCategories(),
  socialNetworks: await getSocialNetworks(),
  post: await getLatestPost(),
});

Home.propTypes = {
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
  socialNetworks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.oneOf(['instagram', 'facebook', 'twitter', 'youtube']),
      link: PropTypes.string,
    }),
  ).isRequired,
  post: PropTypes.shape({
    id: PropTypes.string.isRequired,
    category: PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    }),
    title: PropTypes.string.isRequired,
    publishDate: PropTypes.string.isRequired,
    cover: PropTypes.shape({
      src: PropTypes.string,
      width: PropTypes.number,
      height: PropTypes.number
    }),
    body: PropTypes.string.isRequired,
  }).isRequired,
};

export default Home;
