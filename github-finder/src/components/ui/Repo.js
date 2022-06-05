import React from 'react';

const Repo = ({ repo }) => {
  const {
    name,
    html_url,
    description,
    language
  } = repo;

  return (
    <section className='repo__container'>
      <a href={html_url} className='repo__name'>
        <h4>{name}</h4>
      </a>
      <p className='repo__description'>{description}</p>
      <p className='repo__description'>
        {language && <span>Written in {language}</span>}
      </p>
    </section>
  );
};

export default Repo;
