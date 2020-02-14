<template>
  <el-main class="backdrop">
    <h1 class="header-text">What are you hungry for?</h1>
    <br />
    <el-select
      v-model="search"
      filterable
      size="large"
      placeholder="Search for a restaurant"
      @change="redirectToStorefront"
      style="width: 100%"
    >
      <el-option
        v-for="item in searchOptions"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      ></el-option>
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
        { value: "lander-hall-1", label: "Lander Hall" }
      ]
    };
  },
  methods: {
    redirectToStorefront(vendorName) {
      this.$router.push({
        name: "storefront",
        params: { vendorName: vendorName }
      });
    }
  }
};
</script>
<style>
h1 {
  padding-top: 100 vh;
}

.header-text {
  font-weight: bold;
   text-shadow: 2px 2px #333;
  font-size: 48px !important;
  letter-spacing: -3px !important;
}

h1,
p {
  text-align: left;
}
</style>
