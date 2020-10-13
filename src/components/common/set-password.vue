<template>
    <div class="password">
        <Poptip transfer trigger='focus' placement='right' style="width: 100px">
            <Input type='password' v-model="curpwd" :size="size" :placeholder="placeholder" :disabled="disabled" :readonly="readonly" password :maxlength="maxlength" @on-change="pwdChange"/>
            <div class="tip">
                <div class="words">密码强度 : {{ security }}</div>
                <Progress :percent="securityValue" :status="status" hide-info style="margin: 5px;" />
                <br/>请输入至少6位数长度的
                <br/>密码，请不要使用简单密码
            </div>
        </Poptip>
    </div>
</template>

<script>
export default {
  name: 'setPassword',
  props: {
    value: String,
    size: String,
    placeholder: {
      type: String,
      default: '请输入密码，长度为6-20个字符'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    maxlength: {
      type: Number,
      default: 20
    }
  },
  data () {
    return {
      curpwd: this.value,
      tipStyle: 'password-tip-none',
      securityValue: 0,
      status: 'normal',
      security: '无',
      level: 0
    }
  },
  methods: {
    judgeLevle (securityValue) {
      let level = 0
      if (/\d/.test(securityValue)) {
        level++
      }
      if (/[a-z]/.test(securityValue)) {
        level++
      }
      if (/[A-Z]/.test(securityValue)) {
        level++
      }
      if (/\W/.test(securityValue)) {
        level++
      }
      if (securityValue.length >= 10) {
        level++
      }
      this.level = level
      return level
    },
    securityChange () {
      if (!this.curpwd) {
        this.tipStyle = 'password-tip-none'
        this.security = '无'
        this.securityValue = 0
      }

      let level = this.judgeLevle(this.curpwd)
      if (level <= 1) {
        this.status = 'wrong'
        this.tipStyle = 'password-tip-weak'
        this.security = '弱'
        this.securityValue = 33
      } else if (level >= 2 && level <= 4) {
        this.status = 'normal'
        this.tipStyle = 'password-tip-middle'
        this.security = '中'
        this.securityValue = 66
      } else {
        this.status = 'success'
        this.tipStyle = 'password-tip-strong'
        this.security = '强'
        this.securityValue = 100
      }
    },
    pwdChange (v) {
      this.securityChange()
      this.$emit('input', this.curpwd)
      this.$emit('on-change', this.curpwd, this.level, this.security)
    },
    setCurrentPwd (pwd) {
      if (pwd === this.curpwd) {
        return
      }
      this.curpwd = this.value
      this.securityChange()
      this.$emit('on-change', this.curpwd, this.level, this.security)
    }
  },
  watch: {
    value (val) {
      this.setCurrentPwd(val)
    }
  }
}
</script>

<style lang="less">
.password .ivu-poptip,
.password .ivu-poptip-rel {
    display: block;
}
.password-tip-none {
    padding: 1vh 0;
}

.password-tip-weak {
    padding: 1vh 0;
    .words {
        color: red
    }
}

.password-tip-middle {
    padding: 1vh 0;

    .words {
        color: peru;
    }
}

.password-tip-strong {
    padding: 1vh 0;

    .words {
        color: green;
    }
}
</style>
