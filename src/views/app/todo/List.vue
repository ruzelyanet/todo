<template>
  <div>    
    <div class="mb-3">
      <c-search @input="searchTodo" />
    </div>
    
    <div class="filter">
      <c-tag v-for="(item, key) in filter" :key="key" @click="tagFilter(item)" :class="{'c-tag-checked': item.checked}">{{ item.type }}</c-tag>
    </div>

    <todo-list :list="filterList" v-if="!process" />
  </div>
</template>

<script>
import List from '@/components/todo/List'
import Search from '@/components/search/Search'
import { getTodo, putTodo, deleteTodo} from '@/service'
import { eventBus } from '@/main.js'
import Tag from "@/components/Tag/Tag"

export default ({
  name: 'todo',

  components: {
    'todo-list': List,
    'c-search': Search,
    'c-tag': Tag
  },
  
  data() {
    return {
      todo: [],            
      process: true,
      filterList: [],

      types: [], 

      filter: [{
        type: 'sport', 
        checked: false
      }, {
        type: 'home', 
        checked: false
      }, {
        type: 'work', 
        checked: false
      },{
        type: 'bussines', 
        checked: false
      }, {
        type: 'money', 
        checked: false
      }]
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
      this.types = []

      const strtSearch = title.toLowerCase()

      this.filterList = this.todo.filter(el => {
        const itemTitle = el.title.toLowerCase()
        return ~itemTitle.indexOf(strtSearch)
      })      
    }, 

    tagFilter(data) {
      data.checked = !data.checked

      if(data.checked) {
        this.types.push(data.type)
      } else {
        const index = this.types.indexOf(data.type)
        this.types.splice(index, 1)
      }      
      
      this.filterList = this.todo.filter(item => {                
        return this.types.length ? this.types.includes(item.type) : true
      }) 
    }
  },

  async created() {    
    await this.getList().then(() => {
      this.filterList = this.todo
    })

    eventBus.$on('switchDoneTodo', async data => {
      await putTodo({
        id: data.id,
        done: !data.done
      }).then((res) => {
        data.done = !data.done
      })
    })

    eventBus.$on('deleteTodo', async data => {
      await deleteTodo({
        id: data.id
      }).then(() => {
        this.todo.splice(this.todo.indexOf(data), 1)
      })      
    })
    
  }

})
</script>
