<template>
  <div class="nav_breadcrumb">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item v-for="item in breadcrumbItem" :key="item.path">{{ item.meta.title }}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script setup>
import {computed} from 'vue'
import {useRoute} from "vue-router";

const route = useRoute()
const breadcrumbItem = computed(() => {
  return route.matched
})
</script>

<style lang="scss" scoped>
.nav_breadcrumb {
  margin-left: 10px;
}
</style>
