<template>
<div class="m-login">
  <el-row>
    <el-col :span="10" :offset="6">
      <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
      <el-form-item label="账号" prop="age">
        <el-input v-model="ruleForm2.age"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click.native.prevent="handleSubmit2">登录</el-button>
        <!-- <el-button @click.native.prevent="handleReset2">重置</el-button> -->
      </el-form-item>
    </el-form>
  </el-col>
</el-row>
  
</div>
</template>

<script>
  export default {
    data() {
      var checkAge = (rule, value, callback) => {
        var age = parseInt(value, 10);

        setTimeout(() => {
          if (!Number.isInteger(age)) {
            callback(new Error('请输入数字值'));
          } else{
            if (age < 18) {
              callback(new Error('必须年满18岁'));
            } else {
              callback();
            }
          } 
        }, 1000);
      };
      var validaePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
        }
      };
      var validaePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm2.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm2: {
          pass: '',
          checkPass: '',
          age: ''
        },
        rules2: {
          pass: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { validator: validaePass }
          ],
          checkPass: [
            { required: true, message: '请再次输入密码', trigger: 'blur' },
            { validator: validaePass2 }
          ],
          age: [
            { required: true, message: '请填写年龄', trigger: 'blur' },
            { validator: checkAge, trigger: 'change' }
          ]
        }
      };
    },
    methods: {
      handleReset2() {
        this.$refs.ruleForm2.resetFields();
      },
      handleSubmit2(ev) {
        this.$refs.ruleForm2.validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
    }
  }
</script>

<style scoped>
.m-login{
  margin-top: 120px;
}
</style>