<template>
<!-- 登录页面 -->
    <div class="container">
        <div class="login-content">
            <ul class="login-head">
                <li @click="login" :class="{active:!isCheckUser}">
                    账号密码登录
                </li>
            </ul>
        </div>
        <div class="login-form">
            <Form ref="form" :model="formModel" :rules="formRules">
                <FormItem prop="username">
                    <input type="text" v-model="formModel.username" clearable size="large" placeholder="用户名">
                </FormItem>
                 <FormItem prop="password">
                    <input type="password" v-model="formModel.password" clearable size="large" placeholder="密码">
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
export default {
  name: 'Login',
  data () {
    return {}
  },
  created() {

  },
  methods: {

  }

}
</script>

<style>
    
</style>