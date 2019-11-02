<template>
	<div class="theme-default-content">  
    <div 
      v-if="selectedTags.length > 0"
      class="filtered-heading"
    >
      <h2>Filtered by {{ selectedTags.join(',') }}</h2>
      <button
        type="button"
        @click="resetTags"
        class="btn clear-filter-btn"
      >
        Clear filter
      </button>
    </div>
    <ul class="blog-list">
      <li v-for="(item, index) in filteredList"
        class="blog-list__item">
        <PostPreview v-on:add-tag="addTag($event)"
          v-show="index >= currentPage * pageSize && index < (currentPage + 1) * pageSize"
          :item="item"
          v-on:tag-click="console.log($event)"
        />
      </li>
    </ul>

    <div class="pagination">
      <div>
        <a href="#"
          v-show="currentPage > 0" 
          @click="previousPage"
          class="button--pagination" 
        >
          Newer Posts
        </a>
      </div>
      <div>
        <a href="#"
          v-show="currentPage < totalPages - 1"
          @click="nextPage"
          class="button--pagination"
        >
          Older Posts
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import PostPreview from './PostPreview'

export default {
    components: { PostPreview },
    props: {
        pages: {
            type: Array,
            default: []
        },
        pageSize: {
            type: Number,
            default: 5
        },
        startPage: {
            type: Number,
            default: 0
        }
    },
    data() {
        return {
            currentPage: Math.ceil(this.startPage / this.pageSize),
            selectedTags: []
        }
    },
    computed: {
        filteredList() {
            if (this.pages) {
                
                return this.pages.filter(item => {
                    const isBlogPost = !!item.frontmatter.blog
                    const isReadyToPublish = new Date(item.frontmatter.date) <= new Date()
                     // check for locales
                    let isCurrentLocale = true;
                    if(this.$site.locales) {
                        const localePath = this.$route.path.split('/')[1] || "";
                        isCurrentLocale = item.relativePath.startsWith(localePath);   
                    }
                    // check if tags contain all of the selected tags
                    const hasTags = !!item.frontmatter.tags && this.selectedTags.every((tag) => item.frontmatter.tags.includes(tag))

                    if (!isBlogPost || !isReadyToPublish || (this.selectedTags.length > 0 && !hasTags) || !isCurrentLocale){ 
                        return false
                    }

                    return true
                    
                }).sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date))
            }
        },

        totalPages() {
            
            return Math.ceil(this.filteredList.length / this.pageSize)
        },
    },

    mounted() {
        this.currentPage =  Math.min(Math.max(this.currentPage, 0), this.totalPages - 1)
    },

    methods: {
        nextPage() {
            this.currentPage = this.currentPage >= this.totalPages - 1 ? this.totalPages - 1 : this.currentPage + 1
        },
        previousPage() {
            this.currentPage = this.currentPage < 0 ? 0 : this.currentPage - 1
        },
        addTag(tag) {
            const tagExists = this.selectedTags.some(item => {
                return item === tag
            })

            if (!tagExists){
                this.selectedTags = this.selectedTags.concat(tag)
            }
        },
        removeTag(tag) {
            this.selectedTags.filter(t => t != tag)
        },
        resetTags(){
            this.selectedTags = []
        }
    }
}
</script>

<style lang="stylus" scoped>
.blog-list
    padding 0
    margin 0

.blog-list__item
    list-style-type none

.blog-list__tags
    margin-bottom 15px

.button--pagination
    text-decoration none
    color lighten($textColor, 25%)
    &:hover
        text-decoration none !important
        border-bottom 2px solid $accentColor

.clear-filter-btn
    align-self center
    margin-left 20px

.filtered-heading
    display flex

.pagination
    display flex
    justify-content space-between
</style>
