<template>
  <div class="home">
    <ThreeBackground />


    <div class="header">

      <div class="header-left">
        <div class="socials">
          <a href="https://t.me/" target="_blank"><img src="/images/telegram.png" />Telegram</a>
          <a href="https://instagram.com" target="_blank"><img src="/images/insta.png" />Instagram</a>
          <a href="https://twitter.com" target="_blank"><img src="/images/twitter.png" />Twitter</a>
        </div>
      </div>


      <div class="header-center">
        <div class="logo">🎂 <span>Sprinkle Bakery</span></div>
      </div>


      <div class="header-right">
        <div class="search-bar">
          <img src="/images/iconsbar.png" class="search-icon" />
          <input type="text" v-model="searchQuery" placeholder="Search..." />
        </div>
        <router-link to="/cart" class="cart-button">
        🛒 Cart <span v-if="cartItemCount">({{ cartItemCount }})</span>
        </router-link>

      </div>
    </div>


    <h2 class="section-title">Our Delicious Creations 🍩</h2>
    <div class="grid-container">
      <div
        v-for="item in filteredItems"
        :key="item.name"
        class="product-card"
        @click="selectItem(item)"
      >
        <img :src="item.image" :alt="item.name" />
        <h3>{{ item.name }}</h3>
        <p class="description">{{ item.description }}</p>
        <p class="price">₹{{ item.price }}</p>
      </div>
    </div>

  
    <div v-if="selectedItem" class="popup-overlay" @click.self="closePopup">
      <div class="popup-content">
        <img :src="selectedItem.image" class="popup-image" />
        <h2>{{ selectedItem.name }}</h2>
        <p>{{ selectedItem.description }}</p>
        <p class="popup-price">₹{{ selectedItem.price }}</p>

        <div class="popup-buttons">
          <button class="btn-cart" @click="addToCart(selectedItem)">🛒 Add to Cart</button>
          <button class="btn-order" @click="orderNow(selectedItem)">🍰 Order Now</button>
        </div>

        <button class="close-btn" @click="closePopup">✖</button>
      </div>
    </div>
  </div>
</template>


<script>
import product from '@/data/product.json';
import ThreeBackground from './ThreeBackground.vue';
import { mapGetters, mapMutations } from 'vuex';

export default {
  name: 'HomePage',
  components: { ThreeBackground },
  data() {
    return {
      searchQuery: '',
      items: product,
      selectedItem: null
    };
  },
  computed: {
    ...mapGetters(['cartItems', 'cartItemCount']),
    filteredItems() {
      return this.items.filter(item =>
        item.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  },
  methods: {
    ...mapMutations(['ADD_TO_CART']),
    selectItem(item) {
      this.selectedItem = item;
    },
    closePopup() {
      this.selectedItem = null;
    },
    addToCart(item) {
      this.ADD_TO_CART(item);  
      this.closePopup();       
    },
    orderNow(item) {
      alert(`🍰 Order placed for: ${item.name}`);
    }
  }
};
</script>



<style scoped>
.home {
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
  gap: 10px;
}

.header-left,
.header-center,
.header-right {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.header-left {
  justify-content: flex-start;
}
.header-right {
  justify-content: flex-end;
  gap: 15px;
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


.cart-button {
  background-color: #ff69b4;
  color: white;
  padding: 8px 16px;
  border-radius: 20px;
  text-decoration: none;
  font-weight: bold;
  font-size: 14px;
  transition: background-color 0.3s ease;
}
.cart-button:hover {
  background-color: #d63384;
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
  cursor: pointer;
}
.product-card:hover {
  transform: translateY(-5px);
  transition: 0.2s ease;
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
.description {
  font-size: 14px;
  color: #7b4a3b;
}
.price {
  font-weight: bold;
  color: #b85c38;
  margin-top: 5px;
}


.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 182, 193, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}
.popup-content {
  background: #fff0f6;
  border: 2px solid #ffc0cb;
  border-radius: 16px;
  padding: 30px 20px;
  width: 90%;
  max-width: 400px;
  position: relative;
  text-align: center;
  box-shadow: 0 5px 15px rgba(204, 0, 102, 0.2);
}
.popup-image {
  width: 100%;
  height: 220px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 15px;
}
.popup-price {
  font-size: 18px;
  font-weight: bold;
  color: #b03060;
  margin-top: 10px;
}
.popup-buttons {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 20px;
}
.btn-cart,
.btn-order {
  padding: 8px 16px;
  font-weight: bold;
  border: none;
  border-radius: 20px;
  cursor: pointer;
}
.btn-cart {
  background: #ffd6e8;
  color: #c71585;
}
.btn-order {
  background: #ff69b4;
  color: white;
}
.close-btn {
  position: absolute;
  top: 10px;
  right: 12px;
  background: transparent;
  border: none;
  font-size: 18px;
  cursor: pointer;
  color: #d63384;
}


@media (max-width: 768px) {
  .header {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .header-left,
  .header-center,
  .header-right {
    justify-content: center;
    margin-bottom: 10px;
  }

  .search-bar {
    margin: 0;
  }
}


</style>
