<template>
  <Layout bg-name="hero-3.jpg" :is-home-page="false" heading-text="Blogs">
    <div class="blogs-wrapper">
      <section class="blogs page-section">
        <blog-card
          v-for="post in $page.posts.edges"
          :key="post.node.title"
          :blog-title="post.node.title"
          :blog-path="post.node.path"
          :blog-summary="post.node.summary"
          :blog-date="post.node.date"
          :blog-read-time="post.node.readTime"
          :blog-feature-img="post.node.featureImg"
        ></blog-card>
      </section>
    </div>
  </Layout>
</template>

<page-query>
  query Post {
    posts: allPost {
      edges{
        node{
          path
          title
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
  metaInfo: {
    title: 'Blogs'
  }
}
</script>
