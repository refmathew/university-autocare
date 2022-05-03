<template>
  <div class="contact-detail">
    <font-awesome class="contact-detail__icon" :icon="['fas', iconName]"></font-awesome>
    <div class="contact-detail__details" v-html="details"></div>
  </div>
</template>

 <script lang="js">
export default {
  props: {
    iconName: String,
    details: String
  }
}
</script>
