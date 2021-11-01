<template>
    <div>
      <nav class="navbar">
        <router-link class="router-links" to='/' tag="li" exact active-class="active">
            <a>Main</a>
        </router-link>
        <router-link class="router-links" to='/ItemsList' tag="li" exact exact-class="active">
            <a>Items</a>
        </router-link>
      </nav>
    <div class="content">
      <h1>Project components</h1>
      <btn 
        :text="btnText" 
        :btn-height="100" 
        :btn-width="190"
        :dark="dark"
        @click="alertMethod( )">
        <p slot="left-inside"><font-awesome-icon icon="coffee" /></p>
        <p slot="right-inside">right slot</p>
      </btn>

      <btn 
        class="darkblue"
        :text="btnText" 
        :btn-height="100" 
        :btn-width="190"
        :dark="dark"
        @click="alertMethod( )">
        <p slot="left-inside"><font-awesome-icon icon="coffee" /></p>
        <p slot="right-inside">right slot</p>
      </btn>
      <router-view ></router-view>
    </div>
    
    
  </div>
</template>

<script>
  import Button from './Button.vue'
  import ItemsList from './ItemsList.vue'

  export default {
    data( ) {
      return {
        btnText: "click me",
        dark: true
      }
    },  
    components: {
      btn: Button
    },
    methods: {
      alertMethod( ) {
        alert( "alert" );
      }
    }
  }
</script>

<style>
  .darkblue .btn.dark {
  background-color: blue !important;
  color: white;
  }

  .btn.dark {
    background-color: black;
    color: white;
  }

  li {
    display: inline-block;
  }

  .router-links {
    padding-bottom: 10px;
    padding-top: 10px;
  }

  .router-links a {
    text-decoration: none;
    letter-spacing: 2px;
    font-size: 24px;
    padding: 10px 30px 10px 30px;
    color: rgb(148, 94, 12);
  }

  .router-links a:hover{
    background-color: rgb(131, 129, 127);
    color: white;
  }

  .navbar {
    background-color: rgb(235, 229, 229);
    top: 0;
    position: fixed;
    width: 100%;
    border-bottom: 1px solid black
  }

  .content {
    margin: 60px 20px 0 20px;
  }

  body {
    margin: 0px;
  }
</style>

