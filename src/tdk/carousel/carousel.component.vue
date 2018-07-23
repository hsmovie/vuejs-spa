<template>
  <div class="slider"
       :class="[direction, {'dragging': dragging}]"
       ref="slider"
       @touchstart="_onTouchStart"
       @mousedown="_onTouchStart"
       @wheel="_onWheel">
    <div class="slider-wrap"
         ref="sliderWrap"
         :style="{
				'transform' : 'translate3d(' + translateX + 'px,' + translateY + 'px, 0)',
				'transition-duration': transitionDuration + 'ms'
			}"
         @transitionend="_onTransitionEnd">
      <slot></slot>
    </div>
    <div class="slider-pagination"
         v-show="paginationVisible">
			<span class="slider-pagination-bullet"
            :class="{'active': index+1===currentPage}"
            v-for="(slide, index) in slideEls"
            :key="index"
            @click="paginationClickable && setPage(index+1)"></span>
    </div>
  </div>
</template>
<script>
  const VERTICAL = 'vertical'
  const HORIZONTAL = 'horizontal'
  const LEFT = 'left'
  const RIGHT = 'right'

  export default {
    props: {
      direction: {
        type: String,
        default: VERTICAL,
        validator: (value) => [VERTICAL, HORIZONTAL].indexOf(value) > -1
      },
      align: {
        type: String,
        default: LEFT,
        validator: (value) => [LEFT, RIGHT].indexOf(value) > -1
      },
      mousewheelControl: {
        type: Boolean,
        default: true
      },
      performanceMode: {
        type: Boolean,
        default: true
      },
      paginationVisible: {
        type: Boolean,
        default: true
      },
      paginationClickable: {
        type: Boolean,
        default: true
      },
      loop: {
        type: Boolean,
        default: false
      },
      speed: {
        type: Number,
        default: 500
      }
    },
    data () {
      return {
        currentPage: 1,
        lastPage: 1,
        translateX: 0,
        translateY: 0,
        startTranslate: 0,
        delta: 0,
        dragging: false,
        startPos: null,
        transitioning: false,
        slideEls: [],
        translateOffset: 0,
        transitionDuration: 0
      }
    },
    mounted () {
      this._onTouchMove = this._onTouchMove.bind(this)
      this._onTouchEnd = this._onTouchEnd.bind(this)
      this.slideEls = [].map.call(this.$refs.sliderWrap.children, el => el)
      if (this.loop) {
        this.$nextTick(function () {
          this._createLoop()
          this.setPage(this.currentPage, true)
        })
      } else {
        this.setPage(this.currentPage)
      }
    },
    methods: {
      next () {
        const page = this.currentPage
        if (page < this.slideEls.length || this.loop) {
          this.setPage(page + 1)
        } else {
          this._revert()
        }
      },
      prev () {
        const page = this.currentPage
        if (page > 1 || this.loop) {
          this.setPage(page - 1)
        } else {
          this._revert()
        }
      },
      setPage (page, noAnimation) {
        const _ = this
        this.lastPage = this.currentPage
        if (page === 0) {
          this.currentPage = this.slideEls.length
        } else if (page === this.slideEls.length + 1) {
          this.currentPage = 1
        } else {
          this.currentPage = page
        }
        if (this.loop) {
          if (this.delta === 0) {
            this._setTranslate(_._getTranslateOfPage(this.lastPage))
          }
          setTimeout(function () {
            _._setTranslate(_._getTranslateOfPage(page))
            if (noAnimation) return
            _._onTransitionStart()
          }, 0)
        } else {
          this._setTranslate(this._getTranslateOfPage(page))
          if (noAnimation) return
          this._onTransitionStart()
        }
      },
      isHorizontal () {
        return this.direction === HORIZONTAL
      },
      isVertical () {
        return this.direction === VERTICAL
      },
      _onTouchStart (e) {
        e.stopPropagation()
        this.startPos = this._getTouchPos(e)
        this.delta = 0
        this.startTranslate = this._getTranslateOfPage(this.currentPage)
        this.startTime = new Date().getTime()
        this.dragging = true
        this.transitionDuration = 0
        document.addEventListener('touchmove', this._onTouchMove, false)
        document.addEventListener('touchend', this._onTouchEnd, false)
        document.addEventListener('mousemove', this._onTouchMove, false)
        document.addEventListener('mouseup', this._onTouchEnd, false)
      },
      _onTouchMove (e) {
        this.delta = this._getTouchPos(e) - this.startPos
        if (this.performanceMode) {
          this._setTranslate(this.startTranslate + this.delta)
          this.$emit('slider-move', this._getTranslate())
        }
        const isVertical = this.isVertical()
        const isHorizontal = this.isHorizontal()
        const delta = Math.abs(this.delta) > 0
        if (isVertical || (isHorizontal && delta)) {
          e.preventDefault()
        }
      },
      _onTouchEnd (e) {
        document.removeEventListener('touchmove', this._onTouchMove)
        document.removeEventListener('touchend', this._onTouchEnd)
        document.removeEventListener('mousemove', this._onTouchMove)
        document.removeEventListener('mouseup', this._onTouchEnd)
        this.dragging = false
        this.transitionDuration = this.speed
        const isQuickAction = new Date().getTime() - this.startTime < 1000
        if (this.delta < -100 || (isQuickAction && this.delta < -15)) {
          this.next()
        } else if (this.delta > 100 || (isQuickAction && this.delta > 15)) {
          this.prev()
        } else if (this.delta !== 0) {
          this._revert()
        }
      },
      _onWheel (e) {
        if (this.mousewheelControl) {
          // TODO Support apple magic mouse and trackpad.
          if (!this.transitioning) {
            if (e.deltaY > 0) {
              this.next()
            } else {
              this.prev()
            }
          }
          if (this._isPageChanged()) e.preventDefault()
        }
      },
      _revert () {
        this.setPage(this.currentPage)
      },
      _getTouchPos (e) {
        const key = this.isHorizontal() ? 'pageX' : 'pageY'
        return e.changedTouches ? e.changedTouches[0][key] : e[key]
      },
      _onTransitionStart () {
        this.transitioning = true
        this.transitionDuration = this.speed
        if (this._isPageChanged()) {
          this.$emit('slide-change-start', this.currentPage, this.$refs.slider)
        } else {
          this.$emit('slide-revert-start', this.currentPage, this.$refs.slider)
        }
      },
      _onTransitionEnd () {
        this.transitioning = false
        this.transitionDuration = 0
        this.delta = 0
        if (this._isPageChanged()) {
          this.$emit('slide-change-end', this.currentPage, this.$refs.slider)
        } else {
          this.$emit('slide-revert-end', this.currentPage, this.$refs.slider)
        }
      },
      _isPageChanged () {
        return this.lastPage !== this.currentPage
      },
      _setTranslate (value) {
        const translateName = this.isHorizontal() ? 'translateX' : 'translateY'
        this[translateName] = value
      },
      _getTranslate () {
        const translateName = this.isHorizontal() ? 'translateX' : 'translateY'
        return this[translateName]
      },
      _getTranslateOfPage (page) {
        if (page === 0) return 0
        const _ = this
        const propName = this.isHorizontal() ? 'clientWidth' : 'clientHeight'
        return -[].reduce.call(this.slideEls, function (total, el, i) {
          if (_.align === 'left') {
            return i > page - 2 ? total : total + el[propName]
          } else if (_.align === 'right') {
            return i === 0 || i >= page ? total : total + el[propName]
          }
        }, 0) + this.translateOffset
      },
      _createLoop () {
        const propName = this.isHorizontal() ? 'clientWidth' : 'clientHeight'
        const sliderWrapEl = this.$refs.sliderWrap
        const duplicateFirstChild = sliderWrapEl.firstElementChild.cloneNode(true)
        const duplicateLastChild = sliderWrapEl.lastElementChild.cloneNode(true)
        sliderWrapEl.insertBefore(duplicateLastChild, sliderWrapEl.firstElementChild)
        sliderWrapEl.appendChild(duplicateFirstChild)
        this.translateOffset = -duplicateLastChild[propName]
      }
    }
  }
