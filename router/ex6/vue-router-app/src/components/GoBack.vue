<template>
  <span class="go-back">
    <button @click="goBack">Go back</button>
  </span>
</template>
<script>
export default {
  methods: {
    goBack() {
      return this.$router.go(-1);
    }
  }
};
</script>
<style scoped>
.go-back {
  display: flex;
  justify-content: center;
}
.go-back button, .go-back button:focus {
  min-width: 100px;
  height: 36px;
  font-size: 16px;
  background: #fafafa;
  border: 1px solid rgba(255, 0, 255, 0.6);
  border-radius: 6px;
  cursor: pointer;
  outline: none;
}
.go-back button:hover {
    opacity: 0.7;
}
</style>
