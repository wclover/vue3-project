<script setup>
// import {useStore} from "vuex";
// import {useRouter} from "vue-router";
//
// const store = useStore()
// const router = useRouter()
// console.log(store.getters.fold)
// console.log(router.options.routes)
</script>

<template>
  <div>
<!--    <span class="test">helle</span>-->
<!--    <el-button>button</el-button>-->
    <router-view></router-view>
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
