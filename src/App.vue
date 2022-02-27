<script setup>
import {useStore} from "vuex";

const store = useStore()
console.log(store.getters.fold)
</script>

<template>
  <div>
    <span class="test">helle</span>
    <el-button>button</el-button>
  </div>
</template>

<style lang="scss">
div {
  .test {
    color: red;
    font-size: 50px;
  }
}
</style>
