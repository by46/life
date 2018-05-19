<template>
  <div>hello world, user profile
    {{username}}
    <button @click="goBack()">Go Back</button>
    <div>{{$route.params.username}}</div>
  </div>
</template>
<script>
  export default {
    name: 'profile',
    computed: {
      username() {
        return this.$route.params.username
      }
    },
    methods: {
      goBack() {
        window.history.length > 1
          ? this.$router.go(-1)
          : this.$router.push('/portal')
      }
    }
  }
</script>
