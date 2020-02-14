<template>
  <el-container>
    <el-header>
      <el-row :gutter="10">
        <el-col :md="8" style="text-align: left"></el-col>
        <el-col :md="16" style="text-align: right">
          <div class="grid-content" style="font-size: 14px">
            <el-button type="plain" size="mini" @click="$router.push('/wallet')">My Account</el-button>
          </div>
        </el-col>
      </el-row>
    </el-header>
    <el-main>
      <el-row :gutter="10">
        <el-col :md="8" style="text-align: center">
          <div class="grid-content">
              <img src="./assets/ein.jpg" class="logo-img" @click="redirectToHome" />
              <br />
              <img src="./assets/logo-text.png" alt="DAWGFOOD" @click="redirectToHome" />
          </div>
        </el-col>
        <el-col :md="16">
          <transition>
            <router-view></router-view>
          </transition>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      me: {
        name: "-"
      },
      search: "",
      searchOptions: [
        { value: "district-market", label: "District Market" },
        { value: "lander-hall-1", label: "Lander Hall" }
      ]
    };
  },
  mounted() {
    if (localStorage.user) {
      this.me.name = localStorage.user;
    } else {
      this.me.name = "Guest";
    }
  },
  methods: {
    redirectToHome() {
      if (localStorage.user) { this.$router.push("/home") } else { this.$router.push("/") }
    }
  }
};
</script>

<style scoped>
.dawgfood {
  font-size: 24px;
  text-transform: uppercase;
  padding: 15px;
  margin-bottom: 15px;
}
.logo-img {
  border-radius: 128px;
  max-width: 128px;
  max-height: 128px;
}
</style>
<style>
h1,
h2,
h3 {
  margin: 0;
}
/*
.backdrop {
  min-height: 500px;
}
*/
.backdrop h1 {
  font-size: 3rem;
  color: #fff;
}

* {
  font-family: Helvetica, sans-serif;
}

body,
html {
  margin: 0;
  padding: 0;
  font-family: Helvetica, sans-serif;
  /* background: url(assets/backdrop.jpg) no-repeat; */
  background-size: cover;
  min-height: 500px;
}

body {
  background-color: #000;
  background-image: linear-gradient(
      315deg,
      rgba(72, 84, 97, 1),
      rgba(40, 49, 59, 0.5)
    ),
    url(assets/backdrop.jpg);
  background-size: cover, cover;
  background-position: bottom right, bottom right;
  min-height: 100vh;
  height: 100%;
}

body,
p,
h1,
h2 {
  color: #fff;
}

.el-header,
.el-footer {
  color: #333;
  font-size: 32px;
  line-height: 60px;
  text-align: center;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
}

.el-main {
}

body > .el-container {
  margin: 0 auto;
  margin-bottom: 40px;
  max-width: 1600px;
}

.el-button {
  font-family: Helvetica, sans-serif;
}
</style>
