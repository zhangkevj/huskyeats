<template>
  <el-main class="backdrop">
    <h1>What are you hungry for?</h1>
    <br>
    <p style="color: #FFF">(This is Home.vue)</p>
    <br>
    <el-select
      v-model="search"
      filterable
      size="large"
      placeholder="Search for a restaurant"
      @change="redirectToStorefront"
    >
      <el-option
        v-for="item in searchOptions"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
    </el-select>
  </el-main>
</template>

<script>
export default {
  data() {
    return {
      search: "",
      searchOptions: [
        { value: "district-market", label: "District Market" },
        { value: "lander-hall-1", label: "Lander Hall" },
      ]
    };
  },
  methods: {
    redirectToStorefront(vendorName) {
      this.$router.push({ name: 'storefront', params: { vendorName: vendorName }})
    }
  }
};
</script>
<style>

h1 {
  padding-top: 100 vh;
}


h1, p {
  text-align: left;
}
/*
.backdrop {
  background: url(assets/backdrop.jpg) no-repeat;
  background-size: cover;
  background-color: #000;
  min-height: 500px;
  text-align: center;
}

.backdrop h1 {
  font-size: 3rem;
  color: #fff;
  text-align: center;
}
*/
</style>
