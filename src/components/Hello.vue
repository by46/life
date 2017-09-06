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
  import LtePagination from '@/components/pagination.vue'
  import LteInfoBox from '@/components/InfoBox.vue'
  import LteDateRangePicker from '@/components/DateRangePicker.vue'

  export default {
    name: 'hello',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    components: {
      LtePagination,
      LteInfoBox,
      LteDateRangePicker
    },
    methods: {
      onPage (currentPage) {
        console.log('page ', currentPage)
      }
    }
  }
</script>

