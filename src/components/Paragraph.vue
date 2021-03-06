<template>
  <div>
    <div v-for="item in list" :key="item" class="paragraph">
      <p v-if="item.includes('http')">
        <a :href="item">{{ item }}</a>
      </p>
      <p v-else>
        {{ item }}
      </p>
    </div>
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
