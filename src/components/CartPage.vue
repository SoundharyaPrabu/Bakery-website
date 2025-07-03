<template>
  <div class="cart-page">
    <h2>Your Cart 🛒</h2>

    <div v-if="cartItems.length > 0" class="cart-list">
      <div v-for="(item, index) in cartItems" :key="item.name + index" class="cart-item">
        <img :src="item.image" :alt="item.name" />
        <div class="cart-details">
          <h3>{{ item.name }}</h3>
          <p>{{ item.description }}</p>
          <p class="price">₹{{ item.price }}</p>

          <button class="remove-btn" @click="removeFromCart(item)">
            ✖ Remove
          </button>
        </div>
      </div>
    </div>

    <div v-else class="empty-cart">
      <p>Your cart is empty 🥺</p>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  name: 'CartPage',
  computed: {
    ...mapGetters(['cartItems'])
  },
  methods: {
    ...mapMutations(['REMOVE_FROM_CART']),
    removeFromCart(item) {
      this.REMOVE_FROM_CART(item);
    }
  }
};
</script>

<style scoped>
.cart-page {
  padding: 30px;
  background-color: #fff0f5;
  min-height: 100vh;
  font-family: 'Segoe UI', sans-serif;
  color: #c71585;
}

.cart-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.cart-item {
  display: flex;
  background: #fff0f6;
  border: 2px solid #ffc0cb;
  border-radius: 10px;
  padding: 15px;
  box-shadow: 0 4px 8px rgba(255, 192, 203, 0.3);
}

.cart-item img {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 8px;
  margin-right: 20px;
}

.cart-details {
  flex: 1;
}

.cart-details h3 {
  margin: 0;
  font-size: 18px;
  color: #d63384;
}

.cart-details p {
  margin: 4px 0;
  font-size: 14px;
  color: #7b4a3b;
}

.cart-details .price {
  font-weight: bold;
  color: #b85c38;
}

/* 🌸 Beautiful Remove Button Style */
.remove-btn {
  margin-top: 12px;
  padding: 8px 16px;
  background-color: #ffe6eb;
  color: #c71585;
  border: 1px solid #f8cdd9;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.remove-btn:hover {
  background-color: #ffc0cb;
  color: white;
  border-color: #ff69b4;
}

.empty-cart {
  text-align: center;
  font-size: 18px;
  margin-top: 50px;
}
</style>
