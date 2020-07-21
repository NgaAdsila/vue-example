<template>
  <div id="nav">
    <ul class="nav-links">
      <li key="home">
        <router-link to="/">Home</router-link>
      </li>
      <li v-for="destination in destinations" :key="destination.name">
        <router-link :to="{ name: 'TheNavigationDetail', params: { id: destination.id } }">{{ destination.name }}</router-link>
      </li>
    </ul>
  </div>
</template>
<script>
import store from "@/store"
export default {
  name: "TheNavigation",
  data() {
    return {
      destinations: store.destinations
    }
  }
};
</script>
<style scoped>
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  padding: 0 10px;
  text-decoration: none;
}

ul.nav-links {
  display: flex;
  justify-content: center;
  list-style: none;
}

#nav a.vue-router-app-active-class {
  color: #6988ec;
}
</style>
