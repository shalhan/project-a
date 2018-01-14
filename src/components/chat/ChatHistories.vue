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
							<div class="media-meta">
								<div class="media-img">
									<img src="../../assets/logo.png" class="img-round">
								</div>
								<div class="media-content">
									<h5>Shalhan</h5>
									<span class="font-blur font-sm">Hope can see</span>
								</div>
							</div>
							<div class="dropdown show">
								<a class="dropdown-toggle font-blur" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></a>
								<div class="dropdown-menu" aria-labelledby="dropdownMenuLink" id="dropdownMenu">
									<a class="dropdown-item" href="#">Report</a>
									<a class="dropdown-item" href="#">Delete</a>
								</div>
							</div>
						</div>
					</li>
					<li class="list-content pointer" :class="selected_chat == 2 ? 'active' : ''" @click="getChatHistories(2)">
						<div class="media">
							<div class="media-meta">

								<div class="media-img">
									<img src="../../assets/logo.png" class="img-round">
								</div>
								<div class="media-content">
									<h5>Radifan</h5>
									<span class="font-blur font-sm">Hey there, nice to meet you</span>
								</div>
							</div>
							<div class="dropdown show">
								<a class="dropdown-toggle font-blur" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></a>
								<div class="dropdown-menu" aria-labelledby="dropdownMenuLink" id="dropdownMenu">
									<a class="dropdown-item" href="#">Report</a>
									<a class="dropdown-item" href="#">Delete</a>
								</div>
							</div>
						</div>
					</li>
				</ul>
				<div class="list-header">
					Finished
				</div>
				<ul class="list-Wrapper">
					<li class="list-content pointer" :class="selected_chat == 3 ? 'active' : ''" @click="getChatHistories(3)">
						<div class="media">
							<div class="media-meta">
								<div class="media-img">
									<img src="../../assets/logo.png" class="img-round">
								</div>
								<div class="media-content">
									<h5>Shalhan</h5>
									<span class="font-blur font-sm">Hope can see you again next...</span>
								</div>
							</div>
							<div class="dropdown show">
								<a class="dropdown-toggle font-blur" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></a>
								<div class="dropdown-menu" aria-labelledby="dropdownMenuLink" id="dropdownMenu">
									<a class="dropdown-item" href="#">Report</a>
									<a class="dropdown-item" href="#">Delete</a>
								</div>
							</div>
						</div>
					</li>
					<li class="list-content pointer" :class="selected_chat == 4 ? 'active' : ''" @click="getChatHistories(4)" id="history-4">
						<div class="media">
							<div class="media-meta">
								<div class="media-img">
									<img src="../../assets/logo.png" class="img-round">
								</div>
								<div class="media-content">
									<h5>Radifan44</h5>
									<span class="font-blur font-sm">Hey there, nice to meet you</span>
								</div>
							</div>
							<div class="dropdown show">
								<a class="dropdown-toggle font-blur" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></a>
								<div class="dropdown-menu" aria-labelledby="dropdownMenuLink" id="dropdownMenu">
									<a class="dropdown-item" href="#">Report</a>
									<a class="dropdown-item" @click="showDeleteConfirmation(4)">Delete</a>
								</div>
							</div>
						</div>
					</li>
					<li class="list-content pointer" :class="selected_chat == 5 ? 'active' : ''" @click="getChatHistories(5)">
						<div class="media">
							<div class="media-meta">

								<div class="media-img">
									<img src="../../assets/logo.png" class="img-round">
								</div>
								<div class="media-content">
									<h5>Radifan</h5>
									<span class="font-blur font-sm">Hey there, nice to meet you</span>
								</div>
							</div>
							<div class="dropdown show">
								<a class="dropdown-toggle font-blur" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></a>
								<div class="dropdown-menu" aria-labelledby="dropdownMenuLink" id="dropdownMenu">
									<a class="dropdown-item" href="#">Report</a>
									<a class="dropdown-item" href="#">Delete</a>
								</div>
							</div>
						</div>
					</li>
					<li class="list-content pointer" :class="selected_chat == 6 ? 'active' : ''" @click="getChatHistories(6)">
						<div class="media">
							<div class="media-meta">

								<div class="media-img">
									<img src="../../assets/logo.png" class="img-round">
								</div>
								<div class="media-content">
									<h5>Radifan</h5>
									<span class="font-blur font-sm">Hey there, nice to meet you</span>
								</div>
							</div>
							<div class="dropdown show">
								<a class="dropdown-toggle font-blur" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></a>
								<div class="dropdown-menu" aria-labelledby="dropdownMenuLink" id="dropdownMenu">
									<a class="dropdown-item" href="#">Report</a>
									<a class="dropdown-item" href="#">Delete</a>
								</div>
							</div>
						</div>
					</li>
					<li class="list-content pointer" :class="selected_chat == 7 ? 'active' : ''" @click="getChatHistories(7)">
						<div class="media">
							<div class="media-meta">

								<div class="media-img">
									<img src="../../assets/logo.png" class="img-round">
								</div>
								<div class="media-content">
									<h5>Radifan</h5>
									<span class="font-blur font-sm">Hey there, nice to meet you</span>
								</div>
							</div>
							<div class="dropdown show">
								<a class="dropdown-toggle font-blur" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></a>
								<div class="dropdown-menu" aria-labelledby="dropdownMenuLink" id="dropdownMenu">
									<a class="dropdown-item" href="#">Report</a>
									<a class="dropdown-item" href="#">Delete</a>
								</div>
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
		mounted(){
			this.$bus.$on('deleteChatHistory', this.deleteChatHistory);
		},
		methods: {
			getChatHistories: function(id){
				this.$emit('updateSelectedChat', id);
			},
			deleteChatHistory: function(id){
				$('#history-'+id).addClass('animated fadeOutLeft');
				setTimeout(function() { $('#history-'+id).remove(); }, 1000);
			},
			showDeleteConfirmation: function(id){
				this.$bus.$emit('setConfirmation', 'Are you sure want to delete this chat history?', 'Yes', ['deleteChatHistory', id]);
			}
		}
	}
</script>
<style lang="scss" scoped>
  @import '../../assets/style/scss/variable.scss';
  .panel#chat-history{
  	height: $fullHeight;
  	overflow-y: hidden;
  	padding-right: 10px;
  	&:hover{
		overflow-y: overlay;    
	} 
  }
  .dropdown{
  	float: right;
  }
</style>