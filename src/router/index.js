
import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/components/HomePage.vue'
import AboutPage from '@/components/AboutPage.vue'
import ContactPage from '@/components/ContactPage.vue'
import MenuPage from '@/components/MenuPage.vue'
import CartPage from '@/components/CartPage.vue'
const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/about', name: 'About', component: AboutPage },
  { path: '/contact', name: 'Contact', component: ContactPage },
  { path: '/menu', name: 'Menu', component: MenuPage },
  { path: '/cart', name: 'Cart', component: CartPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;