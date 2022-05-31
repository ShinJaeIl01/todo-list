<template>
  <section class="">
    <todoHeader />
    <section>
      <createTodo />
      <RouterView />
    </section>
  </section>
</template>

<script>
import todoHeader from './components/todoHeader.vue'
import createTodo from './components/createTodo.vue'

export default {
  components: {
    todoHeader,
    createTodo
  }
}
</script>

<style lang="scss">
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.3/font/bootstrap-icons.css");
@import './scss/main'


</style>
