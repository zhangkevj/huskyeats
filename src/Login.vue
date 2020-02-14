<template>
  <div class="login">
    <el-card>
      <el-form
        class="login-form"
        :model="model"
        :rules="rules"
        ref="form"
        @submit.native.prevent="login"
      >
        <el-form-item prop="username">
          <el-input v-model="model.username" placeholder="Username" prefix-icon="fas fa-user"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="model.password"
            placeholder="Password"
            type="password"
            prefix-icon="fas fa-lock"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            :loading="loading"
            class="login-button"
            type="primary"
            native-type="submit"
            block
          >Login</el-button>
        </el-form-item>
      </el-form>
      <p style="color: #000">(use user/pass: kevin/kevin)</p>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      validCredentials: {
        username: "kevin",
        password: "kevin"
      },
      model: {
        username: "",
        password: ""
      },
      loading: false,
      rules: {
        username: [
          {
            required: true,
            message: "Username is required",
            trigger: "blur"
          },
          {
            min: 4,
            message: "Username length should be at least 5 characters",
            trigger: "blur"
          }
        ],
        password: [
          { required: true, message: "Password is required", trigger: "blur" },
          {
            min: 5,
            message: "Password length should be at least 5 characters",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    simulateLogin() {
      return new Promise(resolve => {
        setTimeout(resolve, 1800);
      });
    },
    async login() {
      let valid = await this.$refs.form.validate();
      if (!valid) {
        return;
      }
      this.loading = true;
      await this.simulateLogin();
      this.loading = false;
      if (
        this.model.username === this.validCredentials.username &&
        this.model.password === this.validCredentials.password
      ) {
        this.$message.success("Login successful!");
        localStorage.setItem("user", this.model.username)
        this.$router.push("/home");
      } else {
        this.$message.error("Username or password is invalid.");
      }
    }
  }
};
</script>
<style scoped>
.login {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-button {
  width: 100%;
  margin-top: 40px;
}
.login-form {
  width: 290px;
}
.forgot-password {
  margin-top: 10px;
}
</style>
<style>
.el-button--primary {
  background: #4b2e83;
  border-color: #4b2e83;
}

.el-button--primary:hover,
.el-button--primary.active,
.el-button--primary:focus {
  background: #4b2e83;
  border-color: #4b2e83;
}

.login .el-input__inner:hover {
  border-color: #4b2e83;
}

.login .el-input__prefix {
  background: #eeedea;
  left: 0;
  height: calc(100% - 2px);
  left: 1px;
  top: 1px;
  border-radius: 3px;
}

.login .el-input__prefix .el-input__icon {
  width: 30px;
}

.login .el-input input {
  padding-left: 35px;
}

.login .el-card {
  padding-top: 0;
}
a {
  color: #4b2e83;
  text-decoration: none;
}

a:hover,
a:active,
a:focus {
  color: #4b2e83;
}

.login p { text-align: center; font-size: 12px; margin: 0 }
.login .el-card {
  width: 340px;
  display: flex;
  justify-content: center;
}
</style>
