<template>
  <div class="home">

    <section class="hero">
      <div class="hero-content">
        <h1>Welcome to Sprinkle Bakery</h1>
        <p>Freshly baked joy, straight from our oven to your heart.</p>
        <router-link to="/menu" class="btn">Explore Menu</router-link>
      </div>
    </section>

    <section class="featured">
      <h2>Best Sellers 🧁</h2>
      <div class="products">
        <div v-for="item in featuredItems" :key="item.name" class="product">
          <img :src="item.image" :alt="item.name" />
          <h3>{{ item.name }}</h3>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import product from '@/data/product.json';

export default {
  data() {
    return {
      featuredItems: product.slice(0, 4), 
    };
  },
};
</script>

<style scoped>
.home {
  font-family: 'Segoe UI', sans-serif;
  background: #fff0f5;
  color: #c71585;
  min-height: 100vh;
}


.hero {
  background: url('/public/images/bakery3.avif');
  background-size: cover;
  background-position: center;
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}
.hero-content {
  background-color: rgba(255, 240, 245, 0.9);
  padding: 40px;
  border-radius: 10px;
}
.hero h1 {
  font-size: 48px;
  font-weight: bold;
}
.hero p {
  font-size: 18px;
  margin: 15px 0;
}
.btn {
  background: #ff69b4;
  color: white;
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 25px;
  font-weight: bold;
}


.featured {
  padding: 40px 20px;
  text-align: center;
}
.featured h2 {
  font-size: 32px;
  margin-bottom: 20px;
}
.products {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}
.product {
  background: #fff;
  border: 2px solid #ffc0cb;
  border-radius: 10px;
  padding: 15px;
  width: 200px;
}
.product img {
  width: 100%;
  height: 140px;
  object-fit: cover;
  border-radius: 8px;
}
.product h3 {
  font-size: 16px;
  margin-top: 8px;
  color: #d63384;
}
</style>
