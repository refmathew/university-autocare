<template>
  <div class="service-card">
    <div class="service-card__icon">
      <font-awesome :icon="['fas', iconName]"></font-awesome>
    </div>
    <div class="service-card__title">{{ title }}</div>
    <div class="service-card__body">{{ body }}</div>
  </div>
</template>

 <script >
export default {
  props: {
    iconName: String,
    title: String,
    body: String,
  }
}
</script>

