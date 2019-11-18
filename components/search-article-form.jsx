import React from 'react';
import Input from './input';

const SearchArticleForm = () => {
  const title = 'Pesquise por artigo';

  return (
    <form action="/search" method="get">
      <Input
        name="q"
        placeholder={title}
        title={title}
        icon="search"
      />
    </form>
  )
}

export default SearchArticleForm;
