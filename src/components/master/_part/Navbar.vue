<template>
	<nav class="navbar navbar-expand-lg navbar-dark navbar-primary" id="navbar">
	  <div class="container">
		  <a class="navbar-brand" href="#">Navbar</a>
		  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
		    <span class="navbar-toggler-icon"></span>
		  </button>

		 <!--  <form class="form-inline my-2 my-lg-0">
		      <search :suggestions="cities" :selection.sync="value"></search>
		  </form> -->

		  <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
		    <ul class="nav">
		    	<li class="nav-item">
					<router-link to="/" class="nav-link">Chat</router-link>	    
				</li>
				<li class="nav-item">
					<router-link to="/questions" class="nav-link">Question</router-link>	    
				</li>
				<li class="nav-item">
					<router-link to="/profile" class="nav-link">Profile</router-link>
				</li>
			</ul>
		  </div>
	  </div>
	</nav>
</template>
<script>
import Search from '../../global/Search.vue'
export default{
  components: { Search },
  data(){
	return{
 	 cities : [
	     'Bangalore','Chennai','Cochin',
	     'Delhi','Kolkata','Mumbai'
	 ],
	 value: ''
	}
  }
}
</script>
