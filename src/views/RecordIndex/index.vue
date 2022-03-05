<template>
  <div>RecordIndex</div>
</template>

<!-- 添加单独的name给keep-alive使用 -->
<script>
export default {name: 'RecordIndex'}
</script>

<script setup>
import { onActivated } from 'vue';

onActivated(() => {
  console.log('record active');
})
</script>

<style scoped>

</style>
