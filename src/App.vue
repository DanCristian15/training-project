<template>
    <div>
      <nav class="navbar">
        <router-link class="navbar-links" :to="{ name: 'Home'}" tag="li" exact active-class="active">
          <a>Main</a>
        </router-link>
        <router-link class="navbar-links" :to="{ name: 'ItemsList' }" tag="li" exact exact-class="active">
          <a>Items</a>
        </router-link>
      </nav>
      <router-view ></router-view>
  </div>
</template>

<script>
  export default { }
</script>

<style>
.navbar {
    background-color: rgb(235, 229, 229);
    top: 0;
    position: fixed;
    width: 100%;
    border-bottom: 1px solid black
  }

  .navbar-links {
    padding-bottom: 10px;
    padding-top: 10px;
    display: inline-block;
  }

  .navbar-links a {
    text-decoration: none;
    letter-spacing: 2px;
    font-size: 24px;
    padding: 10px 30px 10px 30px;
    color: rgb(148, 94, 12);
  }

  .navbar-links a:hover{
    background-color: rgb(131, 129, 127);
    color: white;
  }

  .content {
    margin: 60px 20px 0 20px;
  }

  body {
    margin: 0px;
  }
</style>

