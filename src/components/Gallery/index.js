import React from 'react';

function Gallery({currentCategory}) {
  const { name, description, more, andMore } = currentCategory;
  return (
    <section class="py-4 skills">
      <h3 class='text-[24px] font-style'>{name}</h3>
      <p class="p-3 text-white">{description}</p>
      <p class="p-3 text-white">{more}</p>
      <p class="p-3 text-white">{andMore}</p>
    </section>
  );
}
export default Gallery;
