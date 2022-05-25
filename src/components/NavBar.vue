<template>
  <nav class="navbar navbar-dark bg-success navbar-expand-sm">
    <div class="container">
     <router-link to="/" class="navbar-brand"> Vuex </router-link>
     <div class="collapse navbar-collapse">
       <ul class="navbar-nav">
         <li class="nav-item">
           <router-link class="navbar-link" to="/ccounter"> CCounter </router-link>
         </li>
         <li class="nav-item">
           <router-link class="navbar-link" to="/eemployees"> EEmployees </router-link>
         </li>
         <li class="nav-item">
           <router-link class="navbar-link" to="/users"> User List </router-link>
         </li>
       </ul>
      </div>
    </div>
  </nav>
</template>>

<script>
export default {
  name: "NavBar"
}
</script>

<style scoped>

</style>