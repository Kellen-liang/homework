<template>
  <div  ref="swiper" class="swiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide"><img src="./imgs/1.jpg" alt="" srcset=""></div>
      <div class="swiper-slide"><img src="./imgs/2.jpg" alt="" srcset=""></div>
      <div class="swiper-slide"><img src="./imgs/3.jpg" alt="" srcset=""></div>
      <div class="swiper-slide"><img src="./imgs/4.jpg" alt="" srcset=""></div>
    </div>
  </div>
</template>

<script setup>
import Swiper from 'swiper/swiper-bundle'
import 'swiper/swiper-bundle.css'
import { onMounted, nextTick ,ref} from 'vue'
let mySwiper = null
const swiper=ref(null)
onMounted(() => {
  nextTick(() => {
    mySwiper = new Swiper('.swiper', {
      autoplay: true,//可选选项，自动滑动
      loop: true
    })

  })
}),
  console.log(mySwiper)
</script>

<style lang="less" scoped>
.swiper {
  width: 100%;
  height: 300px;
  background: rgb(240, 240, 240);
  
  .swiper-wrapper{
    width: 100%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
    }
  }
  
}
</style>