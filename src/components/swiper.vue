<template>
    <div class="swiper"
         :class="[direction, {'dragging': dragging}]"
         @touchstart="_onTouchStart"
         @mousedown="_onTouchStart"
         @wheel="_onWheel">
        <div class="swiper-wrap"
             ref="swiperwrap"
             :style="{'transform' : 'translate3d(' + translateX + 'px,' + translateY + 'px, 0)'}"
             @transitionend="_onTransitionEnd">
            <slot></slot>
        </div>
        <div class="swiper-pagination"
             v-show="paginationVisible">
            <span class="swiper-pagination-bullet"
                  :class="{'active': index+1===currentPage}"
                  v-for="(slide, index) in slideEls"
                  @click="paginationClickable && setPage(index+1)"></span>
        </div>
    </div>
</template>

<script>
    const VERTICAL = 'vertical';
    const HORIZONTAL = 'horizontal';

    export default {
        props: {
            direction: {
                type: String,
                default: VERTICAL,
                validator: (value) => [VERTICAL, HORIZONTAL].indexOf(value) > -1
            },
            mousewheelControl: {
                type: Boolean,
                default: true
            },
            performanceMode: {
                type: Boolean,
                default: false
            },
            paginationVisible: {
                type: Boolean,
                default: false
            },
            paginationClickable: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                startX: 0,
                startY: 0,
                currentPage: 1,
                lastPage: 1,
                translateX: 0,
                translateY: 0,
                startTranslateX: 0,
                startTranslateY: 0,
                delta: 0,
                dragging: false,
                startPos: null,
                transitioning: false,
                slideEls: []
            };
        },
        mounted() {
            this._onTouchMove = this._onTouchMove.bind(this);
            this._onTouchEnd = this._onTouchEnd.bind(this);
            this.slideEls = this.$refs.swiperwrap.children;
        },
        methods: {
            next() {
                var page = this.currentPage;
                if (page < this.slideEls.length) {
                    page++;
                    this.setPage(page);
                } else {
                    this._revert();
                }
            },
            prev() {
                var page = this.currentPage;
                if (page > 1) {
                    page--;
                    this.setPage(page);
                } else {
                    this._revert();
                }
            },
            setPage(page) {
                var propName, translateName;
                this.lastPage = this.currentPage;
                this.currentPage = page;

                if (this.isHorizontal()) {
                    propName = 'clientWidth';
                    translateName = 'translateX';
                } else {
                    propName = 'clientHeight';
                    translateName = 'translateY';
                }
                this[translateName] = -[].reduce.call(this.slideEls, function (total, el, i) {
                    return i > page - 2 ? total : total + el[propName];
                }, 0);
                this._onTransitionStart();
            },
            isHorizontal() {
                return this.direction === HORIZONTAL;
            },
            isVertical() {
                return this.direction === VERTICAL;
            },
            _onTouchStart(e) {
                this.startPos = this._getTouchPos(e);

                let pos = this._getTouchPosObj(e)
                this.startX = pos.x
                this.startY = pos.y

                this.delta = 0;
                this.startTranslateX = this.translateX;
                this.startTranslateY = this.translateY;
                this.startTime = new Date().getTime();
                this.dragging = true;

                document.addEventListener('touchmove', this._onTouchMove, false);
                document.addEventListener('touchend', this._onTouchEnd, false);
                document.addEventListener('mousemove', this._onTouchMove, false);
                document.addEventListener('mouseup', this._onTouchEnd, false);
            },
            _onTouchMove(e) {
                this.delta = this._getTouchPos(e) - this.startPos;
                let pos = this._getTouchPosObj(e)
                let { x, y } = this._getTouchPosObj(e)

                let direction =  this._getSwipeDirection(this.startX, this.startY, x, y)

                if (!this.performanceMode) {
                    // 允许左右
                    if (this.isHorizontal()) {
                        if( direction==='up' || direction==='down' ){
                            this._removeAll()
                            return
                        }

                        this.translateX = this.startTranslateX + this.delta;
                        this.$emit('slider-move', this.translateX);

                    } else {
                        if( direction==='right' || direction==='left' ){
                            this._removeAll()
                            return
                        }
                        this.translateY = this.startTranslateY + this.delta;
                        this.$emit('slider-move', this.translateY);
                    }
                }

                if (this.isVertical() || this.isHorizontal() && Math.abs(this.delta) > 0) {
                    e.preventDefault();
                }
            },
            // 是否到达滑动距离
            _canSwipe(startPos, curPos){
                console.log(Math.abs(curPos - startPos))
               return Math.abs(curPos - startPos) > 80 
            },
            // 移除所有事件
            _removeAll(){
                document.removeEventListener('touchmove', this._onTouchMove);
                document.removeEventListener('touchend', this._onTouchEnd);
                document.removeEventListener('mousemove', this._onTouchMove);
                document.removeEventListener('mouseup', this._onTouchEnd);
              
            },
            // 获取滑动方向
            _getSwipeDirection(x1,y1,x2,y2){
                return Math.abs(x2-x1) >= Math.abs(y2-y1)
                        ? ( x2>x1 ? 'right' : 'left' ) 
                        : ( y2>y1 ? 'down' : 'up' )
            },
            _onTouchEnd(e) {
                this.dragging = false;
                var isQuickAction = new Date().getTime() - this.startTime < 500;

                if (this.delta < -100 || (isQuickAction && this.delta < -15)) {
                    this.next();
                } else if (this.delta > 100 || (isQuickAction && this.delta > 15)) {
                    this.prev();
                } else {
                    this._revert();
                }

                document.removeEventListener('touchmove', this._onTouchMove);
                document.removeEventListener('touchend', this._onTouchEnd);
                document.removeEventListener('mousemove', this._onTouchMove);
                document.removeEventListener('mouseup', this._onTouchEnd);
            },
            _onWheel(e) {
                if (this.mousewheelControl) {
                    // TODO Support apple magic mouse and trackpad.
                    if (!this.transitioning) {
                        if (e.deltaY > 0) {
                            this.next();
                        } else {
                            this.prev();
                        }
                    }

                    if (this._isPageChanged()) e.preventDefault();

                }
            },
            _revert() {
                this.setPage(this.currentPage);
            },
            _getTouchPos(e) {
                var key = this.isHorizontal() ? 'pageX' : 'pageY';
                return e.changedTouches ? e.changedTouches[0][key] : e[key];
            },

            _getTouchPosObj(e){
                let ev = e.changedTouches ? e.changedTouches[0] : e;
                return {
                    x: ev.pageX,
                    y: ev.pageY
                }
            },
            _onTransitionStart() {
                this.transitioning = true;
                if (this._isPageChanged()) {
                    this.$emit('slide-change-start', this.currentPage);
                } else {
                    this.$emit('slide-revert-start', this.currentPage);
                }
            },
            _onTransitionEnd() {
                this.transitioning = false;
                if (this._isPageChanged()) {
                    this.$emit('slide-change-end', this.currentPage);
                } else {
                    this.$emit('slide-revert-end', this.currentPage);
                }
            },
            _isPageChanged() {
                return this.lastPage !== this.currentPage;
            }
        }
    };
</script>

<style lang="sass" scoped>
.swiper {
  position: relative;
  overflow: hidden;

  .swiper-wrap {
    display: flex;
    width: 100%;
    height: 100%;
    transition: all 0.5s ease;

    > div {
      overflow: hidden;
      flex-shrink: 0;
      width: 100%;
      height: 100%;
    }
  }

  &.horizontal .swiper-wrap {
    flex-direction: row;
  }

  &.vertical .swiper-wrap {
    flex-direction: column;
  }

  &.dragging .swiper-wrap {
    transition: none;
  }

  .swiper-pagination {
    position: absolute;

    .swiper-pagination-bullet {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: #000000;
      opacity: .2;
      transition: all .5s ease;
    }

    .swiper-pagination-bullet.active {
      background: #007aff;
      opacity: 1;
    }
  }

  &.vertical .swiper-pagination {
    right: 10px;
    top: 50%;
    transform: translate3d(0, -50%, 0);

    .swiper-pagination-bullet {
      display: block;
      margin: 6px 0;
    }
  }

  &.horizontal .swiper-pagination {
    bottom: 10px;
    width: 100%;
    text-align: center;

    .swiper-pagination-bullet {
      display: inline-block;
      margin: 0 3px;
    }
  }
}
</style>
