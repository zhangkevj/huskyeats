<template>
  <el-main class>
    <h1>{{ vendorName }}</h1>
    <el-row>
      <el-col :md="24" v-if="accepted">
        <p>Please show this code to the merchant to complete your payment.</p>
        <qrcode :value="qrCodeValue" :options="{ width: 200 }"></qrcode>
      </el-col>
      <el-col :md="24" v-else>
        <p>Enter amount you want to pay to merchant here in USD.</p>
        <el-input-number v-model="cost" :precision="2" :step="0.1"></el-input-number>
        <el-button @click="checkout" type="primary" icon="el-icon-check" circle></el-button>
      </el-col>
    </el-row>
  </el-main>
</template>

<script>
export default {
  data() {
    return {
      accepted: false,
      balance: 100.0,
      cost: 0.0
    };
  },
  mounted() {
    this.cost = 0;
    this.accepted = false;
  },
  computed: {
    qrCodeValue() {
      return this.vendorName + ":" + this.cost;
    },
    vendorName() {
      return this.$route.params.vendorName;
    },
    formattedCost() {
      let nf = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
      });

      return nf.format(this.cost);
    }
  },
  methods: {
    checkout() {
      if (!this.cost || this.cost < 0.1) {
        this.$alert("Amount not entered", "Error", {
          confirmButtonText: "OK"
        });
        return;
      }

      this.$confirm(
        `You are about to send ${this.formattedCost} to the merchant ${this.vendorName}!`,
        "Please confirm payment",
        {
          confirmButtonText: "Pay",
          cancelButtonText: "Cancel",
          type: "warning"
        }
      )
        .then(() => {
          this.$message({
            type: "success",
            message: "Please show this code to the merchant."
          });
          this.accepted = true;
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "Payment not sent."
          });
        });
    }
  }
};
</script>
<style scoped>
.wallet-balance {
  font-size: 64px !important;
}
</style>
<style global>
.el-message-box {
  max-width: 90%;
  width: 90%;
}
.el-message-box__message p {
  color: #000;
}
</style>
