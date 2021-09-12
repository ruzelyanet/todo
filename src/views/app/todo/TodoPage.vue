<template>
  <div>
    
    <div class="h4">{{ data.title }}</div>

    <div>
      {{ data.date }} <small><strong>{{ data.time }}</strong></small>
    </div>    

    
    <div>{{ data.type }}</div>

    <div>{{ data.deskription }}</div>
  </div>
</template>

<script>
import { getTodo, putTodo} from '@/service'

export default ({  
  props: {
    id: String | Number
  },

  data() {
    return {
      process: true,
      data: {}
    }
  },

  async created() {
    this.process = true
    await getTodo({id: this.id}).then(res => {
      this.data = res.data[0]
      this.process = false
    })    
  }


})
</script>
