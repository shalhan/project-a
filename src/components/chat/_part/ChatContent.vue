<template>
	<div class="chat-wrapper">
		<div class="chat-content">
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
			</div><br>
			<div class="bubble-wrapper left">
				<div class="bubble-img">
					<img src="../../../assets/logo.png" class="img-round">			
				</div>
				<div class="bubble-content">
					Coba kalau kata2nya panjangya gimana hasilnya kira2 huftt. panjanging lagi hufhuhuf
				</div>
				<div class="bubble-meta">
					<span>1 day</span>
				</div>
			</div><br>
			<div class="bubble-wrapper me right">
				<div class="bubble-content">
					Kamu ngomong apasih aku gak paham, ngeselin deh
				</div>
				<div class="bubble-meta">
					<span>1 day</span>
				</div>
			</div><br>
			<div class="bubble-wrapper me right">
				<div class="bubble-content">
					Test dikit ah kenapa
				</div>
				<div class="bubble-meta">
					<span>1 day</span>
				</div>
			</div><br>
		</div>
		<div class="chat-form">
			<input type="text" class="form-input">
			<button type="submit" class="btn-xs btn-primary"><i class="fa fa-location-arrow" aria-hidden="true"></i></button>
		</div>
	</div>
</template>
<script>
	export default{
		props: ['selected_chat'],
		name: 'Chat-Content'
	}
</script>
<style lang="scss" scoped>
  @import '../../../assets/style/scss/variable.scss';

 //chat
  .chat-wrapper{
    background-color: $white;
    min-height: $fullHeight; 
    overflow-y: scroll;
    border-radius: 8px;
    position: relative;
    padding-bottom: 10px;
  }
  .chat-content{
    padding: 10px;
  }
  .bubble-wrapper{
    width: -webkit-fit-content;
    width: -moz-fit-content;
    width: fit-content;
    padding: 10px;
    display: flex;
    &.left{
      float: left;
    }
    &.right{
      float: right;
      flex-direction: row-reverse;
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
  .chat-form{
    position: absolute;
    width: 100%;
    bottom: 0;
    display: flex;
    padding: 10px;
    background-color: #E0E0E0;
  }
</style>
