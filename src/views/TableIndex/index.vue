<template>
  <div>TableIndex</div>
  <router-view></router-view>
</template>

<script>
export default {name: 'TableIndex'}
</script>

<script setup>
import { onActivated } from 'vue';

onActivated(() => {
  console.log('tableIndex actived');
})
</script>

<style scoped>

</style>
