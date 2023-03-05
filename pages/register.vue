<template>
  <div class="main">
    <div class="title">
      <a href="/login">登录</a>
      <span>·</span>
      <a class="active" href="/register">注册</a>
    </div>

    <div class="sign-up-container">
      <el-form ref="userForm" :model="params">
        <el-form-item
          class="input-prepend restyle"
          prop="nickname"
          :rules="[
            { required: true, message: '请输入你的昵称', trigger: 'blur' },
          ]"
        >
          <div>
            <el-input
              type="text"
              placeholder="你的昵称"
              v-model="params.nickname"
            />
            <i class="iconfont icon-user" />
          </div>
        </el-form-item>

        <el-form-item
          class="input-prepend restyle no-radius"
          prop="mobile"
          :rules="[
            { required: true, message: '请输入手机号码', trigger: 'blur' },
            { validator: checkPhone, trigger: 'blur' },
          ]"
        >
          <div>
            <el-input
              type="text"
              placeholder="手机号"
              v-model="params.mobile"
            />
            <i class="iconfont icon-phone" />
          </div>
        </el-form-item>

        <el-form-item
          class="input-prepend restyle no-radius"
          prop="code"
          :rules="[
            { required: true, message: '请输入验证码', trigger: 'blur' },
          ]"
        >
          <div
            style="width: 100%; display: block; float: left; position: relative"
          >
            <el-input type="text" placeholder="验证码" v-model="params.code" />
            <i class="iconfont icon-phone" />
          </div>
          <div
            class="btn"
            style="position: absolute; right: 0; top: 6px; width: 40%"
          >
            <a
              href="javascript:"
              type="button"
              @click="getCodeFun()"
              :value="codeTest"
              style="border: none; background-color: none"
              >{{ codeTest }}</a
            >
          </div>
        </el-form-item>

        <el-form-item
          class="input-prepend"
          prop="password"
          :rules="[{ required: true, message: '请输入密码', trigger: 'blur' }]"
        >
          <div>
            <el-input
              type="password"
              placeholder="设置密码"
              v-model="params.password"
            />
            <i class="iconfont icon-password" />
          </div>
        </el-form-item>

        <div class="btn">
          <input
            type="button"
            class="sign-up-button"
            value="注册"
            @click="submitRegister()"
          />
        </div>
        <p class="sign-up-msg">
          点击 “注册” 即表示您同意并愿意遵守简书
          <br />
          <a target="_blank" href="https://baike.baidu.com/item/%E7%99%BE%E5%BA%A6%E7%99%BE%E7%A7%91%E7%94%A8%E6%88%B7%E5%8D%8F%E8%AE%AE/22165389?fromModule=search-result_lemma-recommend"
            >用户协议</a
          >
          和
          <a target="_blank" href="https://baike.baidu.com/item/%E7%99%BE%E5%BA%A6%E7%99%BE%E7%A7%91%E9%9A%90%E7%A7%81%E6%94%BF%E7%AD%96/22661925?fromModule=search-result_lemma-recommend">隐私政策</a>
          。
        </p>
      </el-form>
      <!-- 更多注册方式 -->
      <div class="more-sign">
        <ul>
          <li>
           
          </li>
          <li>
         
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import '~/assets/css/sign.css'
  import '~/assets/css/iconfont.css'

  import user from '@/api/user'

  export default {
    layout: 'sign',
    data() {
      return {
        params: { //封装注册输入数据
          mobile: '',
          code: '',  //验证码
          nickname: '',
          password: ''
        },
        sending: true,      //是否发送验证码
        second: 60,        //倒计时间
        codeTest: '获取验证码'
      }
    },
    methods: {
     
       //注册提交的方法
       submitRegister() {
         user.registerMember(this.params)
          .then(response => {
            //提示注册成功
              this.$message({
                type: 'success',
                message: "注册成功"
              })
            //跳转登录页面
            this.$router.push({path:'/login'})
              
          })
       },
       timeDown() {
        let result = setInterval(() => {
          --this.second;
          this.codeTest = this.second
          if (this.second < 1) {
            clearInterval(result);
            this.sending = true;
            //this.disabled = false;
            this.second = 60;
            this.codeTest = "获取验证码"
          }
        }, 1000);

      },
       //通过输入手机号发送验证码
       getCodeFun() {
         user.sendCode(this.params.mobile)
          .then(response => {
              this.sending = false
              //调用倒计时的方法
              this.timeDown()
          })
       },

      checkPhone (rule, value, callback) {
        //debugger
        if (!(/^1[34578]\d{9}$/.test(value))) {
          return callback(new Error('手机号码格式不正确'))
        }
        return callback()
      }
    }
  }
</script>
