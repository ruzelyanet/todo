<template>
  <div>    
    <div class="mb-3">
      <c-search @input="searchTodo" />
    </div>

    <todo-list :list="filteredList" v-if="!process" />
    
  </div>
</template>

<script>
import List from '@/components/todo/List'
import Search from '@/components/search/Search'

import { getTodo, putTodo} from '@/service'

import { eventBus } from '@/main.js'

export default ({
  name: 'todo',

  components: {
    'todo-list': List,
    'c-search': Search
  },
  
  data() {
    return {
      todo: null,            
      process: true,
      filteredList: null
    }
  },  

  computed: {
    data() {
      return {
        todoList: null,        
      }
    }
  },
  
  methods: {
    async getList() {
      await getTodo().then(res => {        
        this.todo = res.data
        this.process = false
      })
    },    

    searchTodo(title) {     
      const strtSearch = title.toLowerCase()

      this.filteredList = this.todo.filter(el => {
        const itemTitle = el.title.toLowerCase()
        return ~itemTitle.indexOf(strtSearch)
      })      
    }
  },

  async created() {    
    await this.getList().then(() => {
      this.filteredList = this.todo
    })

    

    eventBus.$on('switchDoneTodo', async data => {
      await putTodo({
        id: data.id,
        done: !data.done
      }).then((res) => {
        data.done = !data.done
      })      
    })    

  }

})
</script>
