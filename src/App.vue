<template>
  <div id="app">
    <header>
      <navbar></navbar>
    </header>


    <section class="wrapper">
      <div class="container">
        <router-view/>
      </div>
    </section>

  
  </div>
</template>

<script>
import Navbar from './components/master/_part/Navbar.vue'

export default {
  /* eslint-disable */
  name: 'app',
  components: {
    Navbar
  }
}
</script>

<style lang="scss">
  @import 'assets/style/scss/variable.scss';
  body {
    background-color: $bgColor;
    letter-spacing: 1.5px;
    font-size: 87.5%;
    color: $darkFontColor;
    font-weight: 400;
  }
  //font
  h1{
    font-size: 2.4em;
  }
  h2{
    font-size: 2.1em;
  }
  h3{
    font-size: 1.8em;
  }
  h4{
    font-size: 1.4em;
  }
  h5{
    font-size: 1.1em;
  }
  .font-blur{
    font-size: 0.8em;
    color: $fontBlur;
  }
  #app {
    font-family: 'Source Sans Pro', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale; 
  }
  .pointer{
    cursor: pointer;
  }
  //navbar
  .navbar{
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    -webkit-box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    -moz-box-shadow:0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  }
  .navbar-primary{
    background-color: $white;
  }
  .nav-link{
    color: $darkFontColor;

    &:hover{
      color: $darkFontHover;
    }
  }
  //list
  ul{
    padding: 0;
    li{
      list-style: none;
    }
  }
  .list-Wrapper{
    margin-top: 20px;
    .list-content{
      margin-bottom: 3px;
      padding: 8px;
      border-radius: 8px;
      &.active{
        background-color: $listHover;
      }
      &:hover{
        background-color: $listHover;
      }
    }
  }
  //content
  .wrapper{
    margin-top: 20px;
  }
  //image
  .img-round{
    max-width: 100%;
    border-radius: 100%;
  }
  .media-img{
    width: 45px;
    margin-right: 20px;
    border-radius: 100%;
    background-color: #9E9E9E;
  }
 
  //form{
  input.form-input{
    width: 90%;
    border-radius: 10px;
    border: 1px solid #ddd;
    height: 35px;
    padding: 10px;
    margin-right: 10px;
    color: $fontBlur;
    &:focus{
       border: 1px solid $accentColor;
       outline: none;
    }
  }
  //button
  button.btn-primary{
    background-color: transparent;
    color: $darkFontColor;
    padding: 6px 12px;
    border: 0;
    border-radius: 10px;
    &:hover{
      background-color: $accentColor;
      color: $fontBlur;
    }
  }
  
  

</style>
