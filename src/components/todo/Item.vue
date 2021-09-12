<template>
  <div class="todo-item d-flex align-items-center">    
    <div class="todo-btn-done">
      <b-button :variant="doneVariant" size="xs" squared @click="switchDone">
        <font-awesome-icon icon="check" />
      </b-button>
    </div>

    <div>
      <div class="todo-date">
        {{ data.date | moment('ll') }}
      </div>
      <div class="todo-title">        
        {{ data.title }}
      </div>
    </div>

    <div class="todo-time ml-auto">
      {{ data.time }}
    </div>
      
  </div>
</template>

<script>
import { eventBus } from '@/main.js'

export default ({
  props: {
    data: {
      type: Object
    }
  },  

  computed: {
    doneVariant() {
      return this.data.done ? 'outline-success' : 'outline-secondary'
    }
  },

  methods: {
    switchDone() {      
      eventBus.$emit('switchDoneTodo', this.data)
    }
  }

})
</script>
