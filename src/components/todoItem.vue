<template>
  <div>
    <li>{{ title }}</li>
    <button @click="editInput">
      수정
    </button>
    <button
      @click="deleteTodo">
      삭제
    </button>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  methods: {
    deleteTodo() {
      return this.$emit('delete')
    },
    editInput() {
      
    }
  }
}
</script>

<style scoped lang="scss">
div {
  display: flex;
}
</style>
