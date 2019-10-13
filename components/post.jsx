import React from 'react';
import PropTypes from 'prop-types';
import DateLocale from './date-locale';
import CategoryLabel from './category-label';

const Post = ({
  post: {
    title,
    category,
    publishDate,
    cover,
    body,
  },
}) => (
  <div className="post">
    <div className="cat-label-wrapper">
      <CategoryLabel category={category} />
    </div>
    <h2 className="title serif">{title}</h2>
    <div className="publish-date serif">
      <DateLocale>{publishDate}</DateLocale>
    </div>
    <img
      className="cover"
      src={cover.src}
      width={cover.width}
      height={cover.height}
      alt={title}
    />
    <div className="body" dangerouslySetInnerHTML={{ __html: body }} />
    <style jsx>
      {`
        .cat-label-wrapper {
          margin-bottom: 16px;
        }

        .publish-date {
          font-style: italic;
          color: var(--secondary-text-color);
          font-size: 18px;
          margin: var(--size-2) 0px;
        }

        .title {
          font-size: 50px;
          line-height: 40px;
        }

        .cover {
          display: block;
          width: 100%;
          height: auto;
          background-color: var(--tertiary-background-color);
        }

        .body {
          text-align: justify;
          word-break: break-word;
          hyphens: auto;
        }
      `}
    </style>
  </div>
);

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.string.isRequired,
    category: PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    }),
    title: PropTypes.string.isRequired,
    publishDate: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
};

export default Post;
