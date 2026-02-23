<template>
	<div class="gallery">
		<h1>Cyber Security & Technology Gallery</h1>
		<p>A visual representation of digital infrastructure, security concepts, and modern technology.</p>
		<div class="image-grid">
			<img v-for="(img, index) in images" :key="index" :src="img.src" :alt="img.alt" loading="lazy" />
		</div>
	</div>
</template>

<script setup>
const images = [
	{ src: 'https://picsum.photos/256/144?random=1', alt: 'Tech representation 1' },
	{ src: 'https://picsum.photos/320/180?random=2', alt: 'Tech representation 2' },
	{ src: 'https://picsum.photos/384/216?random=3', alt: 'Tech representation 3' },
	{ src: 'https://picsum.photos/400/225?random=4', alt: 'Tech representation 4' },
	{ src: 'https://picsum.photos/426/240?random=5', alt: 'Tech representation 5' },
	{ src: 'https://picsum.photos/480/270?random=6', alt: 'Tech representation 6' },
	{ src: 'https://picsum.photos/512/288?random=7', alt: 'Tech representation 7' },
	{ src: 'https://picsum.photos/640/360?random=8', alt: 'Tech representation 8' },
	{ src: 'https://picsum.photos/300/168?random=9', alt: 'Tech representation 9' },
	{ src: 'https://picsum.photos/350/196?random=10', alt: 'Tech representation 10' },
	{ src: 'https://picsum.photos/360/202?random=11', alt: 'Tech representation 11' },
	{ src: 'https://picsum.photos/450/253?random=12', alt: 'Tech representation 12' }
];
</script>

<style scoped>
.gallery {
	padding: 2rem;
}
.gallery h1 {
	color: var(--p-primary-color);
}
.gallery p {
	margin-bottom: 2rem;
	color: var(--p-text-muted-color, var(--p-text-color));
}
.image-grid {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
	gap: 1.5rem;
}
.image-grid img {
	width: 100%;
	height: auto;
	border-radius: 8px;
	box-shadow: 0 4px 6px rgba(0,0,0,0.1);
	transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.image-grid img:hover {
	transform: translateY(-5px);
	box-shadow: 0 8px 15px rgba(0,0,0,0.15);
}
</style>
