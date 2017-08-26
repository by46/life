<template>
  <div>
    {{msg}}

    <div>
      <lte-pagination size="sm"
                      :totalCount="4003"
                      @page="onPage"></lte-pagination>
    </div>
    <div>
      <lte-date-range-picker v-model="dates"></lte-date-range-picker>
    </div>
  </div>
</template>

<script>
  import LtePagination from '@/components/Pagination.vue'
  import LteDateRangePicker from '@/components/DateRangePicker.vue'

  export default {
    name: 'hello',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        dates: {
          start: new Date(),
          end: new Date('+14 days')
        }
      }
    },
    components: {
      LtePagination,
      LteDateRangePicker
    },
    methods: {
      onPage (currentPage) {
        console.log('page ', currentPage)
      }
    }
  }
</script>

