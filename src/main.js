import { createApp } from 'vue'
import { router } from './router';
import Root from './Root.vue'
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';
import 'primeicons/primeicons.css';
import './style.css'
import './reset.css'

const app = createApp(Root);

app.use(router);
app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});

app.mount('#app')
