<template>
  <view>
    <!-- 搜索框 -->
    <Search></Search>
    <!-- 分类 -->
    <view class="cate"> 
      <view class="cate-left">
        <lbock v-for="(item ,index) in cateItem" :key="index">
          <view class="cate-left-item"
          :class="{active : index == tabIndex}"
          @tap="changeIndex(index)">
            {{item}}
          </view>
        </lbock>
      </view>
      <view class="cate-right"></view>
    </view>
  </view>
</template>

<script>
import Search from "@/components/search.vue"

export default {
  data () {
    return {
      cateItem:[
        "大家电",
        "小家电",
        "大家电",
        "小家电",
        "大家电",
        "小家电"
      ],
      tabIndex:""
    }
  },
  components: {
    Search
  },
  methods: {
    changeIndex(index){
      this.tabIndex=index
    }
  }
}
</script>

<style lang="scss" scoped>
  .cate{
    display: flex;
    position: fixed;
    top:100rpx;
    left: 0;
    right: 0;
    bottom: 0;
    // background-color: aqua;
    &-left{
      width: 198rpx;
      background-color: #f5f5f5;
      font-size: 26rpx;
      &-item{
        height: 100rpx;
        line-height: 100rpx;
        text-align: center;
        &.active{
          color:red;
          background-color: #fff;
          position: relative;
          &::before{
            content: "";
            background-color: red;
            position: absolute;
            left:0;
            width: 7rpx;
            top:15rpx;
            bottom:15rpx;
          }
        }
      }
    }
    &-right{
      flex: 1;
    }
  }
</style>
