const now = (new Date()).toISOString();

export const getCategories = async () => [
  {
    id: '1',
    name: 'RECEITAS',
  },
  {
    id: '2',
    name: 'DECORAÇÃO',
  },
  {
    id: '3',
    name: 'MODA',
  },
  {
    id: '4',
    name: 'LIFESTYLE',
  },
];

export const getSocialNetworks = async () => [
  {
    id: '1',
    type: 'instagram',
    link: 'https://instagram.com/mariigmrs',
  },
  {
    id: '2',
    type: 'facebook',
    link: 'https://facebook.com/mariigmrs',
  },
  {
    id: '3',
    type: 'twitter',
    link: 'https://twitter.com/mariigmrs',
  },
  {
    id: '4',
    type: 'youtube',
    link: 'https://www.youtube.com/channel/UCFvCMchOnxl9jaYY9eLLveg',
  },
];

export const getLatestPost = async () => (
  {
    id: '1',
    category: {
      id: '1',
      name: 'RECEITAS',
    },
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    createDate: now,
    publishDate: now,
    cover: {
      src: 'https://img.itdg.com.br/tdg/images/blog/uploads/2016/11/shutterstock_519509938.jpg',
      width: 605,
      height: 403,
    },
    body: `
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
  
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure Dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
 
            <p>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
    `,
  }
);

export const getPosts = async () => {};
