<template>
  <li>
    <div v-if="!editMode">
      <li>{{ todo.title }}</li>
      <button @click.stop="editInput">
        수정
      </button>
      <button
        @click="deleteTodo">
        삭제
      </button>
    </div>

    <div
      v-else
      @click.stop>
      <input
        :value="todo.title"
        @input="title = $event.target.value"
        @keydown.enter="update(), offEditInput()"
        @keydown.esc="offEditInput" />
      <button @click="update(), offEditInput()">
        수정완료
      </button>
      <button
        @click="deleteTodo">
        삭제
      </button>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      default: function() {}
    }
  },
  data() {
    return {
      title: '',
      editMode: false
    }
  },
  methods: {
    deleteTodo() {
     this.$emit('delete')
     this.editMode = false

    },
    offEditInput() {
      this.editMode = false
    },
    editInput() {
      this.editMode = true
      console.log(this.editMode)
      window.addEventListener('click', this.offEditInput)
    },
      update() {
      this.$emit('update', this.title)
      window.removeEventListener('click', this.offEditInput)
    }
  }
}
</script>

<style scoped lang="scss">
div {
  display: flex;
}
</style>
