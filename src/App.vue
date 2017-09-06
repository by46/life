<template>
  <div id="app">
    <div class="wrapper">
      <lte-navi-bar></lte-navi-bar>
      <lte-slider></lte-slider>
      <vue-toastr ref="toastr"></vue-toastr>
      <lte-content-wrap></lte-content-wrap>
      <lte-modal></lte-modal>
      <!-- Main Footer -->
      <footer class="main-footer">
        <!-- To the right -->
        <div class="pull-right hidden-xs">
          Supported By DFIS teams
        </div>
        <!-- Default to the left -->
        <strong>Copyright &copy; 2016 <a href="#">Newegg, Inc</a>.</strong> All rights reserved.
      </footer>
    </div>
  </div>
</template>

<script>
  import LteSlider from './LteSlider.vue'
  import LteContentWrap from './LteContentWrap.vue'
  import LteModal from '@/components/Modal.vue'
  import LteNaviBar from './LteNaviBar.vue'
  import VueToastr from 'vue-toastr'

  export default {
    name: 'app',
    components: {
      LteSlider,
      LteContentWrap,
      LteModal,
      LteNaviBar,
      VueToastr
    }
  }
</script>
<style>
</style>

