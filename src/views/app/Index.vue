<template>
  <div class="app">
    <div class="container">
      <top-panel v-if="$route.name != 'profile'" />

      <router-view/>   
    </div>
  </div>
</template>


<script>
import TopPanel from '@/components/topPanel/TopPanel'
export default ({
  components: {
    "top-panel": TopPanel
  }
})
</script>
