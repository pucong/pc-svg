<template>
  <div>
  <outer :left='left' :top='top' :pc-width='pcWidth' :pc-height='pcHeight' :card-id='cardId' :svg-type='svgType' :show-click-svg='showClickSvg'
           :position='position' :z-index="zIndex" :inner-color='innerColor' :shw-foot-font='shwFootFont'
         @showSvgClick="showSvgClick" @typeThreeSvgMove="typeThreeSvgMove" ref="outer" @outerHover="outerHover"  @outerHoverDis="outerHoverDis">
    <innerSvg :card-id='cardId'
              :inner-color='innerColor'
              :left='left'
              :top='top'
              :type='type'
              :position='position'
              :pc-width='pcWidth'
              :footer-font='footerFont'
              :input-font='inputFont'
              :pc-height='pcHeight'
              :svg-type='svgType'
              :shw-foot-font='shwFootFont'
              :shw-inner-font='shwInnerFont'
              :options='options'
               @clickSvg="clickSvg"
    ></innerSvg>
  </outer>
    <!--hover出现的选中关系图标-->
    <el-collapse-transition>
      <outerRelation v-if="showBoor || whetherHover" ref="outerRelation"
                     :top="svg.top" :left="svg.left"
                     @relationMouseover="relationMouseover"
                     @relationMouseOut="relationMouseOut"
      ></outerRelation>
    </el-collapse-transition>
 </div>
</template>
<script>
  import innerSvg from '@/components/common/innerSvg'
  import outer from '@/components/common/outer'
  import outerRelation from '@/components/common/outerRelation'
  import util from '@/util.js'

  export default {
    name: 'pc-svg',
    props: {
      zIndex: { // card优先级
        type: Number,
        default: 50
      },
      left: { // x坐标
        type: Number,
        default: 10
      },
      top: { // y坐标
        type: Number,
        default: 10
      },
      pcWidth: { // 宽度
        type: Number,
        default: 20
      },
      pcHeight: { // 高度
        type: Number,
        default: 20
      },
      innerColor: { // 颜色
        type: String,
        default: 'red'
      },
      footerFont: { // 脚部文字
        type: String,
        default: ''
      },
      inputFont: { // 圆内文字
        type: String,
        default: ''
      },
      position: { // 位置模式 relative为在展示栏 absolute为在拖动栏、点击出现图标
        type: String,
        default: 'relative'
      },
      shwFootFont: { // 显示脚部的文字
        type: Boolean,
        default: false
      },
      shwInnerFont: { // 显示内部的文字
        type: Boolean,
        default: true
      },
      svgType: { // 图形的类型 1单击出现的图形 2左侧显示的图形 3右侧显示的图形
        type: Number,
        default: 3
      },
      showClickSvg: { // 是否显示点击出现的图形
        type: Boolean,
        default: false
      },
      options: { // 其他参数
        type: Object,
        default: function () {
          return {}
        }
      },
      cardId: {
        type: String,
        default: '123456'
      },
      scaleNum: { // 缩放比例
        type: Number,
        default: 1
      },
      type: { // 图形样式 circle 圆，rect 矩形，star 星形，triangle等腰三角形等
        type: String,
        default: 'rect'
      }
    },
    components: {
      outer,
      outerRelation,
      innerSvg
    },
    data: function () {
      return {
        showBoor: false, // 是否显示关系列表
        whetherHover: false, // 是否hover右侧框
        svg: { // 显示关系列表的图形
          cardId: '123123',
          left: '100px',
          top: '100px'
        }
      }
    },
    methods: {
      clickSvg: function () { // 点击左侧图形事件
        if (this.svgType === 2) {
//          this.svgClickStatus = true
          this.$emit('clickSvg', this.type) // 触发事件
        }
      },
      showSvgClick: function () { // 触发图形消失事件
        if (this.svgType === 1) {
          this.$emit('showSvgClick', this.type) // 触发事件
        }
      },
      getPosition: function () {
        return this.$refs.outer.getPosition()
      },
      // hover事件触发
      outerHover (e) {
        if (this.svgType === 3) {
          var opt = {
            cardId: util.getUuid('svgBoor'),
            left: this.$refs.outer.getPosition().left,
            top: this.$refs.outer.getPosition().top,
            pcWidth: this.pcWidth,
            pcHeight: this.pcHeight
          }
          if (opt.left) {
            opt.left = parseInt(opt.left) + opt.pcWidth + 20 + 'px'
          }
          if (opt.top) {
            opt.top = parseInt(opt.top) + 'px'
          }
          this.svg = opt
          this.showBoor = true
        }
      },
      // 取消hover事件
      outerHoverDis (e) {
        if (this.showBoor) {
          const _this = this
          setTimeout(() => {
            if (!_this.whetherHover) {
              _this.showBoor = false
            }
          }, 300)
          console.log('2')
        }
      },
      relationMouseover () {
        this.whetherHover = true
      },
      relationMouseOut () {
        this.showBoor = false
        this.whetherHover = false
      },
      typeThreeSvgMove () {
        this.relationMouseOut()
        this.$emit('typeThreeSvgMove', this.cardId) // 触发移动事件
      }
    }
  }
</script>
