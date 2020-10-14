<template>
    <div class="regist">
      <Header />
      <Row>
        <Form ref="registForm" :model="registForm" class="form" :rules="rules">
            <span class="regist-title">注册</span>
            <FormItem prop="username">
                <Input v-model="registForm.accountName" :maxlength="16" size="large" clearable placeholder="请输入用户名"/>
            </FormItem>
            <FormItem prop="nickname">
                <Input v-model="registForm.nickname" :maxlength="16" size="large" clearable placeholder="请输入昵称"/>
            </FormItem>
            <FormItem prop="email">
                <Input v-model="registForm.email" size="large" clearable placeholder="请输入邮箱"/>
            </FormItem>
            <FormItem prop="password">
                <SetPassword v-model="registForm.password" clearable placeholder="请输入密码" @on-change='changeInputPassword'/>
            </FormItem>
            <FormItem prop="phone">
                <Input v-model="registForm.phone" size="large" clearable placeholder="请输入手机号"/>
                <Select v-model="select" slot="prepend" style="width:70px">
                  <Option value="86">+86</Option>
                  <Option value="223">+223</Option>
                  <Option value="238">+238</Option>
                </Select>
            </FormItem>
        </Form>
        <Row type="flex" justify="space-between">
          <Button class="regist-btn" type="primary" size="large" :loading="loading" @click="submitregist">
            <span v-if="!loading">注册</span>
            <span v-else>注册中...</span>
          </Button>
          <router-link to='/login'>
          <a class="to-login">使用已有账号登录</a>
          </router-link>
        </Row>
        </Row>
    </div>
</template>

<script>
import { regist } from '@/utils/api'
import Header from '@/components/header/header'
import SetPassword from '@/components/common/set-password'
import {validateUsername, validatePhone, validatePassword} from '@/utils/validate'

export default {
  name: 'Regist',
  components: {
    Header,
    SetPassword
  },
  data () {
    return {
      select: '86',
      loading: false,
      registForm: {
        accountName: '',
        password: '',
        phone: '',
        email: ''
      },
      rules: {
        username: [
          {
            required: true,
            message: '请输入注册账号',
            trigger: 'blur'
          },
          {
            validator: validateUsername,
            trigger: 'blur'
          }
        ],
        nickname: [
          {
            required: true,
            message: '请输入昵称',
            trigger: 'blur'
          }
        ],
        password: [
          {
            required: true,
            message: '请输入密码',
            trigger: 'blur'
          }, {
            validator: validatePassword,
            trigger: 'blur'
          }
        ],
        email: [
          {
            required: true,
            message: '请输入邮箱地址',
            trigger: 'blur'
          }, {
            type: 'email',
            message: '邮箱格式不正确'
          }
        ],
        phone: [
          {
            required: true,
            message: '请输入手机号',
            trigger: 'blur'
          }, {
            validator: validatePhone,
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    init () {},
    changeInputPassword (v, level, security) {
      this.registForm.security = security
    },
    submitregist () {
      regist(this.registForm).then(res => {
        console.log(res)
        if (res.code === 200) {
          let query = {
            accountName: this.registForm.accountName
          }
          console.log(res)
          this.$router.push({
            name: '/',
            query: query
          })
        }
      })
    }
  },
  mounted () {
    this.init()
  }
}
</script>
<style lang="less">
.regist {
  padding-top: 10px;
  height: 300px;
  align-content: center;
  background: url('../../assets/background.svg');
  background-color: plum;

   .form {
     padding-top: 20px;

     .regist-title {
       display: block;
       font-weight: bold;
       font-size: 16px;
       margin-bottom: 20px;
     }

     .input-verify{
       width: 67%;
     }
   }

   .regist-btn {
     height: 50px;
     width: 50px;
   }

   .to-login {
     font-size: 16px;
     line-height: 35px;
   }

   .layout {
     display: block;
     flex-direction: column;
     justify-content: space-between;
     width: 400px;
     height: 100%;
   }
}
</style>
