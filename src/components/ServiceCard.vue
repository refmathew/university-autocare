<template>
  <div class="service-card">
    <div class="service-card__icon">
      <font-awesome :icon="['fas', faIcon]"></font-awesome>
    </div>
    <div class="service-card__title">{{ name }}</div>
    <div class="service-card__body">{{ def }}</div>
  </div>
</template>

 <script >
export default {
  props: {
    name: String,
    faIcon: String,
    def: String,
  }
}
</script>

