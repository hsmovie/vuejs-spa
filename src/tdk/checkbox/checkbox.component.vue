<template>
  <div :class="isActive" @click="clicked" id="test">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    props: {
      value: Array,
      tValue: [String, Number, Object, Array],
      activeClass: String
    },
    created () {
      this.changed(this.value)
    },
    methods: {
      changed (val) {
        this.$emit('changed', val)
      },
      clicked () {
        const value = this.value
        const tValue = this.tValue
        const index = value.indexOf(tValue)
        if (index === -1) {
          value.push(tValue)
        } else {
          value.splice(index, 1)
        }
        this.$emit('input', value)
      }
    },
    computed: {
      isActive () {
        return this.value.indexOf(this.tValue) === -1 ? '' : 'active'
      }
    },
    watch: {
      value: function (val) {
        this.changed(val)
      }
    }
  }
</script>

<style scoped>
</style>
