<template>
  <div>

    <b-form @submit.prevent="submit">
      <b-form-group>
        <b-form-input v-model="data.title" type="text" />
      </b-form-group>

      <b-form-group>
        <b-form-input v-model="data.title" type="text" />
      </b-form-group>
      
      <b-form-group>        
        <b-form-datepicker id="example-datepicker" v-model="data.date" />
      </b-form-group>

      <b-form-group>
        <b-form-input v-model="data.time" type="text" />
      </b-form-group>

      <b-form-group>
        <b-form-select v-model="data.type" :options="types" />
      </b-form-group>

      <b-form-group>
        <b-form-textarea v-model="data.deskription" />
      </b-form-group>

      <div class="text-center">
        <b-button variant="success" class="btn-w-md" pill type="submit">Save</b-button>
      </div>
    </b-form>

  </div>
</template>

<script>
export default ({
  props: {
    data: Object
  },

  data() {
    return {
       types: [{
        value: 'sport', 
        text: 'sport'
      }, {
        value: 'home', 
        text: 'home'
      }, {
        value: 'work', 
        text: 'work'
      },{
        value: 'bussines', 
        text: 'bussines'
      }, {
        value: 'money', 
        text: 'money'
      }]
    }
  },

  methods: {
    submit() {
      this.$emit('todoFormSubmit', this.data)
    }
  }
})
</script>
