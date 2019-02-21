<template>
  <div>
    <!-- 搜索框 -->
    <Search></Search>
    <!-- 轮播图 -->
    <swiper
      indicator-dots
      autoplay
      circular
      indicator-color="rgba(255,255,255,0.3)"
      indicator-active-color="#fff"
      class="slide-index"
    >
      <block v-for="(item,index) in imgList" :key="index">
        <swiper-item>
          <image :src="item.image_src" class="slide-image" mode="aspectFill"></image>
        </swiper-item>
      </block>
    </swiper>
    <!-- 分类 -->
    <div class="menu">
      <div class="menu_list" v-for="(item,index) in menuImg" :key="index">
        <img :src="item.image_src" alt=""></img>
      </div>
    </div>
    <!-- 产品 -->
    <div class="product" v-for="(item,index) in products" :key="index">
      <div class="product_head">
        <image :src="item.floor_title.image_src" mode="aspectFit"></image>
      </div>
      <div class="product_body">
        <div class="product_left">
          <image :src="item.product_list[0].image_src" mode="aspectFit"></image>
        </div>
        <div class="product_right">
          <block v-for="(item1,index1) in item.product_list" :key="index1">
          <image 
          mode="aspectFit"
          :src="item1.image_src"
          v-if="index1 != 0">
          </image>
          </block>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import request from "@/utils/request.js"
import Search from "@/components/search.vue"
export default {
  data () {
    return {
      imgList:[],
      menuImg:[],
      products:[]
    }
  },
  components: {
    Search
  },
  mounted(){
    request("https://www.zhengzhicheng.cn/api/public/v1/home/swiperdata")
    .then(res=>{
      this.imgList=res.data.message
    });
    request("https://www.zhengzhicheng.cn/api/public/v1/home/catitems")
    .then(res=>{
      this.menuImg=res.data.message
    });
    request("https://www.zhengzhicheng.cn/api/public/v1/home/floordata")
    .then(res=>{
      // console.log(res.data);
      this.products = res.data.message
    });
  }
}
</script>

<style lang="scss" scoped>
  .slide-index{
    height: 340rpx;
  }
  .slide-image{
    height: 100%;
    width: 100%;
  }
  .menu{
    display:flex;
    justify-content:space-around;
    padding: 24rpx;
  }
  .menu_list>img{
    height:140rpx;
    width: 128rpx;
  }
  .product{
    .product_head{
       background-color: #f4f4f4;
       padding-top: 30rpx;;
      image{
        width: 100%;
        height: 88rpx;
      }
    }
    .product_body{
      padding: 20rpx 16rpx;
      display: flex;
      .product_left{        
        image{
          width: 232rpx;
          height: 100%;
        }
      }
      .product_right{
        display: flex;
        flex-wrap: wrap;        
         image{
           width: 232rpx;
           height: 190rpx;
           margin-left: 10rpx;
           &:nth-child(-n+2){
             margin-bottom: 10rpx;
           }
         }        
      }
    }
  }
</style>

