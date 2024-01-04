import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(),
  routes: [
    // Define a route for the /blog/ path
    { path: '/', component: home },
    { path: '/blog/', component: blogIndex },

    // Define a route for blog posts with a dynamic slug parameter
    { path: '/blog/:slug', component: blogContent }
  ]

  
})