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
	<div class="card">
		<Menubar :model="items">
			<template #start>
				<span class="text-xl font-bold ml-2">Basic Website</span>
			</template>
			<template #item="{ item, props }">
				<router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
					<a :href="href" v-bind="props.action" @click="navigate">
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
	</div>
</template>

<style scoped>
.card {
    padding: 1rem;
}
</style>
