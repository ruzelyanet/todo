﻿<template>
  <div>

    <b-skeleton-wrapper :loading="process">
      <template #loading>
        <div class="py-2">
          <b-skeleton width="80%" />
        </div>

        <div class="py-2">
          <b-skeleton width="20%" />
        </div>

        <div class="py-2">
          <b-skeleton />
          <b-skeleton width="80%" />
          <b-skeleton width="10%" />
        </div>

        <div class="py-2">
          <b-skeleton type="button" class="mx-auto" />
        </div>
        
      </template>

      <div v-if="!process">
        <div>
          <strong><small>{{ data.date }}</small></strong>
        </div>

        <div class="h4 mb-4">{{ data.title }} <sup><small>{{ data.time }}</small></sup></div>

        <c-tag class="c-tag-checked">{{ data.type }}</c-tag>
      
        <div class="mb-3">{{ data.deskription }}</div>

        <div class="text-center">
          <b-button variant="outline-success" pill size="lg" class="btn-w-md" :to="{name: 'todo-edit', params: {id: data.id}}">Edit</b-button>
        </div>
      </div>

    </b-skeleton-wrapper>      
  </div>
</template>

<script>
import { getTodo} from '@/service'
import Tag from '@/components/Tag/Tag'

export default ({  
  components: {
    'c-tag': Tag
  },

  props: {
    id: String | Number
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
  }


})
</script>
