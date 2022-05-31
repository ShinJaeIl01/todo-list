<template>
  <ul>
    <todoItem 
      v-for="todo in todos"
      :key="todo.id"
      :title="todo.title" />
  </ul>
</template>

<script>
import todoItem from './todoItem.vue'

export default {
  components: {
    todoItem
  },
  computed: {
    todos() {
      return this.$store.state.todos
    }
  },
  created() {
    this.readTodos()
  },
  methods: {
    readTodos() {
      this.$store.dispatch('readTodos')
    }
  }
}
</script>
