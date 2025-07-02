<template>
  <div>
   <MainPage/>
   <router-view/>
   <FooterPage/>
  </div>
</template>

<script>

import MainPage from './components/MainPage.vue'
import FooterPage from './components/FooterPage.vue';

export default {
  components: { 
    MainPage,
    FooterPage,
  },
}
</script>
