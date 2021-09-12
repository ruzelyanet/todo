<template>
  <div class="todo">    
    
    <div v-if="list.length">
      <div v-for="(item, key) in list" :key="key" :data="item">
        <todo-item  :data="item" />
      </div>
    </div> 
    <div v-else class="text-center py-4">
      There is no such task 🙅‍♂️
    </div>
    
  </div>
</template>

<script>
import Item from './Item'
export default ({
  components: {
    todoItem: Item
  },

  props: {
    list: {
      type: Array
    }
  }
})
</script>
