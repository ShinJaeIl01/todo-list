<template>
  <todoHeader />
  <RouterView />
</template>

<script>
import todoHeader from './components/todoHeader.vue'

export default {
  components: {
    todoHeader
  }
}
</script>

<style lang="scss">
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.3/font/bootstrap-icons.css");
@import './scss/main'
</style>
