<template>
  <ul>
    <li v-for="item in list" :key="item">
        {{ item }}
    </li>
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
