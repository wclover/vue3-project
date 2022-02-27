<template>
  <div>
    <router-link v-if="!route.children" :to="{name}">
      <el-menu-item v-if="route.meta" :index="index">
        <!-- <i :class="route.meta.icon" /> -->
        {{ fold ? '' : route.meta.title }}
      </el-menu-item>
    </router-link>
    <el-sub-menu v-else :index="index">
      <template v-if="route.meta" #title>
        <!-- <i :class="route.meta.icon" /> -->
        <span>{{ fold ? '' : route.meta.title }}</span>
      </template>
      <submenu-item
        v-for="item in route.children"
        :key="item.name"
        :index="item.name"
        :route="item"
        :name="item.name"
      />
    </el-sub-menu>
  </div>
</template>

<script setup>
import { toRefs, computed } from 'vue';
import { useStore } from 'vuex'

const props = defineProps({
  route: {
    type: Object,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  index: {
    type: String,
    default: () => ''
  }
})

const {route, name, index} = toRefs(props)

const store = useStore()
const fold = computed(() => {
  return store.getters.fold;
})
</script>

<style scoped>
</style>
