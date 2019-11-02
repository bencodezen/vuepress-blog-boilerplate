<template>
  <div class="theme-default-content">
    <article>
      <header class="header">
        <section>
          <TagList :tags="$frontmatter.tags" />
        </section>
        <h1 class="title">{{ $page.title }}</h1>
        <template v-if="$page.frontmatter.excerpt">
          <p class="excerpt">{{ $page.frontmatter.excerpt }}</p>
        </template>
        <section>
          <PostMeta :post="$page" show-updated/>
        </section>
      </header>

      <section>
        <Content class="body" :custom="false"/>
      </section>

      <div class="page-edit">
        <div
          class="edit-link"
          v-if="editLink"
        >
          <a
            :href="editLink"
            target="_blank"
            rel="noopener noreferrer"
          >{{ editLinkText }}</a>
          <OutboundLink/>
        </div>
      </div>

      <div class="page-nav" v-if="prev || next">
        <p class="inner">
          <span
            v-if="prev"
            class="prev"
          >
            ←
            <router-link
              v-if="prev"
              class="prev"
              :to="prev.path"
            >
              {{ prev.title || prev.path }}
            </router-link>
          </span>

          <span
            v-if="next"
            class="next"
          >
            <router-link
              v-if="next"
              :to="next.path"
            >
              {{ next.title || next.path }}
            </router-link>
            →
          </span>
        </p>
      </div>

      <slot name="bottom"/>
    </article>
  </div>
</template>

<script>
import moment from 'moment'
import TagList from './TagList'
import PostMeta from './PostMeta'
import { resolvePage, normalize, outboundRE, endingSlashRE } from '../util'

export default {
  components: { TagList, PostMeta },
  props: ['sidebarItems'],

  computed: {
    prev () {
      const prev = this.$page.frontmatter.prev
      if (prev === false) {
        return
      } else if (prev) {
        return resolvePage(this.$site.pages, prev, this.$route.path)
      } else {
        return resolvePrev(this.$page, this.sidebarItems)
      }
    },

    next () {
      const next = this.$page.frontmatter.next
      if (next === false) {
        return
      } else if (next) {
        return resolvePage(this.$site.pages, next, this.$route.path)
      } else {
        return resolveNext(this.$page, this.sidebarItems)
      }
    },

    editLink () {
      if (this.$page.frontmatter.editLink === false) {
        return
      }
      const {
        repo,
        editLinks,
        docsDir = '',
        docsBranch = 'master',
        docsRepo = repo
      } = this.$site.themeConfig

      let path = normalize(this.$page.path)
      if (endingSlashRE.test(path)) {
        path += 'README.md'
      } else {
        path += '.md'
      }
      if (docsRepo && editLinks) {
        return this.createEditLink(repo, docsRepo, docsDir, docsBranch, path)
      }
    },

    editLinkText () {
      return (
        this.$themeLocaleConfig.editLinkText ||
        this.$site.themeConfig.editLinkText ||
        `Edit this page`
      )
    },
  },

  methods: {
    createEditLink (repo, docsRepo, docsDir, docsBranch, path) {
      const bitbucket = /bitbucket.org/
      if (bitbucket.test(repo)) {
        const base = outboundRE.test(docsRepo)
          ? docsRepo
          : repo
        return (
          base.replace(endingSlashRE, '') +
           `/${docsBranch}` +
           (docsDir ? '/' + docsDir.replace(endingSlashRE, '') : '') +
           path +
           `?mode=edit&spa=0&at=${docsBranch}&fileviewer=file-view-default`
        )
      }

      const base = outboundRE.test(docsRepo)
        ? docsRepo
        : `https://github.com/${docsRepo}`

      return (
        base.replace(endingSlashRE, '') +
        `/edit/${docsBranch}` +
        (docsDir ? '/' + docsDir.replace(endingSlashRE, '') : '') +
        path
      )
    }
  }
}

function resolvePrev (page, items) {
  return find(page, items, -1)
}

function resolveNext (page, items) {
  return find(page, items, 1)
}

function find (page, items, offset) {
  const res = []
  items.forEach(item => {
    if (item.type === 'group') {
      res.push(...item.children || [])
    } else {
      res.push(item)
    }
  })
  for (let i = 0; i < res.length; i++) {
    const cur = res[i]
    if (cur.type === 'page' && cur.path === page.path) {
      return res[i + offset]
    }
  }
}
</script>

<style lang="stylus">
.body
  margin-bottom 3rem
</style>

<style lang="stylus" scoped>

.header
  padding-bottom 1.5rem
  margin-bottom 1.5rem

.title
  font-size 3.2rem
  margin 0 0 .4em
  margin-bottom .5rem

.excerpt
  font-size 1.2rem
  color lighten($textColor, 25%)
  margin 0 0 .5em
  line-height 1.4em
  margin-bottom 1rem

.page-edit
  padding-top 1rem
  padding-bottom 1rem
  padding-left 0
  padding-right 0
  overflow auto
  .edit-link
    display inline-block
    a
      color lighten($textColor, 25%)
      margin-right .25rem

@media (max-width: $MQMobile)
  .page-edit
    .edit-link
      margin-bottom .5rem
    .last-updated
      font-size .8em
      float none
      text-align left

@media (max-width: $MQMobileNarrow) {
  .title {
    font-size: 2.441rem;
  }
}
</style>
