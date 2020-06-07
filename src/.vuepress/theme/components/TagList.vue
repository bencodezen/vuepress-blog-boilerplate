<template>
  <ul class="list">
      <li class="list-item" v-for="tag in tags">
        <a href="#" @click="$emit('tag-click', tag)">
          <span class="tag tag-accent">{{ tag }}</span>                
        </a>
      </li>
    </ul>
</template>

<script>
export default {
  props: ['tags']
}
</script>

<style lang="stylus" scoped>
.list
  display flex
  list-style none
  margin 0
  padding 0

.list-item
  margin-right 4px

.tag
  display inline-block
  margin-right 0.8em
  font-size .75rem
  font-weight 700
  line-height 1
  text-align center
  white-space nowrap
  vertical-align baseline
  border-radius .25rem

.tag-accent  
  color #42b983
</style>