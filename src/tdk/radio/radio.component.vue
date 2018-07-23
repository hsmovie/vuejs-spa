<template>
  <div :class="isActive" @click="clicked">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    props: {
      value: [String, Object, Array, Number],
      tValue: [String, Object, Array, Number],
      activeClass: String
    },
    created () {
      this.changed(this.value)
    },
    methods: {
      changed (val) {
        this.$emit('changed', this.tValue === val, this.tValue)
      },
      clicked () {
        if (this.tValue !== this.value) {
          this.$emit('input', this.tValue)
        }
      }
    },
    computed: {
      isActive () {
        return this.value === this.tValue ? this.activeClass : ''
      }
    },
    watch: {
      value: function (val) {
        this.changed(val)
      }
    }
  }
</script>

<style scoped lang="scss">
</style>
