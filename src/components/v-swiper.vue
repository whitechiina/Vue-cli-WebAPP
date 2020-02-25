<!-- The ref attr used to find the swiper instance -->
<template>
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide v-for="(item, index) in imgUrl"  :key="index">
          <img class="swiper-img" v-lazy="item.imageUrl">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </template>

<script>
export default {
    name:'HomeSwiper',
    data: () => ({
            imgUrl:[
            {
                imageUrl:
                'https://staticlive.douyucdn.cn/storage/webpic_resources/upload/slide/2017/0828/201708281533217578.jpg'
            },
            {
                imageUrl:
                'https://staticlive.douyucdn.cn/storage/webpic_resources/upload/slide/2017/0907/201709071732053454.png'
            },
            {
                imageUrl:
                'https://staticlive.douyucdn.cn/storage/webpic_resources/upload/slide/2017/0915/201709151037285098.jpg'
            },
            {
                imageUrl:
                'https://staticlive.douyucdn.cn/storage/webpic_resources/upload/slide/2017/0918/201709181538588580.jpg'
            },
            {
                imageUrl:
                'https://staticlive.douyucdn.cn/storage/webpic_resources/upload/slide/2017/0810/201708101123152416.jpg'
            },
            {
                imageUrl:
                'https://staticlive.douyucdn.cn/storage/webpic_resources/upload/slide/2017/0908/201709082136105853.jpg'
            }
            ],
            swiperOption:{
                // 参数选项,显示小点
                pagination:{
                    el: '.swiper-pagination',
                    clickable: true,
                    dynamicBullets: true,
                },
                //循环
                loop:true,
                //每张播放时长3秒，自动播放
                autoplay:2000,
                //滑动速度
                speed:1000,
                // delay:1000
            }
    })
}
</script>

<style lang="stylus" scoped>
.swiper-slide
    width 100%
    height 11.25rem /* 180/16 */
    .swiper-img
        width 100%
        height 11.25rem /* 180/16 */
</style>