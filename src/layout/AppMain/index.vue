<template>
  <div class="app_main">
    <transition name="fade-transform" mode="out-in">
      <keep-alive :include="cachedViews">
        <router-view />
      </keep-alive>
    </transition>
    <!-- <router-view v-slot="{ Record }">
      <transition name="fade-transform" mode="out-in">
        <keep-alive>
          <component :is="Record"></component>
        </keep-alive>
      </transition>
    </router-view> -->
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
// import Record from '@/views/RecordIndex/index.vue';

const cachedViews = reactive([])
const key = ref('')
</script>

<style lang="scss" scoped>
.app_main {
  height: 100%;
  width: 100%;
  background-color: #ccc;
}
</style>
