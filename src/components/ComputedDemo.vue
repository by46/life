<template>
  <div>
    <div> Ask a yes/no question:
      <input v-model="question"/>
    </div>
    <div>{{answer}}</div>
    <div>
      <input v-model="myTodoText"
             v-on:keyup.enter="addNewTodo"
             placeholder="Add a todo"/>
    </div>
    <ul>
      <todo-item v-for="(todo, index) in todos"
                 v-bind:key="todo.id"
                 v-bind:title="todo.title"
                 v-on:remove="todos.splice(index, 1)"></todo-item>
    </ul>

    <div>
      {{message}}
    </div>
    <div>
      {{reverseMessage}}
    </div>
  </div>
</template>

<script>
  import * as _ from 'lodash'
  import axios from 'axios'
  import TodoItem from './TodoItem'

  export default {
    name: 'computedDemo',
    data() {
      return {
        message: 'hello',
        question: '',
        answer: 'I cannot give you an answer until you ask a question!',
        myTodoText: '',
        nextTodoId: 4,
        todos: [
          {
            id: 1,
            title: 'Do the dishes'
          },
          {
            id: 2,
            title: 'Take out the trash'
          },
          {
            id: 3,
            title: 'Mow the lawn'
          }
        ]
      }
    },
    computed: {
      reverseMessage: function() {
        return this.message.split(' ').reverse().join(' ')
      }
    },
    watch: {
      question: function(newQuestion) {
        this.answer = 'Waiting for you to stop typing...'
        this.getAnswer()
      }
    },
    methods: {
      getAnswer: _.debounce(function() {
        if (this.question.indexOf('?') === -1) {
          this.answer = 'Questions usually contain a question mark. ;-)'
          return
        }
        this.answer = 'Thinking...'
        var vm = this
        axios.get('https://yesno.wtf/api')
          .then(function(response) {
            vm.answer = _.capitalize(response.data.answer)
          })
          .catch(function(error) {
            vm.answer = 'Error! ' + error
          })
      }, 500),
      addNewTodo: function() {
        this.todos.push({
          id: this.nextTodoId++,
          title: this.myTodoText
        })
        this.myTodoText = ''
      }
    },
    components: {TodoItem}
  }
</script>
