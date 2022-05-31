<template>
  <header>
    <nav class="nav flex-column">
      <div
        v-for="nav in navigations"
        :key="nav.name"
        class="nav_item">
        <RouterLink
          :to="nav.href"
          class="nav-link active">
          {{ nav.name }}
        </RouterLink>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      navigations: [
        {
          name: 'Todo',
          href: '/'
        },
        {
          name: 'Doing',
          href: '/doing'
        },
        {
          name: 'Done',
          href: '/done'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>


</style>
