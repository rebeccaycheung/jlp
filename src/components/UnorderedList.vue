<template>
  <ul>
    <div v-for="item in list" :key="item">
      <li v-if="item.includes('http')">
        <a :href="item">{{ item }}</a>
      </li>
      <li v-else>
        {{ item }}
      </li>
    </div>
  </ul>
</template>

<script>

export default {
  name: 'UnorderedList',
  props: {
    list: Array,
  }
}
</script>

<style>
li {
  display: list-item;
  list-style-type: disc;
  margin-left: 50px;
}
</style>
