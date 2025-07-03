<template>
  <div id="app">
    <HeaderPage />

    <main class="main-content">
      <router-view /> 
    </main>

    <FooterPage /> 
  </div>
</template>

<script>
import HeaderPage from './components/HeaderPage.vue';    
import FooterPage from './components/FooterPage.vue';     

export default {
  components: {
    HeaderPage,
    FooterPage
  }
};
</script>

<style>

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}


.main-content {
  flex: 1;
  margin-top: 80px; 
}
</style>
