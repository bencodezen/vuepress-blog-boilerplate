<template>
	<article class="post-preview">
    <TagList :tags="item.frontmatter.tags" v-on:tag-click="$emit('add-tag', $event)" />
    <router-link class="link" :to="item.path">
      <header class="header">
        <h2 class="title">{{ item.frontmatter.title }}</h2>
      </header>
      <section v-if="item.frontmatter.excerpt" class="excerpt">
        <p>{{ item.frontmatter.excerpt }}</p>
      </section>
    </router-link>
    <footer>
      <PostMeta :post="item" />
    </footer>
  </article>
</template>

<script>
import TagList from './TagList'
import PostMeta from './PostMeta'

export default {
  name: 'PostPreview',
  components: { TagList, PostMeta },
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="stylus" scoped>
.post-preview
  margin 60px 0

.link, .link:hover
  display block
  text-decoration none !important
  color unset
  
.title
  font-size 2.2rem
  margin 0 0 0.4em
  padding-bottom unset

.excerpt
  font-weight 400
  color lighten($textColor, 25%)
</style>
