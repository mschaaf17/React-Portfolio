import React from 'react';

function Gallery({currentCategory}) {
  const { name, description, more, andMore } = currentCategory;
  return (
    <section class="p-5 m-3 border skills">
      <h1>{name}</h1>
      <p>{description}</p>
      <p>{more}</p>
      <p>{andMore}</p>
    </section>
  );
}
export default Gallery;
