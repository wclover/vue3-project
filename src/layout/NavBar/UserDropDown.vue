<template>
  <el-dropdown trigger="click" @command="handleCommand">
    <span class="right_drop">
      {{ username }}
      <el-icon class="el-icon--right">
        <arrow-down />
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item command="signOut">登出</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup>
import {useStore} from 'vuex'
import {ArrowDown} from '@element-plus/icons-vue'
import {removeToken} from '@/utils/auth'
import { useRouter } from 'vue-router';

const store = useStore()
const username = store.getters.fold

const router = useRouter()

const handleCommand = (command) => {
  switch (command) {
    case 'signOut': {
      removeToken()
      router.push('/login')
      console.log('signOut')
      break
    }
    default: {
      console.log('nothing')
    }
  }
}
</script>

<style lang="scss" scoped>
.right_drop {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
