<template>
  <div>
    <div>
      <slot name="header"></slot>
    </div>
    <transition name="fade"
                v-on:enter="enter"
                v-on:after-enter="afterEnter"
                v-on:before-leave="beforeLeave">
      <div v-if="isSlideOpened" class="expandable-body">
        <slot name="body"></slot>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    //  test
    data () {
      return {
        bodyHeight: Number,
        isSlideOpened: false,
        offsetHeight: 0
      }
    },
    methods: {
      open () {
        this.isSlideOpened = true
        this.$emit('toggleHook', this.isSlideOpened)
      },
      close () {
        this.isSlideOpened = false
        this.$emit('toggleHook', this.isSlideOpened)
      },
      toggle () {
        if (this.isSlideOpened) {
          this.close()
        } else {
          this.open()
        }
      },
      enter: function (el) {
        el.style.height = 'auto'
        const endHeight = getComputedStyle(el).height
        el.style.height = '1px'
        this.offsetHeight = el.offsetHeight
        el.style.height = endHeight
      },
      afterEnter: function (el) {
        el.style.height = 'auto'
      },
      beforeLeave: function (el) {
        el.style.height = getComputedStyle(el).height
        this.offsetHeight = el.offsetHeight
        el.style.height = '0px'
      }
    },
    mounted () {
    }
  }
</script>

<style scoped>
  .expandable-body {
    transition: all .1s ease;
    overflow: hidden;
  }
</style>
