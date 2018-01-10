<template>
	<div class="panel" id="chat-history">
		<div class="panel-header">
			<h5></h5>
		</div>
		<div class="panel-content">
			<div class="list">
				<div class="list-header">
					On Going
				</div>
				<ul class="list-Wrapper">
					<li class="list-content pointer" :class="selected_chat == 1 ? 'active' : ''" @click="getChatHistories(1)">
						<div class="media">
							<div class="media-img">
								<img src="../../../assets/logo.png" class="img-round">
							</div>
							<div class="media-content">
								<h5>Shalhan</h5>
								<span class="font-blur">Hope can see you again next...</span>
							</div>
						</div>
					</li>
					<li class="list-content pointer" :class="selected_chat == 2 ? 'active' : ''" @click="getChatHistories(2)">
						<div class="media">
							<div class="media-img">
								<img src="../../../assets/logo.png" class="img-round">
							</div>
							<div class="media-content">
								<h5>Radifan</h5>
								<span class="font-blur">Hey there, nice to meet you</span>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		name: 'Chat-Histories',
		props: ['selected_chat'],
		methods: {
			getChatHistories: function(id){
				this.$emit('updateSelectedChat', id);
			}
		}
	}
</script>
<style lang="scss" scoped>
  @import '../../../assets/style/scss/variable.scss';
  .panel#chat-history{
  	min-height: $fullHeight;
  	overflow-y: scroll;
  }

</style>