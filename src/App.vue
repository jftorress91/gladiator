<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/informationApp">Information</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
nav {
  padding: 15px;
  background-color: #333;
}
nav a {
  color: white;
  margin: 0 10px;
  text-decoration: none;
}
nav a.router-link-exact-active {
  font-weight: bold;
}
</style>
