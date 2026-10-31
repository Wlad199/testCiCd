<template>
	<h1>This is test CI/CD</h1>
	<p>{{ a }}</p>
	<p>This is bug</p>
	<div class="container">
		<div class="text">{{ message }}</div>
		<p>
			<input v-model="message" type="text" placeholder="Enter text">
		</p>
	</div>
</template>

<script setup lang='ts'>
const message = ref('')

const a = 50;
const b = 150;

console.log(a)



</script>

<style scoped lang='scss'>
.container {
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100vh;
	flex-direction: column;
}

.text {
	font-size: 50px;
	color: red;
}
</style>