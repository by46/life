<template>
  <div>
    {{msg}}
    <lte-pagination size="sm"
                    :totalCount="4003"
                    @page="onPage"></lte-pagination>
    <div class="row">
      <div class="col-md-3">
        <lte-info-box mode="advance"></lte-info-box>
      </div>
    </div>

  </div>
</template>

<script>
  import LtePagination from '@/components/pagination.vue'
  import LteInfoBox from '@/components/InfoBox.vue'

  export default {
    name: 'hello',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    components: {
      LtePagination,
      LteInfoBox
    },
    methods: {
      onPage (currentPage) {
        console.log('page ', currentPage)
      }
    }
  }
</script>

