<template>
	<div class="panel" id="dictionary">
		<loading></loading>
		<div class="panel-header">
			<h5>My Dictionary</h5>
		</div>
		<div class="panel-content">
			<ul class="list-wrapper">
				<li class="list-content first" @dblclick="changeWord()" id="word1">
					<span v-if="!changeWordMode">{{word1}}</span>
					<span v-else><input type="text" class="form-input" v-model="word1" @keyup.enter="updateWord()"></span>
				</li>
				<li class="list-content second font-italic" id="meaning1" @dblclick="changeMeaning()">
					<span v-if="!changeMeaningMode">{{meaning1}}</span>
					<span v-else><input type="text" class="form-input" v-model="meaning1" @keyup.enter="updateMeaning()"></span>
				</li>
				<li class="list-content first">
					<span>{{word2}}</span>
				</li>
				<li class="list-content second font-italic">
					<span>{{meaning2}}</span>
				</li>
				<li class="list-content first">
					<span>{{word2}}</span>
				</li>
				<li class="list-content second font-italic">
					<span>{{meaning2}}</span>
				</li>
				<li class="list-content first">
					<span>{{word2}}</span>
				</li>
				<li class="list-content second font-italic">
					<span>{{meaning2}}</span>
				</li>
				<li class="list-content first">
					<span>{{word2}}</span>
				</li>
				<li class="list-content second font-italic" >
					<span >{{meaning1}}</span>
				</li>
				<li class="list-content first">
					<span>{{word2}}</span>
				</li>
				<li class="list-content second font-italic">
					<span>{{meaning2}}</span>
				</li>
			</ul>
		</div>
		<div class="panel-footer">
			<a href="#" class="float">
				<i class="fa fa-plus my-float"></i>
			</a>
		</div>
	</div>
</template>
<script>

	export default{
		name: 'dictionary',
		data(){
			return{
				changeWordMode: false,
				changeMeaningMode: false,
				word1: 'Hello world',
				meaning1: 'Halo dunia',
				word2: 'i hope you do understand',
				meaning2: 'semoga kamu mengerti'
			}
		},
		methods: {
			changeWord: function(){
				this.changeWordMode = true;
			},
			changeMeaning: function(){
				this.changeMeaningMode = true;
			},
			updateWord: function(){
				this.$bus.$emit('setLoadingScreen');
				setTimeout(()=>{
					this.changeWordMode = false;
					this.$bus.$emit('hideLoadingScreen');
				}, 1500);
			},
			updateMeaning: function(){
				this.changeMeaningMode = false;	
			}
		}
	}
</script>
<style lang="scss" scoped>
  @import '../../assets/style/scss/variable.scss';
  .panel#dictionary{
  	height: $fullHeight;
  	background-color: white;
  	border-radius: 10px;
  	padding: 10px;
  	position: relative;
  }
  .panel-header{
  	padding: 10px;
  }
  .panel-content{
  	overflow-y: hidden;  	
  	height: 82%;
  	padding-right: 10px;
  	&:hover{
  		overflow-y: overlay;
  	}
  }
  .panel-footer{
  	position: relative;
  }
  .list-content{
  	border-radius: 10px;
  	padding: 10px;
  }
  .list-content.first{
  	border: 1px solid $bubbleContentMe;
  }
  .list-content.second{
  	background-color: $bubbleContentMe;
  	color: $fontBlur;
  	margin-bottom: 10px;
  }
  .float{
		position:absolute;
		width:35px;
		height:35px;
		background-color:#0288D1;
		color:#FFF;
		left: 40%;
		border-radius:100%;
		text-align:center;
		box-shadow: 2px 2px 3px #999;
	}

	.my-float{
		margin-top:35%;
	}

</style>