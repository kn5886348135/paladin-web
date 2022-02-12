<template>
  <div>
    
    <el-form ref="newTermDetail" :model="newTermDetail" class="auto_form">
      <div
        :style="operation == 'new' ? 'margin-left: 50px' : 'margin-left: 20px'"
      >
        <el-form-item
          v-for="(domain, index) in newTermDetail.questions"
          :label="operation == 'new' ? ' ' : '' + domain.id"
          :key="'term' + index"
          :prop="'questions.' + index + '.s_question'"
          :style="
            index == 0
              ? 'margin-top: 0; margin-bottom: 20px;'
              : 'margin: 20px auto;'
          "
          :rules="[
            {
              required: true,
              validator: checkInputValid,
              message: '请输入中英文',
              trigger: ['blur', 'change'],
            },
          ]"
        >
          <el-input
            style="width: 300px"
            type="textarea"
            autosize
            v-model="domain.s_question"
          ></el-input>
          <el-button @click.prevent="removeTermDomain(domain, index)"
            >删除</el-button
          >
        </el-form-item>
      </div>
    </el-form>
  </div>
</template>

<script>
import { validate_password } from "@/utils/validate";

export default {
  name: "Test",
  components: {},
  data() {
    let checkInput = (rules, value, callback) => {
      const regex = new RegExp(
        "^([\u4E00-\uFA29]|[\uE7C7-\uE7F3]|[a-zA-Z ]|[，、？。!,?.！])+$"
      );
      if (!regex.test(value) || !value) {
        callback(new Error("请输入中英文语句"));
      } else {
        callback();
      }
    };
    return {
      checkInputValid: checkInput,
      newTermDetail: {
        questions: [{ s_question: "11111" }, { s_question: "22222" }],
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
