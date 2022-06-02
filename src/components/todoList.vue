<template>
  <ul>
    <!-- todo.id 이놈을 각각의 버튼에 연결되어야할거같아 -->
    <todoItem 
      v-for="todo in todos"
      :key="todo.id"
      :title="todo.title"
      @delete="deleteTodo(todo.id)"
      @edit="editTodo(todo, id)" />
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
    'edit'
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
    },
    editTodo(id) {
      this.$store.dispatch('editTodo', id)
    }
  }
}
</script>
