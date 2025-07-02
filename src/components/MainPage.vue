<template>
  <div class="main">
    <ThreeBackground />
    <div class="header">
      <div class="socials">
        <a href="https://t.me/" target="_blank"><img src="/images/telegram.png" />Telegram</a>
        <a href="https://instagram.com" target="_blank"><img src="/images/insta.png" />Instagram</a>
        <a href="https://twitter.com" target="_blank"><img src="/images/twitter.png" />Twitter</a>
      </div>
      <div class="logo">🎂 <span>Sprinkle Bakery</span></div>

      <div class="search-bar">
        <img src="/images/iconsbar.png" class="search-icon" />
        <input type="text" v-model="searchQuery" placeholder="Search..." />
      </div>
    </div>


    <h2 class="section-title">Our Delicious Creations 🍩</h2>
    <div class="grid-container">
      <div v-for="item in filteredItems" :key="item.name" class="product-card">
        <img :src="item.image" :alt="item.name" />
        <h3>{{ item.name }}</h3>
        <p class="description">{{ item.description }}</p>
        <p class="price">₹{{ item.price }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import ThreeBackground from './ThreeBackground.vue';
import product from '@/data/product.json';

export default {
  name: 'MainPage',
  components: {
    ThreeBackground
  },
  data() {
    return {
      searchQuery: '',
      items: product
    };
  },
  computed: {
    filteredItems() {
      return this.items.filter(item =>
        item.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  }
};
</script>

<style scoped>
.main {
  background-color: #ffeef5;
  color: #c71585;
  min-height: 100vh;
  font-family: 'Segoe UI', sans-serif;
  position: relative;
  z-index: 1;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffe4ec;
  padding: 15px 30px;
  border-bottom: 2px solid #f8cdd9;
  flex-wrap: wrap;
  position: relative;
}

.logo {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-size: 28px;
  font-weight: bold;
  font-family: 'Georgia', serif;
  color: #c71585;
  display: flex;
  align-items: center;
  gap: 6px;
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

.search-bar {
  display: flex;
  align-items: center;
  background: #fff0f6;
  padding: 6px 12px;
  border: 1px solid #f8cdd9;
  border-radius: 20px;
  min-width: 200px;
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
.product-card .description {
  font-size: 14px;
  color: #7b4a3b;
  margin-top: 5px;
}
.product-card .price {
  font-weight: bold;
  color: #b85c38;
  margin-top: 8px;
}

@media (max-width: 768px) {
  .header {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .logo {
    position: static;
    transform: none;
    margin: 10px 0;
  }

  .search-bar {
    margin-top: 10px;
  }
}
</style>
