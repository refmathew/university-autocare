<template>
  <g-link class="blog-card" :to="blogPath">
    <div class="blog-card__details">
      <div class="blog-card__title">{{ blogTitle }}</div>
      <div class="blog-card__summary">{{ truncatedSumm }}</div>
      <div class="blog-card__meta-info">
        <span class="blog-card__date">{{ `${blogDate} &bull;` }}</span>
        <span class="blog-card__read-time">{{ ` ${blogReadTime} min read` }}</span>
      </div>
    </div>
    <g-image class="blog-card__feature-img" :src="blogFeatureImg" alt="Blog feature image" />
  </g-link>
</template>

 <script>
export default {
  props: {
    blogTitle: String,
    blogSummary: String,
    blogDate: String,
    blogReadTime: Number,
    blogFeatureImg: String,
    blogPath: String
  },
  computed: {
    truncatedSumm() {
      return this.blogSummary.slice(0, 150) + '...'
    }
  }
}
</script>
