<template>
  <div class="search">
    <b-form-input type="text" v-model="search" @input="hotAction" placeholder="Search item" />
  </div>
</template>

<script>
export default ({
  name: "search",

  data() {
    return {
      search: null
    }
  },

  methods: {
    hotAction() {
      this.$emit('input', this.search)
    }
  }

})
</script>
