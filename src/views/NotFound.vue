<template>
  <div class="root">
      <h1 class="title">Not Found</h1>
      <h1 class="title">Redirecting to home page</h1>
  </div>
</template>

<script>

export default {
  name: 'NotFound',
  created() {
    const loadingComponent = this.$buefy.loading.open({
        container: this.isFullPage ? null : this.$refs.element.$el
    })
    setTimeout(() => {
      loadingComponent.close()
      this.$router.push({ path: '/'})
    }, 3 * 1000)
  },
  data() {
    return {
      isFullPage: true
    }
  },
}
</script>
