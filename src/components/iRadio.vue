<template>
  <input type="radio" :id="componentId" :checked="checked"
         :disabled="disabled">
</template>
<script>
  import $ from 'jquery'

  let colors = ['black', 'red', 'grey', 'orange', 'green',
    'yellow', 'blue', 'pink', 'aero', 'purple']
  let themes = ['minimal', 'flat', 'square', 'polaris', 'futurico']
  let themesWithoutColor = ['polaris', 'futurico']

  export default {
    name: 'iradio',
    props: {
      id: {type: String, default: ''},
      color: {
        type: String,
        default: 'blue',
        validator: function (value) {
          value = (value || 'black').toLowerCase()
          return colors.indexOf(value) !== -1
        }
      },
      theme: {
        type: String,
        default: 'minimal',
        validator: function (value) {
          value = (value || 'minimal').toLowerCase()
          return themes.indexOf(value) !== -1
        }
      },
      disabled: {type: Boolean, default: false},
      text: {type: String, default: ''},
      value: {type: String, default: ''}
    },
    computed: {
      componentId: function () {
        let suffix = Math.random().toString(36).substr(2)
        return this.id ? this.id : ('i-checkbox-' + suffix)
      },
      selector () {
        return '#' + this.componentId
      },
      radioClass () {
        let theme = this.theme.toLowerCase()
        let tmp = 'iradio_' + theme
        if (themesWithoutColor.indexOf(theme) === -1) {
          tmp += '-' + this.color.toLowerCase()
        }
        return tmp
      },
      checked () {
        return this.value === this.text
      }
    },
    mounted () {
      let vm = this
      $(vm.selector).iCheck({
        radioClass: vm.radioClass
      })
      $(vm.selector).on('ifChecked', vm.onCheck)
    },
    methods: {
      onCheck () {
        this.$emit('input', this.text)
      }
    }
  }
</script>
