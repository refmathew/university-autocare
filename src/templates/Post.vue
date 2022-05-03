<template>
  <BlogLayout>
    <p>{{ $page.post.date }}</p>
    <div v-html="$page.post.content" />
  </BlogLayout>
</template>

<page-query>
query ($path: String!){
  post: post(path: $path){
    date
    content
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return{
      title: this.$page.post.title
    }
  }
}
</script>
