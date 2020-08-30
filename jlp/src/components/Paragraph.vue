<template>
  <div>
    <p v-for="item in list" :key="item" class="paragraph">
        {{ item }}
    </p>
  </div>
</template>

<script>

export default {
  name: 'Paragraph',
  props: {
    list: Array,
  }
}
</script>

<style scoped>
.paragraph {
  padding-top: 20px;
  padding-bottom: 5px;
}
</style>
