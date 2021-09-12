<template>
  <div>    
    <div class="d-flex flex-wrap">
      <c-tag
        v-for="(item, key) in props.options"
        :key="item.text+key"
        :class-list="['mark']"
        @clickTag="getDataTag(item)"
        :class="{'c-tag-checked': checkItem(item)}"
        :variant="variant">
        {{item.text}}
      </c-tag>
    </div>
  </div>
</template>

<script>
import Tag from "./components/Tag";

export default {
  components: {
    "c-tag": Tag,
  },

  props: {
    props: {
      type: Object
    },
    variant: {
      type: String
    }
  },  

  methods: {
    getDataTag(data) {
      if (this.props.filter.includes(data)) {
        this.props.filter.splice(this.props.filter.indexOf(data), 1);
      } else {
        this.props.filter.push(data);
      }
    },

    checkItem(item) {
      return this.props.filter.includes(item)
    },
  }

};
</script>