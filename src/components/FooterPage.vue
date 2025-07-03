<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-section about">
        <h3>🎂 Sprinkle Bakery</h3>
        <p>Bringing sweetness to your life, one bite at a time. Freshly baked with love and care.</p>
      </div>

      <div class="footer-section links">
        <h4>Quick Links</h4>
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/menu">Menu</router-link></li>
          <li><router-link to="/about">About</router-link></li>
          <li><router-link to="/contact">Contact</router-link></li>
        </ul>
      </div>

      <div class="footer-section contact">
        <h4>Get in Touch</h4>
        <p>Email: hello@sprinklebakery.com</p>
        <p>Phone: +91 98765 43210</p>
        <div class="socials">
          <a href="https://instagram.com" target="_blank"><img src="/images/insta.png" alt="Instagram" /></a>
          <a href="https://twitter.com" target="_blank"><img src="/images/twitter.png" alt="Twitter" /></a>
          <a href="https://t.me/" target="_blank"><img src="/images/telegram.png" alt="Telegram" /></a>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <p>&copy; 2025 Sprinkle Bakery. All rights reserved.</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #ffe4ec;
  color: #c71585;
  font-family: 'Segoe UI', sans-serif;
  padding: 40px 20px 20px;
  border-top: 3px solid #ffc0cb;
  position: relative;
  bottom: 0;
  width: 100%;
}

.footer-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
}

.footer-section {
  flex: 1;
  min-width: 250px;
}

.footer-section h3,
.footer-section h4 {
  font-size: 20px;
  margin-bottom: 10px;
  color: #b03060;
}

.footer-section p,
.footer-section li,
.footer-bottom {
  font-size: 14px;
  color: #7b4a3b;
}

.footer-section ul {
  list-style: none;
  padding: 0;
}

.footer-section li {
  margin-bottom: 8px;
}

.footer-section li a {
  text-decoration: none;
  color: #c71585;
  transition: color 0.3s ease;
}

.footer-section li a:hover {
  color: #ff69b4;
}

.socials {
  display: flex;
  gap: 12px;
  margin-top: 10px;
}

.socials img {
  width: 22px;
  height: 22px;
  transition: transform 0.2s ease;
}
.socials img:hover {
  transform: scale(1.2);
}

.footer-bottom {
  text-align: center;
  margin-top: 25px;
  font-size: 13px;
  color: #a0526d;
}
</style>
