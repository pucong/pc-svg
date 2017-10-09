<template>
  <div class="login-box">
    <el-form class="login-form" :model="ruleForm" :rules="rules" ref="ruleForm" :action="action" method="post">
      <el-form-item class="login-infp">
        <div v-if="logout">
          <i class="el-icon-circle-check"/>{{ $t('login.outRight') }}
        </div>
        <div v-if="error">
          <i class="el-icon-circle-check"/>{{ $t('login.loginErr') }}
        </div>
      </el-form-item>
      <el-form-item prop="username">
        <el-input placeholder=" $t('login.inputUser') " v-model="ruleForm.username" name="username">
          <template slot="prepend"><i class="el-icon-edit"></i></template>
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input placeholder=" $t('login.inputPassword') " type="password" v-model="ruleForm.password" name="password">
          <template slot="prepend"><i class="el-icon-edit"></i></template>
        </el-input>
      </el-form-item>
      <el-form-item>
        <div class="login-input">
          <el-button class="login-btn" type="primary" @click="loginButtonClick">
            {{ $t('login.loginButton') }}
          </el-button>
          <!--<el-button class="login-btn" type="primary" native-type="submit" v-t="'login.loginButton'"></el-button>-->
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import superagent from '@/util'

export default {
  name: 'login',
  data: function () {
    return {
      logout: false,
      error: false,
      ruleForm: {
        username: 'admin',
        password: 'admin',
        msg: this.$t('login.loginButton')
      },
      rules: {
        username: [
          {required: true, message: '请填写账号', trigger: 'blur'},
          {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '请填写密码', trigger: 'blur'},
          {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
        ]
      },
      action: '/loginValid'
    }
  },
  methods: {
    loginButtonClick () {
      let result = superagent.ajaxFrom({
        url: '/loginValid',
        params: this.ruleForm
      })
      if (result.res.success) {
        console.log('成功')
        console.log(result.res.result)
      } else {
        console.log(result.res.result)
      }
    }
  }
}
</script>

<style scoped>
  .login-box {
    width: 295px;
    height: 300px;
    padding: 13px 14px 15px;
    top: 25%;
    left: 55%;
    right: 30%;
    text-align: left;
    position: absolute;
    z-index: 2;
    border-left: 1px solid #e8e8e8;
    border-right: 1px solid #e8e8e8;
    border-bottom: 1px solid #e8e8e8;
    border-top: 2px solid #f40;
    background-color: #fafafa;
  }

  .login-input {
    margin-top: 30px;
  }

  .login-btn {
    width: 100%;
    background: #f40;
    border-color: #f40;
    font-size: 16px;
    font-weight: 700;
    font-family: "PingFang SC";
  }

  .login-form {
    /*padding-top: 40px;*/
  }

  .login-infp {
    color:#f40;
  }
</style>
