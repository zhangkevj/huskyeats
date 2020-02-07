<template>
  <el-container>
    <el-header>
      <el-row :gutter="10">
        <el-col
          :md="8"
          style="text-align: left"
        >
          <div class="grid-content">
            &nbsp;
          </div>
        </el-col>
        <el-col
          :md="16"
          style="text-align: right"
        >
          <div
            class="grid-content"
            style="font-size: 14px"
          >
            <el-button type="info" plain>
            {{ me.name }}
            </el-button>
            <el-button type="plain" @click="$router.push('/wallet')">My Account</el-button>
          </div>
        </el-col>
      </el-row>
    </el-header>
    <el-main>
      <el-row :gutter="10">
        <el-col
          :md="8"
          style="text-align: center"
        >
          <div class="grid-content">
            <router-link to="/"><img
                src="./assets/ein.jpg"
                class="logo-img"
              ><br><br>
              Dawg Food</router-link>
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
        name: "Kevin owo"
      },
      search: "",
      searchOptions: [
        { value: "district-market", label: "District Market" },
        { value: "lander-hall-1", label: "Lander Hall" },
      ]
    };
  },
  methods: {}
};
</script>

<style scoped>
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
  background: url(assets/backdrop.jpg) no-repeat;
  background-size: cover;
  background-color: #000;
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
  background: url(assets/backdrop.jpg) no-repeat;
  background-size: cover;
  background-color: #000;
  min-height: 500px;
}

body,
p,
h1,
h2 {
  color: #FFF;
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
