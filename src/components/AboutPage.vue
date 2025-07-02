<template>
  <section class="about-page">
    <h2>About Our Bakery</h2>
    <p>
      Welcome to <strong>Sweet Crumbs Bakery</strong>, your cozy neighborhood escape into the world of warmth,
      sweetness, and handmade treats. We believe that every bite should bring a smile, and every flavor should feel
      like home.
    </p>

    <p>
      Founded with love and flour, our bakery blends tradition with creativity. Whether it's our buttery croissants,
      vibrant doughnuts, or luxurious jar cakes, every product is crafted fresh each morning using only the finest
      ingredients.
    </p>

    <p>
      At Sweet Crumbs, we don’t just bake—we celebrate. From everyday indulgences to special moments, we’re here to
      make your day a little brighter and a lot sweeter.
    </p>

    <h3>Why Choose Us?</h3>
    <ul>
      <li>✨ Freshly baked every day with ❤️</li>
      <li>🍓 100% real fruits, nuts & chocolates</li>
      <li>🎨 Unique flavors & creative designs</li>
      <li>🚚 Local delivery & custom orders</li>
    </ul>

    <p class="closing-note">
      Thank you for being a part of our journey. We invite you to explore our menu, visit us in person, or simply
      enjoy the sweet experience from the comfort of your home.
    </p>
  </section>
</template>

<script>
export default {
  name: "AboutPage",
};
</script>

<style scoped>
.about-page {
  background-color: #fff4f8;
  padding: 40px 20px;
  font-family: 'Segoe UI', sans-serif;
  color: #b85c38;
  max-width: 800px;
  margin: 0 auto;
}

.about-page h2 {
  font-size: 32px;
  text-align: center;
  margin-bottom: 20px;
  color: #d63384;
}

.about-page h3 {
  font-size: 24px;
  margin-top: 30px;
  color: #b85c38;
}

.about-page p {
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 20px;
}

.about-page ul {
  list-style: none;
  padding: 0;
  margin-bottom: 20px;
}

.about-page li::before {
  content: '🌸';
  margin-right: 10px;
}

.closing-note {
  font-style: italic;
  color: #a14c65;
  text-align: center;
}
</style>
