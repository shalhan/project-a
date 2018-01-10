<template>
  <div v-if="!isLoading">
    <h1>{{ msg }}</h1>
  </div>
  <div v-else>
    <spinner></spinner>
  </div>
</template>

<script>
export default {
  name: 'Question',
  data () {
    return {
      msg: 'This is question page',
      isLoading: true
    }
  },
  mounted(){
    setTimeout(()=>{
      this.isLoading = false;
    },3000);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
