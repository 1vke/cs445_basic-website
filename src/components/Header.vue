<script setup>
import { ref } from "vue";
import Menubar from 'primevue/menubar';

const items = ref([
    {
        label: 'Home',
        icon: 'pi pi-home',
        route: '/'
    },
    {
        label: 'About',
        icon: 'pi pi-star',
        route: '/about'
    }
]);
</script>

<template>
	<Menubar class="header" :model="items">
		<template #item="{ item, props }">
				<router-link v-if="item.route" v-slot="{ href, navigate, isExactActive }" :to="item.route" custom>
					<a :href="href" v-bind="props.action" @click="navigate" :class="{ 'active-route': isExactActive }">
						<span :class="item.icon" />
						<span class="ml-2">{{ item.label }}</span>
					</a>
				</router-link>
				<a v-else :href="item.url" :target="item.target" v-bind="props.action">
					<span :class="item.icon" />
					<span class="ml-2">{{ item.label }}</span>
				</a>
			</template>
	</Menubar>
</template>

<style scoped>
.header {
	margin: 1rem 0;
}
a, a span {
    transition: background-color 0.3s ease, color 0.3s ease;
}
.active-route {
    color: var(--p-primary-color);
    background-color: var(--p-menubar-item-focus-background, var(--p-content-hover-background));
    border-radius: var(--p-menubar-base-item-border-radius);
}
.active-route span {
    color: var(--p-primary-color);
}
</style>
