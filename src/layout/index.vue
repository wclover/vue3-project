<template>
  <div class="app_layout">
    <side-bar />
    <div class="app_layout_main">
      <nav-bar />
<!--        <tags-view />-->
      <app-main />
    </div>
  </div>
</template>

<script setup>
import NavBar from '@/layout/NavBar/index.vue'
import SideBar from '@/layout/SideBar/index.vue'
// import TagsView from '@/layout/TagsView/index.vue'
import AppMain from '@/layout/AppMain/index.vue'
</script>

<style lang="scss" scoped>
.app_layout {
  height: 100vh;
  width: 100%;
  display: flex;
  .app_layout_main {
    height: calc(100vh - 50px );
    width: 100%;
  }
}
</style>
