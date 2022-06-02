<template>
  <input
    v-model="title"
    class="todoInput"
    @keydown.enter="createTodo" />
  <button
    @click="createTodo">
    생성
  </button>
</template>

<script>
export default {
  data() {
    return {
      title: ''
    }
  },
  methods: {
    async createTodo() {
      if (!this.title.trim()) return

      await this.$store.dispatch('createTodo', this.title)
      this.title = null
      this.$store.dispatch('readTodos')
    }
  }
}
</script>
