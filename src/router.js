import { createWebHistory, createRouter } from "vue-router"

import Home from "./views/Home.vue"
import Gallery from "./views/Gallery.vue"
import Contact from "./views/Contact.vue"

const routes = [
  	{ path: "/", component: Home },
  	{ path: "/gallery", component: Gallery },
  	{ path: "/contact", component: Contact },
]

export const router = createRouter({
	history: createWebHistory(),
	routes,
})
