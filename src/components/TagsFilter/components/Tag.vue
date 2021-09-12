<template>
  <div class="c-tag" v-on:click="clickItem" :class="[modifier]">    
    <slot />
  </div>
</template>

<script>

export default {
  props: {
    variant: {
      type: String
    }
  },
  
  data() {
    return {
    }
  },

  computed: {
    modifier() {
      const arr = ['primary', 'warning', 'light', 'danger', 'purple', 'success'];
      return this.variant && arr.includes(this.variant) ? `c-tag-${this.variant}`: ''
    }
  }, 

  methods: {
    clickItem() {
      this.$emit('clickTag')
    },
  }
}
</script>