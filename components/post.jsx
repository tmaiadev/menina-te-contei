import React from 'react';
import PropTypes from 'prop-types';
import DateLocale from './date-locale';

const Post = ({
  post: {
    title,
    publishDate,
    cover,
    body,
  },
}) => (
  <div className="post">
    <h2 className="title serif">{title}</h2>
    <div className="publish-date serif">
      <DateLocale>{publishDate}</DateLocale>
    </div>
    <img
      className="cover"
      src={cover}
      alt={title}
    />
    <div className="body" dangerouslySetInnerHTML={{ __html: body }} />
    <style jsx>
      {`
        .post {

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
          width: 100%;
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
    title: PropTypes.string.isRequired,
    publishDate: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
};

export default Post;
