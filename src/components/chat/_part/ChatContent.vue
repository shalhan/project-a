<template>
	<div class="chat-wrapper">
		<div class="chat-header">
			<span>Shalhan</span>
			<span class="text-right pointer font-blur" @click="leaveChat" data-toggle="tooltip" title="Leave chat"><i class="fa fa-sign-out" aria-hidden="true"></i></span>
		</div>
		<ul class="chat-content">
			<li class="chat-list">
				<div class="bubble-wrapper left">
					<div class="bubble-img">
						<img src="../../../assets/logo.png" class="img-round">			
					</div>
					<div class="bubble-content">
						Halo yang disana
					</div>
					<div class="bubble-meta">
						<span>2 days</span>
					</div>
				</div>
			</li>
			<li class="chat-list">
				<div class="bubble-wrapper">
					<div class="bubble-img">
						<img src="../../../assets/logo.png" class="img-round">			
					</div>
					<div class="bubble-content">
						Coba kalau kata2nya panjangya gimana hasilnya kira2 huftt. panjanging lagi hufhuhuf
					</div>
					<div class="bubble-meta">
						<span>1 day</span>
					</div>
				</div>
			</li>
			<li class="chat-list">
				<div class="bubble-wrapper me right">
					<div class="bubble-content">
						Kamu ngomong apasih aku gak paham, ngeselin deh
					</div>
					<div class="bubble-meta">
						<span>1 day</span>
					</div>
				</div>
			</li>
			<li class="chat-list">
				<div class="bubble-wrapper me right">
					<div class="bubble-content">
						Test dikit ah kenapa
					</div>
					<div class="bubble-meta">
						<span>1 day</span>
					</div>
				</div>
			</li>
			<li class="chat-list">
				<div class="bubble-wrapper">
					<div class="bubble-img">
						<img src="../../../assets/logo.png" class="img-round">			
					</div>
					<div class="bubble-content">
						Halo yang disana
					</div>
					<div class="bubble-meta">
						<span>2 days</span>
					</div>
				</div>
			</li>
		</ul>
		<div class="chat-form">
			<input type="text" class="form-input" placeholder="Type a message here">
			<button type="submit" class="btn-xs btn-primary"><i class="fa fa-location-arrow" aria-hidden="true"></i></button>
		</div>
	</div>
</template>
<script>
	export default{
		props: ['selected_chat'],
		name: 'Chat-Content',
		methods: {
			leaveChat: function(){
				this.$bus.$emit('setConfirmation', "Are you sure want to leave this chat? You can't go back after leave the chat session", 'Sure, go on!');
			}
		}
	}
</script>
<style lang="scss" scoped>
  @import '../../../assets/style/scss/variable.scss';

 //chat
  .chat-wrapper{
    background-color: $white;
    height: $fullHeight; 
    position: relative;
    padding-bottom: 10px;
    .chat-content{
    	padding: 55px 10px 0;
    	height: 90%;
    	overflow-y: auto;    
    	.chat-list{
    		width: 100%;
    	}
  	}
	.chat-header{
	    padding: 10px;
	  	background-color: $listHover;
	  	position: absolute;
	    width: 100%;
	  	box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
	    -webkit-box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
	    -moz-box-shadow:0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
	}
	 .chat-form{
	    position: absolute;
	    display: flex;
	    width: 100%;
	    bottom: 0;
	    padding: 10px;
	    background-color: $listHover;
	       box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
	    -webkit-box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
	    -moz-box-shadow:0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
	  }
  }

  .bubble-wrapper{
    width: -webkit-fit-content;
    width: -moz-fit-content;
    width: 100%;
    padding: 10px;
    display: flex;
    &.right{
      float: right;
      flex-direction: row-reverse;
      clear: both;
    }

    .bubble-img{
      width: 35px;
      max-height: 35px;
      min-width: 35px;
      margin-right: 10px;
      border-radius: 100%;
      background-color: #9E9E9E;
    }

    .bubble-content{
      background-color: $accentColor;
      padding: 10px;
      border-radius: 10px;
      font-size: 0.8em;
      color: $fontBlur;
      max-width: 75%;
    }
    .bubble-meta{
      margin-left: 10px;
      color: $fontBlur;
      font-size: 0.7em;
    }
    &.me{
      .bubble-content{
        background-color: $bubbleContentMe;
      }
      .bubble-meta{
        margin-left: 0;
        margin-right: 10px;
      }
    }
  }  
</style>
