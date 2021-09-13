<template>
  <div>

    <todo-form :data="data" @todoFormSubmit="submit" />

  </div>
</template>

<script>
import TodoForm from './TodoForm.vue'
import { getTodo, putTodo} from '@/service'

export default ({  
  props: {
    id: String | Number
  },

  components: {
    "todo-form": TodoForm
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
  },

  methods: {
    async submit() {    
      await putTodo({
        id: this.data.id,
        ...this.data
      }).then(() => {
        this.$notify("success", 'Сhanges were successful ', '', {
					duration: 3000,
					permanent: false
				});
      })
    }
  }


})
</script>
