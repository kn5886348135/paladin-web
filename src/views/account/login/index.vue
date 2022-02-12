<template>
  <div class="user-container">
    <div class="login-form">
      <el-form ref="form" :model="form">
        <Username :value.sync="form.username" />
        <Password
          :value.sync="form.password"
          :passwordConfirm="form.passwordConfirm"
        />
        <el-form-item>
          <el-button type="primary" @click="onSubmit" class="button-black"
            >确定</el-button
          >
        </el-form-item>
      </el-form>
    </div>
    <div>
      <router-link to="/forget" class="color-white opacity-4"
        >忘记密码</router-link
      >
    </div>
  </div>
</template>
<script>
import Username from "@/components/account/username";
import Password from "@/components/account/password";
import sha1 from "js-sha1";

export default {
  name: "Login",
  components: { Username, Password },
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    onSubmit() {
      this.$refs["form"].validate((valid) => {
        if (valid) {
          this.login();
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    login() {
      const req = {
        accountName: this.form.username,
        passwd: sha1(this.form.password),
      };
      console.log("login dispatch");
      this.$store.dispatch("account/LoginAction", req).then((res) => {
        console.log(res);
        if (res.status == 200) {
          this.$message({
            type: "success",
            message: res.message,
          });
          console.log("登陸成功");
          this.$router.push({
            name: "Index",
          });
        } else {
          this.$message({
            type: "failed",
            message: res.message,
          });
        }
      });
    },
  },
};
</script>
<style lang="scss">
.user-container {
  padding: 0 30px;
  overflow-y: auto;
  height: 100%;
  text-align: center;
  margin-top: 200px;
}
.login-form {
  width: 500px;
  margin: 0 auto;
  .el-input__inner {
    // background-color: #202429 !important;
    border: 1px solid #202429 !important;
    // color: #fff !important;
    &::-webkit-input-placeholder {
      color: rgba(255, 255, 255, 0.2);
    }
    &::-moz-placeholder {
      color: rgba(255, 255, 255, 0.2);
    }
    &:-ms-input-placeholder {
      color: rgba(255, 255, 255, 0.2);
    }
    &:-moz-placeholder {
      color: rgba(255, 255, 255, 0.2);
    }
  }
  .el-form-item {
    margin-bottom: 20px !important;
  }
}
.button-black {
  display: block;
  width: 100%;
}
</style>
