<template>
  <div class="login_background">
    <div class="login_form">
      <h1 class="login_title">White Clover</h1>
      <el-form ref="loginFormRef" :model="loginForm" :rules="rules">
        <el-form-item prop="username">
          <el-input
            v-model="loginForm.username"
            placeholder="用户名"
            name="username"
            autocomplete="on"
          >
            <template #prefix>
              <el-icon class="el-input__icon"><user /></el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            :key="passwordType"
            ref="passwordRef"
            v-model="loginForm.password"
            :type="passwordType"
            placeholder="密码"
            name="password"
            autocomplete="on"
            @keyup.enter.native="handleLogin"
          >
            <template #prefix>
              <el-icon class="el-input__icon"><unlock /></el-icon>
            </template>
          </el-input>
          <span class="show-pwd" @click="showPwd(passwordRef)">
            <el-icon :size="20" v-if="passwordType === 'password'"><view /></el-icon>
            <el-icon :size="20" v-else><key /></el-icon>
          </span>
        </el-form-item>
        <el-form-item>
          <div class="login_button" @click="handleLogin(loginFormRef)">登录</div>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup>
import {setToken} from '@/utils/auth'
import { View, Key, Unlock, User } from '@element-plus/icons-vue'
import {reactive, ref, nextTick} from 'vue';
import {useStore} from "vuex";
import {useRouter} from "vue-router";

const loginFormRef = ref()
const validatePassword = (rule, value, callback) => {
  if (value.length < 8) {
    callback(new Error('The password can not be less than 8 digits'))
  } else {
    callback()
  }
}
const rules = reactive({
  username: [{ required: true, trigger: 'blur' }],
  password: [{ required: true, trigger: 'blur', validator: validatePassword }]
})

const loginForm = reactive({
  username: 'whiteclover',
  password: 'whiteclover'
})
const store = useStore()
const router = useRouter()
const handleLogin = (loginEl) => {
  if (!loginEl) return;
  loginEl.validate(valid => {
    if (valid) {
      console.log('chenggong')
      // const { username, password } = this.loginForm
      store.dispatch('user/setUserInfo', loginForm)// 存authInfo 信息
      setToken('xxx')
      // 不知道为啥会报错
      router.push({ path: '/' }).catch(e => console.log)
    } else {
      console.log('error submit!!')
      return false
    }
  })
}

const passwordType = ref('password')
const passwordRef = ref(null)
const showPwd = () => {
    if (passwordType.value === 'password') {
      passwordType.value = ''
    } else {
      passwordType.value = 'password'
    }
    nextTick(() => {
      passwordRef.value.focus()
    })
}
</script>

<style lang="scss" scoped>
.login_background {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: url('@/assets/login.png') no-repeat center;
  background-size: cover;
  .login_form {
    position: absolute;
    width: 25vw;
    top: 50%;
    right: 10%;
    transform: translateY(-50%);
    text-align: center;
    background-color: rgba(24, 144, 255, 0.2);
    border-radius: 5px;
    padding: 3% 4%;
    .login_title {
      color: #ffffff;
      margin-bottom: 30px;
    }
    .login_button {
      width: 100%;
      height: 40px;
      line-height: 40px;
      font-size: 17px;
      text-align: center;
      cursor: pointer;
      color: #fcfdfe;
      background-image: -webkit-gradient(linear, left top, left bottom, from(#2e69b1), to(#1d9ec5));
      background-image: linear-gradient(to bottom, #2e69b1, #1d9ec5);
      margin: 20px auto 0;
      border-radius: 5px;
    }
    .show-pwd {
      position: absolute;
      right: 10px;
      top: 2px;
      font-size: 16px;
      color: #0ba1f6;
      cursor: pointer;
      user-select: none;
    }
    ::v-deep .el-form-item__label {
      color: #ffffff;
    }
  }
}
</style>
