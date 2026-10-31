<template>
	<div class="container">
		<div class="text">{{ message }}</div>
		<p>
			<input type="text" v-model="message" placeholder="Enter text">
		</p>
	</div>
</template>

<script setup lang='ts'>
const message = ref('')
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