<template>
	<div class="bouncing"></div>
</template>

<script>
	export default{
		name: 'Spinner',
	}
</script>

<style scoped>
	.bouncing {
	  width: 25px;
	  height: 25px;
	  border-radius: 100%;
	  position: absolute;
	  left: 50%;
	  top: 50%;
	  background-color: #FFEE58;
	  animation: bounce 500ms alternate infinite ease;
	}

	@keyframes bounce {
	  0% {
	    top: 50% + 30px;
	    height: 50% + 5px;
	    border-radius: 60px 60px 20px 20px;
	    transform: scaleX(2);
	  }
	  35% {
	    height: 50% + 15px;
	    border-radius: 50%;
	    transform: scaleX(1);
	  }
	  100% {
	    top: 45%;
	  }
	}
</style>