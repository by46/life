<template>
  <div>jel;;o
    {{ count }}
    {{ doneTodosCount }}
    {{ counter }}
    <div>{{loginState}}</div>
    <button @click="increment()">Increment</button>
    <button @click="login()">Login</button>
  </div>
</template>

<script>
  import store from '@/store'
  import {mapState, mapGetters} from 'vuex'
  import {LOGIN} from '@/store/mutation_types'

  export default {
    name: 'user',
    methods: {
      increment() {
        store.commit('increment')
        console.log(store.state.count)
      },
      login() {
        store.commit(LOGIN)
      }
    },
    computed: {
      count2() {
        return this.$store.state.count
      },
      doneTodosCount() {
        return 1
        // return this.$store.getters.doneTodos().length()
      },
      ...mapState(['count']),
      ...mapGetters(['counter',
        'loginState'])
    }
  }
</script>
