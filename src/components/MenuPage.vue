<template>
  <div class="menu-page">
  
    <div class="header">
      <div class="socials">
        <a href="https://t.me/" target="_blank"><img src="/images/telegram.png" />Telegram</a>
        <a href="https://instagram.com" target="_blank"><img src="/images/insta.png" />Instagram</a>
        <a href="https://twitter.com" target="_blank"><img src="/images/twitter.png" />Twitter</a>
      </div>

      <div class="logo">🎂 <span>Sprinkle Bakery</span></div>

      <div class="header-right">
        <router-link to="/cart" class="cart-button">🛒 Cart ({{ cartItemCount }})</router-link>
      </div>
    </div>

    
    <div class="search-bar">
      <img src="/images/iconsbar.png" class="search-icon" />
      <input
        type="text"
        v-model="searchQuery"
        placeholder="Search for cakes, cookies, and more..."
      />
    </div>

 
    <h2 class="menu-title">Explore Our Menu 🍪</h2>

    <div class="horizontal-list">
      <div
        v-for="item in filteredProducts"
        :key="item.name"
        class="menu-item-horizontal"
      >
        <img :src="item.image" :alt="item.name" />
        <div class="item-info">
          <h3>{{ item.name }}</h3>
          <p class="description">{{ item.description }}</p>
          <div class="item-footer">
            <span class="price">₹{{ item.price }}</span>
            <button @click="addToCart(item)" class="add-btn">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import products from '@/data/product.json';

export default {
  name: 'MenuPage',
  data() {
    return {
      searchQuery: '',
      products
    };
  },
  computed: {
    ...mapGetters(['cartItemCount']),
    filteredProducts() {
      return this.products.filter(p =>
        p.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  },
  methods: {
    ...mapMutations(['ADD_TO_CART']),
    addToCart(item) {
      this.ADD_TO_CART(item);
    }
  }
};
</script>

<style scoped>
.menu-page {
  background: #fff0f5;
  min-height: 100vh;
  font-family: 'Segoe UI', sans-serif;
  color: #c71585;
  padding-bottom: 40px;
}


.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #ffe4ec;
  padding: 15px 20px;
  border-bottom: 2px solid #f8cdd9;
  flex-wrap: wrap;
  position: relative;
}
.socials {
  display: flex;
  gap: 12px;
}
.socials a {
  color: #c71585;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 5px;
}
.socials img {
  width: 16px;
  height: 16px;
}
.logo {
  font-size: 26px;
  font-weight: bold;
  font-family: 'Georgia', serif;
  color: #c71585;
  text-align: center;
  flex: 1;
}
.header-right {
  display: flex;
  align-items: center;
}
.cart-button {
  background: #ff69b4;
  color: white;
  padding: 8px 14px;
  border-radius: 20px;
  text-decoration: none;
  font-weight: bold;
  font-size: 14px;
}
.cart-button:hover {
  background: #d63384;
}

.search-bar {
  display: flex;
  align-items: center;
  margin: 20px auto;
  max-width: 320px;
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


.menu-title {
  text-align: center;
  font-size: 24px;
  margin-top: 10px;
  font-weight: bold;
}


.horizontal-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
}
.menu-item-horizontal {
  display: flex;
  background: #fff0f6;
  border: 2px solid #ffc0cb;
  border-radius: 12px;
  padding: 15px;
  align-items: center;
  box-shadow: 0 3px 6px rgba(255, 182, 193, 0.3);
}
.menu-item-horizontal img {
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 10px;
  margin-right: 20px;
}
.item-info {
  flex: 1;
}
.item-info h3 {
  margin: 0;
  font-size: 18px;
  color: #d63384;
}
.description {
  font-size: 14px;
  color: #6e3255;
  margin: 6px 0;
}
.item-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.price {
  font-weight: bold;
  color: #b03060;
}
.add-btn {
  background: #ffe4ec;
  border: none;
  border-radius: 20px;
  padding: 6px 12px;
  font-size: 14px;
  font-weight: bold;
  color: #c71585;
  cursor: pointer;
}
.add-btn:hover {
  background: #ffb6c1;
}


@media (max-width: 768px) {
  .header {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  .logo {
    margin: 10px 0;
  }
}
</style>
