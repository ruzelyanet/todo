<template>  
  <div class="panel-top">    
    <div class="d-flex align-items-center">
      <b-button variant="link" @click="goBack" v-if="!isHome">
        <font-awesome-icon icon="arrow-left" />        
      </b-button>
      
      <router-link :to="{name: 'profile'}" class="btn btn-link ml-auto" v-if="$route.name != 'profile'">
        <font-awesome-icon icon="user"/>
      </router-link>
    </div>
  </div>
</template>

<script>
export default ({
  computed: {    
    isHome() {
      return this.$route.name === 'Home'
    }
  },

  methods: {    
    goBack() {      
      this.$router.go(-1)
    }
  }
})
</script>
