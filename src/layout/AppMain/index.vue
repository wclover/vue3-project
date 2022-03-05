<template>
  <div class="app_main">
    <!-- <transition name="fade-transform" mode="out-in">
      <keep-alive :include="cachedViews">
        <router-view />
      </keep-alive>
    </transition>-->
    <router-view v-slot="{ Component }">
      <transition name="fade-transform" mode="out-in">
        <div>
          <keep-alive :include="cachedViews">
            <component :is="Component"></component>
          </keep-alive>
        </div>
      </transition>
    </router-view>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';

const cachedViews = reactive(['RecordIndex', 'TableIndex'])
const key = ref('')
</script>

<style lang="scss" scoped>
.app_main {
  height: 100%;
  width: 100%;
  background-color: #ccc;
}
</style>
