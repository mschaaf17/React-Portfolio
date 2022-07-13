import React from 'react';

function Gallery({currentCategory}) {
  const { name, description, more, andMore } = currentCategory;
  return (
    <section class="py-4 skills">
      <h3 class='learn-more-skills font-style'>{name}</h3>
      <p class="p-3 text-white resume-info">{description}</p>
      <p class="p-3 text-white resume-info">{more}</p>
      <p class="p-3 text-white resume-info">{andMore}</p>
    </section>
  );
}
export default Gallery;
