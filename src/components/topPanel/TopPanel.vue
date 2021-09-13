<template>  
  <div class="panel-top">    
    <div class="d-flex align-items-center">
      <b-button variant="link" @click="goBack" v-if="!isHome">
        <font-awesome-icon icon="arrow-left" />        
      </b-button>
      
      <div class="btn-logout ml-auto">
        <font-awesome-icon icon="user" />
      </div>
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