</script>

<style>
  .slider {
    position: relative;
    overflow: hidden;
  }

  .slider .slider-wrap {
    display: flex;
    width: 100%;
    height: 100%;
    transition: all 0ms ease;
  }

  .slider .slider-wrap > div {
    overflow: hidden;
    flex-shrink: 0;
    width: 100%;
    height: 100%;
  }

  .slider.horizontal .slider-wrap {
    flex-direction: row;
  }

  .slider.vertical .slider-wrap {
    flex-direction: column;
  }

  .slider .slider-pagination {
    position: absolute;
  }

  .slider .slider-pagination .slider-pagination-bullet {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #000000;
    opacity: .2;
    transition: all .5s ease;
  }

  .slider .slider-pagination .slider-pagination-bullet.active {
    background: #007aff;
    opacity: 1;
  }

  .slider.vertical .slider-pagination {
    right: 10px;
    top: 50%;
    transform: translate3d(0, -50%, 0);
  }

  .slider.vertical .slider-pagination .slider-pagination-bullet {
    display: block;
    margin: 6px 0;
  }

  .slider.horizontal .slider-pagination {
    bottom: 10px;
    width: 100%;
    text-align: center;
  }

  .slider.horizontal .slider-pagination .slider-pagination-bullet {
    display: inline-block;
    margin: 0 3px;
  }

  .slider .slider-wrap div {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 48px;
    color: #000;
  }
  .slider {
    height: 400px;
    margin-bottom: 120px;
  }
  #slider_children_size {
    height: 400px;
  }
  .slider-nested-inner {
    width: 100%;
    height: 100%;
    margin-bottom: 0;
  }
</style>
