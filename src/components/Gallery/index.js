import React from 'react';

function Gallery({currentCategory}) {
  const { name, description, more, andMore } = currentCategory;
  return (
    <section class="py-4 skills">
      <h1 class='text-[24px]'>{name}</h1>
      <p class="p-3">{description}</p>
      <p class="p-3">{more}</p>
      <p class="p-3">{andMore}</p>
    </section>
  );
}
export default Gallery;
