<template>
  <div style="transition: none;">
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="activeRoute"
        background-color="#545c64"
        text-color="#ffffff"
        active-text-color="#409eff"
        :collapse="fold"
        :collapse-transition="false">
        <submenu-item v-for="item in permissionRoutes" :key="item.name" :index="item.name" :route="item" :name="item.name" />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script setup>
import {useStore} from 'vuex'
import SubmenuItem from '@/layout/SideBar/NavMenu/submenuItem.vue'
import { computed, toRaw } from 'vue';
import { useRoute } from 'vue-router';

const store = useStore()
const route = useRoute()
const storeRoutrs = computed(() => {
  return store.getters.permissionRoutes;
})
const permissionRoutes = toRaw(storeRoutrs.value)
const fold = computed(() => {
  return store.getters.fold;
})
const activeRoute = computed(() => {
  return route.name
})
</script>

<style lang="scss" scoped>
.el-menu {
  border: none;
}
</style>
