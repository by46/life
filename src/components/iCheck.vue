<template>
  <input type="checkbox" :id="componentId" :checked="value"
         :disabled="disabled">
</template>
<script>
  import $ from 'jquery'

  let colors = ['black', 'red', 'grey', 'orange', 'green',
    'yellow', 'blue', 'pink', 'aero', 'purple']
  let themes = ['minimal', 'flat', 'square', 'polaris', 'futurico']
  let themesWithoutColor = ['polaris', 'futurico']

  export default {
    name: 'icheck',
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
      value: {type: Boolean, default: false}
    },
    computed: {
      componentId: function () {
        let suffix = Math.random().toString(36).substr(2)
        return this.id ? this.id : ('i-checkbox-' + suffix)
      },
      selector () {
        return '#' + this.componentId
      },
      checkboxClass () {
        let theme = this.theme.toLowerCase()
        let tmp = 'icheckbox_' + theme
        if (themesWithoutColor.indexOf(theme) === -1) {
          tmp += '-' + this.color.toLowerCase()
        }
        return tmp
      }
    },
    mounted () {
      let vm = this
      $(vm.selector).iCheck({
        checkboxClass: vm.checkboxClass
      })
      $(vm.selector).on('ifChecked', vm.onCheck)
        .on('ifUnchecked', vm.onUncheck)
    },
    methods: {
      onCheck () {
        this.$emit('input', true)
      },
      onUncheck () {
        this.$emit('input', false)
      }
    }
  }
</script>
