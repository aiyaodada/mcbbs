<template>
  <div class="box df jcsb fdrr">
    <el-card class="box-card  asc">
      <h2 class="title">登录</h2>
      <el-form ref="ruleForm" :model="form" :rules="rules">
        <el-form-item label="账号" prop="userName">
          <el-input v-model="form.userName" placeholder="账号"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="form.password" placeholder="密码"></el-input>
        </el-form-item>
        <el-form-item class="box-btn df jcsb fdrr">
          <el-button type="primary" @click="login()">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      form: {
        userName: '',
        password: ''
      },
      rules: {
        userName: [
          {required: true, message: '请输入账号', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '请输入密码', trigger: 'blur'}
        ],
      }
    }
  },
  mounted() {
  },
  methods: {
    async login(formName) {
      // await this.$confirm(`是否登录?`);
      // 如果没正常输入数据报错是正常的
      await this.$refs.ruleForm.validate();
      let data = await this.$request.post("/sysUser/login", this.form)
      this.$setToken(data.token)
      this.$message.success('登录成功');
      await this.$router.push('/');
    }
  }
}
</script>

<style scoped>
.box {
  width: 100%;
  height: 100%;
}

.box-card {
  width: 480px;
  margin-right: 40px;
}

.title {
  margin: 10px 0px;
  text-align: center;
}
</style>