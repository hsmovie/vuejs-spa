<template>
  <transition name="modal">
    <div class="modal-mask" :style="style" ref="modal" v-show="isOpened" @click="autoClose && close()">
      <div class="modal-container" ref="content" @click.stop>
        <slot></slot>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    props: {
      autoClose: {
        type: Boolean,
        default: true
      }
    },
    data () {
      return {
        isOpened: false,
        style: {}
      }
    },
    methods: {
      open () {
        this.isOpened = true
        document.getElementsByTagName('body')[0].style.overflow = 'hidden'
        setTimeout(() => {
          this.opened()
        })
      },
      close () {
        this.isOpened = false
        document.getElementsByTagName('body')[0].style.overflow = 'auto'
        setTimeout(() => {
          this.closed()
        })
      },
      opened () {
        const height = this.$refs.content.offsetHeight
        const modalHeight = this.$refs.modal.offsetHeight
        if (height > modalHeight) {
          this.style = {'align-items': 'start'}
        } else {
          this.style = {}
        }
        this.$emit('openHook')
      },
      closed () {
        this.$emit('closeHook')
      }
    }
  }
</script>

<style scoped lang="scss">
  .modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    transition: opacity .3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow-y: scroll;
    &.modal-enter {
      opacity: 0;
    }
    &.modal-leave-active {
      opacity: 0;
    }
    &.modal-enter .modal-container,
    .modal-leave-active .modal-container {
      -webkit-transform: scale(1.1);
      transform: scale(1.1);
    }
  }

  .modal-container {
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    transition: all .3s ease;
  }
</style>
