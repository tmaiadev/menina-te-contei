import React from 'react';

const Bio = () => (
  <div className="bio">
    <img
      className="photo"
      src="/static/mari.jpg"
      width="288"
      height="324"
      alt="Foto de Mari Guimarães"
    />
    <div className="name cursive">
      Mari Guimarães
    </div>
    <style jsx>
      {`
        .bio {
          background-color: var(--primary-background-color);
          box-shadow: 0px 0px 0px rgba(0, 0, 0, 0);
          padding: var(--size-2);
          will-change: transform;
          transition: transform .3s ease-in-out,
            box-shadow .3s ease-in-out,
            background-color .3s ease-in-out,
            color .3s ease-in-out;
        }

        .photo {
          width: 100%;
          height: auto;
        }

        .name {
          text-align: center;
          white-space: nowrap;
          font-size: 32px;
        }

        @media (min-width: 768px) {
          .bio:hover {
            color: #000;
            background-color: #FFF;
            transform: rotate(10deg) scale(1.1);
            box-shadow: 0px 2px 5px rgba(0, 0, 0, .3);
          }
        }
      `}
    </style>
  </div>
);

export default Bio;
