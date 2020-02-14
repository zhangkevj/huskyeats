<template>
  <el-main class="">
    <h1>Your funds</h1>
    <h2 class="wallet-balance">{{ formattedBalance }}</h2>
    <br>
    <el-button @click="$message('Not implemented yet!')">Deposit Funds</el-button>
  </el-main>
</template>

<script>
export default {
  data() {
    return {
      balance: 100.0
    };
  },
  computed: {
    formattedBalance() {
      let nf = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
      })

      return nf.format(this.balance);
    }
  },
  methods: {}
};
</script>
<style scoped>
.wallet-balance {
    font-size: 64px !important;
}
</style>