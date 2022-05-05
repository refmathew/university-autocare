<template>
  <Layout :is-home-page="false">
    <div class="blog-wrapper page-section ">
      <main class="blog">
        <h1 class="blog__title">{{ $page.post.title }}</h1>
        <div class="blog__meta-info">
          <span class="blog__date">{{ `${$page.post.date} &bull; ` }}</span>
          <span class="blog__time-to-read">{{ ` ${$page.post.timeToRead} min read` }}</span>
        </div>
        <g-image class="blog__feature-img" :src="$page.post.featureImg" />
        <div class="blog__content markdown-body" v-html="$page.post.content"></div>
      </main>
      <hr />
      <section class="read-next">
    <div class="blogs-wrapper">
      <section class="blogs page-section">
        <template v-for="post in $page.allPost.edges" >
        <blog-card
          v-if="$page.post.title != post.node.title"
          :key="post.node.title"
          :blog-title="post.node.title"
          :blog-path="post.node.path"
          :blog-summary="post.node.summary"
          :blog-date="post.node.date"
          :blog-time-to-read="post.node.timeToRead"
          :blog-feature-img="post.node.featureImg"
        ></blog-card>
        </template>
      </section>
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
    timeToRead
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
          timeToRead
          featureImg
        }
      }
    }
}

</page-query>

<script>
  import BlogCard from '../components/BlogCard.vue'

export default {
  components:{
    BlogCard
  },
  metaInfo() {
    return {
      title: this.$page.post.title
    }
  }
}
</script>
