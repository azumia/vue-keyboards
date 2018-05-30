<template>
 <div class="keyboards__wrapper">
  <div class="key_board" :class="{'show': isShow}">
    <div class="key_board_header" @touchstart.prevent="onHide"><i></i></div>
    <ul>
      <li v-for="(item, index) in keyList" :key="index" class="key_button" :class="{'active': item.active}" @touchstart.prevent="handleClick(item)" @touchend.prevent="endClick(item)">
        <span v-if="item.type !== 'delete'">{{item.val}}</span>
        <span v-else>
          <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-delete"></use>
          </svg>
        </span>
      </li>
    </ul>
  </div>
 </div>
</template>

<script>
import '../assets/iconfont.js'
export default {
  name: 'vue-keyboards',
  data() {
    return {
      keyList: [
        {
          type: 'add',
          val: 1,
          active: false
        },
        {
          type: 'add',
          val: 2,
          active: false
        },
        {
          type: 'add',
          val: 3,
          active: false
        },
        {
          type: 'add',
          val: 4,
          active: false
        },
        {
          type: 'add',
          val: 5,
          active: false
        },
        {
          type: 'add',
          val: 6,
          active: false
        },
        {
          type: 'add',
          val: 7,
          active: false
        },
        {
          type: 'add',
          val: 8,
          active: false
        },
        {
          type: 'add',
          val: 9,
          active: false
        },
        {
          type: 'configurable',
          val: '.',
          active: false
        },
        {
          type: 'add',
          val: 0,
          active: false
        },
        {
          type: 'delete',
          val:  '←',
          active: false
        }
      ]
    }
  },
  props: {
    isShow: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'decimals'  // type: decimals || int || phone || idcard
    },
    value: {
      type: String,
      default: ''
    }
  },
  mounted() {
    var _this = this
    this.keyList.forEach((item) => {
      if (item.type === 'configurable') {
        switch (_this.type) {
          case 'decimals':
            item.val = '.'
            break;
          case 'int':
            item.val = '清空'
            break;
          case 'phone':
            item.val = '清空'
            break;
          case 'idcard':
            item.val = 'X'
            break;
          default:
            break;
        }
      }
    })
  },
  methods: {
    handleClick(item) {
      let result = this.value
      if (item.type === 'delete') {
        result = this.value.substring(0, this.value.length - 1)
      } else if (item.val === '清空'){
        result = ''
      } else {
        result += item.val
      }
      item.active = true
      this.$emit('update:value', result)
    },
    endClick(item) {
      item.active = false
    },
    onHide() {
      this.$emit('onHide')
    }
  }
}
</script>

<style lang="scss" scoped>
.icon {
   width: 1em; height: 1em;
   vertical-align: -0.15em;
   fill: currentColor;
   overflow: hidden;
}
$fontFamily: PingFang-SC, "San Francisco", "Source Sans", Rotobo, "Helvetica Neue";

.key_board ul, .key_button{
  margin: 0;
  box-sizing: border-box;
  background: #fff;
}
.key_board {
  position: absolute;
  bottom: -100%;
  left: 0;
  right: 0;
  z-index: 99999;
  display: none;
  transition: bottom 1s ease-in-out;
}
.key_board.show {
  bottom: 0;
  display: block;
}
.key_button {
  width: 33.333333%;
  height: 150px;
  line-height: 150px;
  font-family: $fontFamily;
  font-size: 4em;
  border-top: .5px solid #bbb;
  overflow: hidden;
  &:active {
    background: #bbb;
    color: #fff
  }
  &:nth-child(3n +2) {
    border-left: .5px solid #bbb;
    border-right: .5px solid #bbb;
  }
}
.key_button.active {
  background: #bbb;
  color: #fff
}
.key_board_header {
  width: 100%;
  height: 50px;
  border-top: .5px solid #bbb;
  position: relative;
  overflow: hidden;
  i{
    position: absolute;
    top: 5px;
    width: 25px;
    height: 25px;
    border-left: 2px solid #000;
    border-bottom: 2px solid #000;
    transform: rotateZ(-45deg)
  }
}
</style>
