<template>
  <header class="navbar">
    
    <nav class="nav-links">
      <router-link to="/" exact-active-class="active">Home</router-link>
      <router-link to="/menu" exact-active-class="active">Menu</router-link>
      <router-link to="/about" exact-active-class="active">About</router-link>
      <router-link to="/contact" exact-active-class="active">Contact</router-link>
    </nav>
  </header>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #ffe4ec;
  border-bottom: 2px solid #ffc0cb;
  padding: 15px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
}

.logo {
  font-size: 22px;
  font-weight: bold;
  color: #c71585;
  display: flex;
  align-items: center;
  gap: 6px;
}

.nav-links {
  display: flex;
  gap: 20px;
}

.nav-links a {
  color: #c71585;
  font-weight: 600;
  text-decoration: none;
  font-size: 16px;
}

.nav-links a:hover,
.nav-links .active {
  color: #ff69b4;
}
</style>
