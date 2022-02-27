<template>
  <div class="app_nav_bar">
    <div class="nav_left_info" @click="changeFold">
      <div class="nav_button">
        <el-icon v-if="isFold" :size="20">
          <expand />
        </el-icon>
        <el-icon v-else :size="20">
          <fold />
        </el-icon>
      </div>
      <breadcrumb />
    </div>
    <div class="nav_user_info">
      <user-drop-down />
    </div>
  </div>
</template>

<script setup>
import UserDropDown from '@/layout/NavBar/UserDropDown.vue'
import Breadcrumb from '@/layout/NavBar/Breadcrumb.vue'
import { useStore } from "vuex";
import { computed } from "vue";
import { Fold, Expand } from '@element-plus/icons-vue'
const store = useStore()

const isFold = computed(() => {
  return store.getters.fold
})
const changeFold = () => {
  store.dispatch('app/changeFold')
}
</script>

<style lang="scss" scoped>
.app_nav_bar {
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .nav_left_info {
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    .nav_button {
      height: 50px;
      width: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      &:hover {
        background-color: rgba(0, 0, 0, 0.05);
      }
    }
  }
  .nav_user_info {
    text-align: right;
    cursor: pointer;
    padding-right: 20px;
  }
}
</style>
