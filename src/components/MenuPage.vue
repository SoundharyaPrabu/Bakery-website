<template>
  <div class="menu-page">
    <h2 class="menu-title">Our Sweet Menu 🍰</h2>


    <div class="search-bar">
      <img src="/images/iconsbar.png" class="search-icon" />
      <input
        type="text"
        v-model="searchQuery"
        placeholder="Search for pastries, cakes, cookies..."
      />
    </div>


    <div class="menu-list">
      <div
        class="menu-item"
        v-for="product in filteredProducts"
        :key="product.id"
      >
        <h3 class="item-name">{{ product.name }}</h3>
        <p class="item-description">{{ product.description }}</p>
        <p class="item-price">₹{{ product.price }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import products from '@/data/product.json';

export default {
  name: 'MenuPage',
  data() {
    return {
      searchQuery: '',
      products,
    };
  },
  computed: {
    filteredProducts() {
      return this.products.filter(product =>
        product.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
};
</script>

<style scoped>
.menu-page {
  padding: 40px 20px;
  background-color: #ffeef5;
  color: #c71585;
  font-family: 'Segoe UI', sans-serif;
  min-height: 100vh;
}

.menu-title {
  text-align: center;
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 30px;
}

/* Search Bar */
.search-bar {
  display: flex;
  align-items: center;
  margin: 0 auto 30px;
  max-width: 350px;
  background: #fff0f6;
  padding: 6px 14px;
  border: 1px solid #f8cdd9;
  border-radius: 25px;
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

/* Menu List */
.menu-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
  padding: 0 20px;
}

.menu-item {
  background: #fff0f6;
  border: 2px solid #ffc0cb;
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 3px 6px rgba(255, 182, 193, 0.3);
  transition: transform 0.2s ease;
}
.menu-item:hover {
  transform: translateY(-5px);
}

.item-name {
  font-size: 18px;
  font-weight: bold;
  color: #d63384;
  margin-bottom: 6px;
}
.item-description {
  font-size: 14px;
  color: #6e3255;
  margin-bottom: 8px;
}
.item-price {
  font-size: 16px;
  font-weight: 600;
  color: #b03060;
}
</style>
