<script>
export default {
    name: 'BlogPostList',
    props: {
        list: {
            type: Array,
            default: []
        }
    },
    data() {
        return {
            displayRange: {
                start: 0,
                end: 4
            },
            selectedTag: ''
        }
    },
    computed: {
        filteredList() {
            const props = this.$options.propsData

            if (props) {
                if (this.selectedTag) {
                    return props.list.filter(item => {
                        const isBlogPost = item.path.indexOf("/blog/") > -1
                        const isReadyToPublish = new Date(item.frontmatter.date) <= new Date()
                        const hasTags = item.frontmatter.tags && item.frontmatter.tags.includes(this.selectedTag)
                        
                        if (isBlogPost && isReadyToPublish && hasTags) {
                            return item
                        }
                    }).sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date))
                } else {
                    return props.list.filter(item => {
                        const isBlogPost = item.path.indexOf("/blog/") > -1
                        const isReadyToPublish = new Date(item.frontmatter.date) <= new Date()
                        
                        if (isBlogPost && isReadyToPublish) {
                            return item
                        }
                    }).sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date))
                }
                
            }
        },
    },
    methods: {
        nextPage() {
            this.displayRange.start += 5
            this.displayRange.end += 5
        },
        previousPage() {
            this.displayRange.start -= 5
            this.displayRange.end -= 5   
        }
    }
}
</script>

<template>
	<div>   
        <ul class="blog-list">
            <li v-for="(item, index) in filteredList"
                class="blog-list__item">
                <BlogPostPreview 
                    v-show="index >= displayRange.start && index <= displayRange.end"
                    :excerpt="item.frontmatter.excerpt" 
                    :path="item.path"
                    :publishDate="item.frontmatter.date"
                    :title="item.frontmatter.title"
                />
                <button 
                    v-for="(tag, index) in item.frontmatter.tags"
                    @click="selectedTag = tag"
                    :key="item.frontmatter.title + '-' + tag"
                >
                    {{ tag }}
                </button>
            </li>
        </ul>

        <div class="pagination">
            <button v-show="displayRange.start !== 0" 
                @click="previousPage"
                class="button--pagination"
                type="button" 
            >
                Previous
            </button>
            <button v-show="displayRange.end < filteredList.length"
                @click="nextPage"
                class="button--pagination"
                type="button"
            >
                Next
            </button>
        </div>
    </div>
</template>

<style scoped>
.blog-list {
	padding: 0;
	margin: 0;
}

.blog-list__item {
	list-style-type: none;
}

.button--pagination {
	background-color: #32c8cf;
	border-radius: 4px;
	color: #fff;
	font-size: 0.8rem;
	padding: 0.5rem 0.75rem;
	text-transform: uppercase;
	font-weight: 700;
	box-shadow: 0 0;
	transition: background-color 0.2s ease-in, color 0.2s ease-in;
}

.button--pagination:hover {
    background-color: #fff;
    border: 1px solid #32c8cf;
    border-radius: 4px;
    color: #32c8cf;
}

.pagination {
    text-align: center;
}
</style>
