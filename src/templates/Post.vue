<template>
  <Layout :is-home-page="false">
    <div class="blog-wrapper page-section">
      <main class="blog">
        <h1 class="blog__title">{{ $page.post.title }}</h1>
        <div class="blog__meta-info">
          <span class="blog__date">{{ `${$page.post.date} &bull; ` }}</span>
          <span class="blog__time-to-read">{{ ` ${$page.post.readTime} min read` }}</span>
        </div>
        <g-image class="blog__feature-img" :src="$page.post.featureImg" alt="Blog feature image" />
        <div class="blog__content markdown-body" v-html="$page.post.content"></div>
      </main>
      <section class="blog-roll page-section">
        <hr class="blog-roll__hr" />
        <h2 class="blog-roll__heading">Read Next</h2>
        <div class="blog-roll__blog-cards">
          <template v-for="post in $page.allPost.edges">
            <blog-card
              v-if="$page.post.title != post.node.title"
              class="blog-roll__blog-card"
              :key="post.node.title"
              :blog-title="post.node.title"
              :blog-path="post.node.path"
              :blog-summary="post.node.summary"
              :blog-date="post.node.date"
              :blog-read-time="post.node.readTime"
              :blog-feature-img="post.node.featureImg.src"
            ></blog-card>
          </template>
        </div>
      </section>
    </div>
  </Layout>
</template>

<page-query>
query ($path: String!){
  post: post(path: $path){
    title
    date(format: "MMMM DD, YYYY")
    readTime
    content
    featureImg
  }
  allPost: allPost(sortBy:"date") {
    edges{
      node{
        title
        path
        summary
        date(format: "MMMM DD, YYYY")
        readTime
        featureImg
      }
    }
  }
  socials: allSocial{
    edges{
      node{
        name
        link
        faIcon
      }
    }
  }
}

</page-query>

<script>
import BlogCard from '../components/BlogCard.vue'

export default {
  components: {
    BlogCard
  },
  metaInfo() {
    return {
      title: this.$page.post.title
    }
  }
}
</script>
