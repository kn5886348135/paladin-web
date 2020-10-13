<template>
<!-- 登录页面 -->
    <div class="container">
        <div class="login-content">
            <ul class="login-head">
                <li @click="login">
                    账号密码登录
                </li>
            </ul>
        </div>
        <div class="login-form">
            <Form ref="form" :model="form">
                <FormItem prop="username">
                    <input type="text" v-model="form.username" clearable size="large" placeholder="用户名">
                </FormItem>
                 <FormItem prop="password">
                    <input type="password" v-model="form.password" clearable size="large" placeholder="密码">
                </FormItem>
                <Row>
                <router-link :to="{path: '/ForgetPassword',query:{type:'user'}}">
                <span style="float: right">忘记密码</span>
                </router-link>
            </Row>
                <FormItem>
                    <Button type="error" @click="submit('form')" clearable size="large" long>登录</Button>
                </FormItem>
            </Form>

        </div>
    </div>
</template>

<script>
// import {Bus} from '@/utils/bus'
// import {userlogin} from '@/utils/api'
export default {
  name: 'Login',
  data () {
    return {
      form: {
        username: '用户名',
        password: '密码'
      }
    }
  },
  created () {

  },
  methods: {
    async submitLogin (name) {
      // this.$refs[name].validate(async (valid) => {
      //   if (valid) {
      //     const res = await userlogin({
      //       userName: this.form.username,
      //       password: this.form.passCode
      //     })
      //     if (res.code === '0') {
      //       Bus.$emit('login', res.data)
      //       localStorage.clear('accesstoken')
      //     } else {

      //     }
      //   } else {

      //   }
      // })
      console.log('login submit')
    },
    login () {
      console.log('start to login')
    }
  }

}
</script>

<style>

</style>
