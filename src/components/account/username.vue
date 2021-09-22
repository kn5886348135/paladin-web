<template>
  <el-form-item
    prop="username"
    :rules="[{ validator: validateUsername, trigger: 'change' }]"
    label="用户名"
  >
    <el-input
      v-model="username"
      :placeholder="placeholder"
      v-on:input="enterInput"
      minlength="6"
      maxlength="11"
    ></el-input>
  </el-form-item>
</template>

<script>
import { validate_username } from "@/utils/validate";
export default {
  name: "Username",
  components: {},
  props: {
    placeholder: {
      type: String,
      default: "用户名",
    },
  },
  data() {
    return {
      username: "",
    };
  },
  methods: {
    validateUsername(rule, value, callback) {
      if (!this.username || this.username == "") {
        return callback(new Error("用户名不能为空"));
      } else if (this.username.length > 26) {
        return callback(new Error("用户名不能超过26个字符"));
      } else if (this.username.length < 6) {
        return callback(new Error("用户名不能少于6个字符"));
      } else {
        callback();
      }
    },
    enterInput() {
      const valiStatus = validate_username(this.username);
      let value = valiStatus ? this.username : "";
      this.$emit("update:value", value);
    },
  },
};
</script>
<style lang="scss" scoped></style>
