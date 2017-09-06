<template>
  <div class="info-box" :class="fullColor">
    <span class="info-box-icon" :class="iconColor">
      <i class="fa fa-bookmark-o"></i>
    </span>
    <div class="info-box-content">
      <div class="info-box-text">text    </div>
      <div class="info-box-number">1232,321,123</div>
      <div class="progress" v-if="hasProgress">
        <div class="progress-bar" :style="`width: ${progressPercent}%`"></div>
        <div class="progress-description">Hello</div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'lte-info-box',
    props: {
      color: {type: String, default: 'bg-aqua'},
      // standard and advance
      mode: {type: String, default: 'standard'},
      text: {type: String, default: 'text'},
      numberString: {type: String, default: ''},
      description: {type: String, default: ''},
      percent: {type: String, default: '0'}
    },
    computed: {
      fullColor: function () {
        return this.mode === 'standard' ? '' : this.color
      },
      iconColor: function () {
        return this.mode !== 'standard' ? '' : this.color
      },
      hasProgress: function () {
        return this.mode !== 'standard'
      },
      progressPercent: function () {

      }
    }
  }
</script>
