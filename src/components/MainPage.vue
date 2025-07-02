// MainPage.vue
<template>
  <div class="main">
    <ThreeBackground />
    <!-- 🍰 Header -->
    <div class="header">
      <!-- Left: Social Icons -->
      <div class="socials">
        <a href="https://facebook.com"><img src="/images/face.png" />facebook</a>
        <a href="https://instagram.com"><img src="/images/insta.png" />instagram</a>
        <a href="https://twitter.com"><img src="/images/twitter.png" />twitter</a>
      </div>

      <!-- Center: Logo -->
      <div class="logo">🎂 <span>Bakery</span></div>

      <!-- Right: Navbar -->
      <ul class="nav-links">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/menu">Menu</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
      </ul>
    </div>

    <!-- 🔍 Search Bar -->
    <div class="search-bar">
      <img src="/images/iconsbar.png" class="search-icon" />
      <input type="text" v-model="searchQuery" placeholder="Search..." />
    </div>

    <!-- 🧁 Product Grid -->
    <h2 class="section-title">Our Delicious Creations 🍩</h2>
    <div class="grid-container">
      <div v-for="item in filteredItems" :key="item.name" class="product-card">
        <img :src="item.image" :alt="item.name" />
        <h3>{{ item.name }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
import product from '@/data/product.json';
import ThreeBackground from './ThreeBackground.vue';

export default {
  components: {
    ThreeBackground
  },
  data() {
    return {
      searchQuery: '',
      items: product,
    };
  },
  computed: {
    filteredItems() {
      return this.items.filter(item =>
        item.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
};
</script>

<style scoped>
.main {
  background-color: #ffeef5;
  color: #c71585;
  min-height: 100vh;
  font-family: 'Segoe UI', sans-serif;
  position: relative;
  overflow: hidden;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffe4ec;
  padding: 15px 30px;
  border-bottom: 2px solid #f8cdd9;
  flex-wrap: wrap;
}

.socials {
  display: flex;
  gap: 15px;
}
.socials a {
  display: flex;
  align-items: center;
  gap: 5px;
  text-decoration: none;
  color: #c71585;
  font-size: 14px;
  font-weight: 600;
}
.socials a:hover {
  color: #ff69b4;
}
.socials img {
  width: 18px;
  height: 18px;
}

.logo {
  font-size: 28px;
  font-weight: bold;
  font-family: 'Georgia', serif;
  color: #c71585;
  display: flex;
  align-items: center;
  gap: 6px;
}

.nav-links {
  display: flex;
  gap: 25px;
  list-style: none;
}
.nav-links a {
  text-decoration: none;
  color: #c71585;
  font-weight: 600;
  font-size: 16px;
}
.nav-links a:hover {
  color: #ff69b4;
}

.search-bar {
  display: flex;
  align-items: center;
  margin: 20px auto;
  max-width: 300px;
  background: #fff0f6;
  padding: 6px 12px;
  border: 1px solid #f8cdd9;
  border-radius: 20px;
}
.search-icon {
  width: 20px;
  height: 20px;
  margin-right: 10px;
}
input[type='text'] {
  border: none;
  outline: none;
  background: transparent;
  width: 100%;
  color: #c71585;
  font-size: 14px;
}

.section-title {
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  margin: 20px 0;
}
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 10px;
  padding: 20px;
}
.product-card {
  background: #fff0f6;
  border: 2px solid #ffc0cb;
  border-radius: 10px;
  padding: 15px;
  text-align: center;
}
.product-card img {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
}
.product-card h3 {
  font-size: 16px;
  color: #d63384;
  margin-top: 8px;
}

@media (max-width: 768px) {
  .header {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  .nav-links {
    margin-top: 10px;
  }
}
</style>
