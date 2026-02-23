<template>
	<div class="contact">
		<h1>Contact Our Security Team</h1>
		<p>Have questions about protecting your digital assets or need to report an incident? Reach out to us.</p>
		<form @submit.prevent="submitForm" class="contact-form">
			<div class="form-group">
				<label for="name">Name</label>
				<input type="text" id="name" v-model="form.name" required placeholder="John Doe" />
			</div>
			<div class="form-group">
				<label for="email">Email</label>
				<input type="email" id="email" v-model="form.email" required placeholder="john@example.com" />
			</div>
			<div class="form-group">
				<label for="subject">Subject</label>
				<select id="subject" v-model="form.subject" required>
					<option disabled value="">Please select one</option>
					<option>General Inquiry</option>
					<option>Security Consultation</option>
					<option>Report an Incident</option>
				</select>
			</div>
			<div class="form-group">
				<label for="message">Message</label>
				<textarea id="message" v-model="form.message" required placeholder="How can we help you?"></textarea>
			</div>
			<button type="submit" class="submit-btn">Send Message</button>
		</form>
	</div>
</template>

<script setup>
import { reactive } from 'vue';

const form = reactive({
	name: '',
	email: '',
	subject: '',
	message: ''
});

const submitForm = () => {
	alert(`Thank you, ${form.name}! Your message regarding "${form.subject}" has been sent.`);
	// Reset form after submission
	form.name = '';
	form.email = '';
	form.subject = '';
	form.message = '';
};
</script>

<style scoped>
.contact {
	padding: 2rem;
	max-width: 600px;
	margin: 0 auto;
}
.contact h1 {
	color: var(--p-primary-color);
}
.contact p {
	margin-bottom: 2rem;
	color: var(--p-text-muted-color, var(--p-text-color));
}
.contact-form {
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
	background-color: var(--p-content-background);
	padding: 2rem;
	border-radius: 8px;
	border: 1px solid var(--p-content-border-color, rgba(255,255,255,0.1));
	box-shadow: 0 2px 4px rgba(0,0,0,0.2);
}
.form-group {
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
}
.form-group label {
	font-weight: bold;
	color: var(--p-text-color);
}
.form-group input, .form-group textarea, .form-group select {
	padding: 0.75rem;
	background-color: var(--p-form-field-background, transparent);
	color: var(--p-text-color);
	border: 1px solid var(--p-form-field-border-color, #ccc);
	border-radius: 4px;
	font-size: 1rem;
	font-family: inherit;
}
.form-group input::placeholder, .form-group textarea::placeholder {
    color: var(--p-text-muted-color, #888);
}
.form-group textarea {
	min-height: 150px;
	resize: vertical;
}
.submit-btn {
	padding: 0.75rem 1.5rem;
	background-color: var(--p-primary-color);
	color: var(--p-primary-contrast-color, white);
	border: none;
	border-radius: 4px;
	cursor: pointer;
	font-size: 1rem;
	font-weight: bold;
	transition: background-color 0.3s ease;
	margin-top: 0.5rem;
}
.submit-btn:hover {
	background-color: var(--p-primary-hover-color);
}
</style>
