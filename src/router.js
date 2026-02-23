import { createMemoryHistory, createRouter } from "vue-router"

import Root from "./Root.vue"

const routes = [
  { path: "/", component: Root },
]

export const router = createRouter({
	history: createMemoryHistory(),
	routes,
})