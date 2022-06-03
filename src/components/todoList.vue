<template>
  <ul>
    <!-- todo.id 이놈을 각각의 버튼에 연결되어야할거같아 -->
    <todoItem 
      v-for="todo in todos"
      :key="todo.id"
      :todo="todo"
      @delete="deleteTodo(todo.id)"
      @edit="editTodo(todo, id)"
      @update="todo.title = $event" />
  </ul>
</template>

<script>
import todoItem from './todoItem.vue'

export default {
  components: {
    todoItem
  },
  emit: [
    'delete',
    'edit',
    'update'
  ],
  computed: {
    todos() {
      return this.$store.state.todos
    },
    todosup: function() {
      return this.$store.dispatch('readTodos')
    }
  },
  created() {
    this.readTodos()
  },
  methods: {
    readTodos() {
      this.$store.dispatch('readTodos')
    },
    deleteTodo(id) {
      this.$store.dispatch('deleteTodo', id)
      const index = this.todos.findIndex(todo => todo.id === id)
      this.todos.splice(index, 1)
},
    editTodo(id) {
      this.$store.dispatch('editTodo', id)
    }
  }
}
</script>
