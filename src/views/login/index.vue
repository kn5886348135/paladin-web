<template>
  <div>
    <div>
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
        passwd: this.form.password,
      };
      this.$store.dispatch("account/loginAction", req).then((res) => {
        this.$message({ type: "success", message: res.data.message });
      });
      this.$router.push({
        name: "Index",
      });
    },
  },
};
</script>
<style lang="scss"></style>
