<template>
  <div>
    {{msg}}
    <lte-pagination size="sm"
                    :totalCount="4003"
                    @page="onPage"></lte-pagination>
  </div>
</template>

<script>
  import LtePagination from '@/components/pagination.vue'

  export default {
    name: 'hello',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    components: {
      LtePagination
    },
    methods: {
      onPage (currentPage) {
        console.log('page ', currentPage)
      }
    }
  }
</script>

