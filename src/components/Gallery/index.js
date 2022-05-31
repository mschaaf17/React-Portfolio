import React from 'react';

function Gallery({currentCategory}) {
  const { name, description } = currentCategory;
  return (
    <section>
      <h1>{name}</h1>
      <p>{description}</p>
    </section>
  );
}
export default Gallery;
