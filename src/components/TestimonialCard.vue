<template>
  <div class="testimonial-card">
    <div class="img-wrapper">
      <g-image
        alt="Client photo"
        class="testimonial-card__img"
        :src="require(`../assets/img/${imgSrc}`)"
      />
    </div>
    <div class="testimonial-card__name">{{ name }}</div>
    <div class="testimonial-card__testimony">{{ testimony }}</div>
  </div>
</template>

<script lang='js'>
export default {
  props: {
    imgSrc: String,
    name: String,
    testimony: String
  }
}
</script>
