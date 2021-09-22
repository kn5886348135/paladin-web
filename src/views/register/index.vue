<template>
  <div class="register">
    <h2>注册</h2>
    <div class="container">
      <el-form ref="form" :model="form" label-width="80px">
        <Username :value.sync="form.username" />
        <PasswordVue
          :passwordConfirm="form.passwordConfirm"
          :value.sync="form.password"
        />
        <!--接收“确认密码”的值 -->
        <PasswordConfirm
          :password="form.password"
          :value.sync="form.passwordConfirm"
        />
        <!--接收“密码”的值 -->
        <Code :username="form.username" :value.sync="form.code" />
        <el-form-item>
          <el-button type="primary" @click="onSubmit" class="button-black"
            >确定</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { validate_password } from "@/utils/validate";
import Username from "@/components/account/username";
import PasswordVue from "@/components/account/password";
import PasswordConfirm from "@/components/account/passwordConfirm";
import Code from "@/components/code/";

export default {
  name: "Register",
  components: { Username, Code, PasswordVue, PasswordConfirm },
  data() {
    return {
      form: {
        username: "",
        password: "",
        passwordConfirm: "",
        code: "",
      },
    };
  },
  props: {
    passwordConfirm: {
      type: String,
      default: "",
    },
  },
  methods: {
    validatePassword(rule, value, callback) {
      if (!this.password || this.password == "") {
        return callback(new Error("密码不能为空"));
      } else if (!validate_password(this.password)) {
        return callback(new Error("密码为6-20的英文和数字组合"));
      } else if (
        this.passwordConfirm &&
        this.password != this.passwordConfirm
      ) {
        return callback(new Error("两次密码不一致"));
      } else {
        callback();
      }
    },
    onSubmit() {
      this.$refs["form"].validate((valid) => {
        if (valid) {
          this.register();
        } else {
          console.log("用户名或者密码不符合要求");
          return false;
        }
      });
    },
    register() {
      console.log("register");
      const req = {
        accountName: this.form.username,
        passwd: this.form.password,
        code: this.form.code,
      };
      console.log(req);
      this.$store
        .dispatch("account/registerAction", req)
        .then((res) => {
          this.$message({
            type: "success",
            message: res.message,
          });
          this.$router.replace({
            name: "Login",
          });
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
<style lang="scss">
.register {
  top: 500px;
  padding-top: 300px;
  width: 400px;
  text-align: center;
  margin: 0px auto;
  .container {
    // float: left;
    // margin: 0 auto;
    // background-color: blueviolet;
  }
}

.button-black {
  display: block;
  width: 100%;
}
</style>
