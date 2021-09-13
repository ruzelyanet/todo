<template>
  <div>

    <todo-form :data="data" @todoFormSubmit="submit" />

  </div>
</template>

<script>
import TodoForm from './TodoForm.vue'
import { postTodo} from '@/service'

export default ({    
  components: {
    "todo-form": TodoForm
  },

  data() {
    return {      
      data: {}
    }
  },

  methods: {
    async submit() {    
      await postTodo(this.data).then(() => {
        this.$notify("success", 'Create were successful ', '', {
					duration: 3000,
					permanent: false
				});
      }).then(() => {
        this.$router.replace({name: 'todo'})
      })
    }
  }


})
</script>
