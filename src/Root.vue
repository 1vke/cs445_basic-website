<script setup>
import Header from './components/Header.vue';
</script>

<template>
	<div class="layout">
		<Header />
		<main class="content">
		<router-view></router-view>
		</main>
	</div>
</template>

<style scoped>
.layout {
	display: flex;
	flex-direction: column;
	min-height: 100vh;
}
.content {
	flex: 1;
	padding: 1rem;
}
</style>
