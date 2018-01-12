<template>
	<div class="modal fade" id="confirmation" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
	  <div class="modal-dialog modal-dialog-centered" role="document">
	    <div class="modal-content">
	      <div class="modal-header">
	        <h5 class="modal-title" id="exampleModalLongTitle">Alert</h5>
	        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
	          <span aria-hidden="true">&times;</span>
	        </button>
	      </div>
	      <div class="modal-body">
	        {{msg}}
	      </div>
	      <div class="modal-footer">
	        <button type="button" class="btn btn-primary" @click="acceptConfirmation()" v-if="!isLoading">{{btn}}</button>
	        <button type="button" class="btn btn-primary" v-else>Loading...</button>
	      </div>
	    </div>
	  </div>
	</div>
</template>
<script>
	export default{
		name: 'confirmation',
		data(){
			return{
				msg: '',
				btn: '',
				listener: [],
				isLoading: false
			}
		},
		mounted(){
			this.$bus.$on('setConfirmation', this.setConfirmation);
		},
		methods: {
			setConfirmation: function(msg, btn = 'Yes', listener = [])
			{
				this.msg = msg;
				this.btn = btn;
				this.listener = listener;
				$('#confirmation').modal('show');
			},
			acceptConfirmation: function()
			{
				this.isLoading = true;
				this.$bus.$emit(this.listener[0], this.listener[1]);
				
				setTimeout(()=> {
					this.isLoading = false;
					$('#confirmation').modal('toggle');
				},1500);
			}
		}
	}
</script>