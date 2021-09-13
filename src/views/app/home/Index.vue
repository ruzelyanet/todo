<template>
  <div class="home">
    
    <router-link :to="{name: 'todo'}" class="btn btn-success btn-block">Todo <font-awesome-icon icon="list-ul" /></router-link>

  </div>
</template>

<script>
export default {
  name: 'Home' 
}
</script>
