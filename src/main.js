import { createApp } from 'vue'
import { router } from './router';
import Root from './Root.vue'
import PrimeVue from 'primevue/config';
import './style.css'

const app = createApp(Root);

app.use(router)
app.use(PrimeVue);

app.mount('#app')
