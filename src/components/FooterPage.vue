<template>
  <footer class="footer">
    <div class="footer-content">
      <p>© {{ currentYear }} Sprinkle Bakery. All rights reserved.</p>
      <div class="footer-links">
        <router-link to="/">Home</router-link>
        <router-link to="/menu">Menu</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/contact">Contact</router-link>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterBar",
  computed: {
    currentYear() {
      return new Date().getFullYear();
    },
  },
};
</script>

<style scoped>
.footer {
  background-color: #ffe4ec;
  border-top: 2px solid #f8cdd9;
  text-align: center;
  padding: 20px;
  margin-top: 40px;
  color: #c71585;
  font-family: "Segoe UI", sans-serif;
}
.footer-links {
  margin-top: 10px;
  display: flex;
  justify-content: center;
  gap: 20px;
}
.footer-links a {
  text-decoration: none;
  color: #c71585;
  font-weight: 600;
}
.footer-links a:hover {
  color: #ff69b4;
}
</style>
