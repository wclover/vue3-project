<template>
  <div :class="['app_side_bar', fold ? 'fold_width' : 'un_fold_width']">
    <router-link to="/">
      <side-header :fold="fold" />
    </router-link>
    <nav-menu />
  </div>
</template>

<script setup>
import {computed} from 'vue'
import SideHeader from '@/layout/SideBar/SideHeader.vue'
import NavMenu from '@/layout/SideBar/NavMenu/index.vue'
import {useStore} from 'vuex'
const store = useStore()
const fold = computed(() => {
  return store.getters.fold
})
</script>

<style lang="scss" scoped>
.app_side_bar {
  background-color: #545c64;
  transition: width 0.2s;
}
.fold_width {
  width: 70px;
  :deep(.el-submenu__icon-arrow) {
    display: none;
  }
}
.un_fold_width {
  width: 250px;
}
</style>
