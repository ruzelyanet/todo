<template>
  <div>        
    <div class="user-card">
      
      <div class="user-card-head">
        <top-panel />
        
        <b-skeleton-wrapper :loading="process">
          <template #loading>            
            <b-skeleton type="avatar" width="100px" height="100px" class="mx-auto mb-3" />
            <b-skeleton width="50%" class="mx-auto" />
          </template>

          <div v-if="!process">
            <div class="user-ava mb-3">
              <img src="../../../assets/img/ava.jpg" alt="">
            </div>
            <div class="user-name">
              {{ user.name }}
            </div>
          </div>
        </b-skeleton-wrapper>
      </div>

      <b-skeleton-wrapper :loading="process">
        <template #loading>
          <div class="pt-3">
            <div class="py-2">
              <b-skeleton width="50%" />
            </div>
            <div class="py-2">
              <b-skeleton width="80%" />
            </div>
            <div class="py-2">
              <b-skeleton width="40%" />
            </div>
          </div>
        </template>

        <div v-if="!process" class="user-info mb-4">
          <div class="user-info-item d-flex">
            <div class="user-info-icon"><font-awesome-icon icon="envelope"/></div> 
            <div>{{ user.email }}</div>
          </div>

          <div class="user-info-item d-flex">
            <div class="user-info-icon"><font-awesome-icon icon="hand-rock"/></div> 
            <div>{{ user.name }}</div>
          </div>        

          <div class="user-info-item d-flex">
            <div class="user-info-icon"><font-awesome-icon icon="birthday-cake"/></div> 
            <div>{{ user.birthday }}</div>
          </div>

          <div class="user-info-item d-flex">
            <div class="user-info-icon"><font-awesome-icon icon="search-location"/></div> 
            <div><i>{{ user.address }}</i></div>
          </div>

          <div class="user-info-item d-flex">
           <div class="user-info-icon"><font-awesome-icon icon="phone"/></div> 
           <div>{{ user.phone }}</div>
          </div>
        </div>
        <div class="text-center">
          <b-button variant="outline-secondary" pill class="btn-w-md" @click="logOut">Log out</b-button>
        </div>
      </b-skeleton-wrapper>
    </div>

  </div>
</template>

<script>
import { getUser } from '@/service'
import topPanel from '@/components/topPanel/TopPanel'

export default ({
  components: {
    'top-panel': topPanel
  },

  data() {
    return {
      process: true,
      id: localStorage.getItem('user'),
      user: null
    }
  },  

  async created() {
    await getUser(this.id).then(res => {
      this.user = res.data
      this.process = false
    })    
  },

  methods: {
    logOut() {
      localStorage.removeItem('jwt')
      localStorage.removeItem('user')
      this.$router.replace({name: 'login'})
    }
  }

})
</script>
