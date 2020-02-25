<template>
    <nav id="header">
        <div class="an" @click="show">
          <svg t="1582471617128" class="icon" viewBox="0 0 1028 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1140" width="200" height="200"><path d="M8.533333 192c0-25.6 17.066667-42.666667 34.133334-42.666667h490.666666c21.333333 0 34.133333 17.066667 34.133334 42.666667 0 21.333333-17.066667 42.666667-34.133334 42.666667h-490.666666c-21.333333 0-34.133333-21.333333-34.133334-42.666667z m550.4 213.333333c0 25.6-21.333333 42.666667-46.933333 42.666667h-465.066667c-25.6 0-46.933333-17.066667-46.933333-42.666667 0-21.333333 21.333333-42.666667 46.933333-42.666666h465.066667c25.6 0 46.933333 17.066667 46.933333 42.666666z m-507.733333 256c-25.6 0-46.933333-17.066667-46.933333-42.666666s21.333333-42.666667 46.933333-42.666667h465.066667c25.6 0 46.933333 17.066667 46.933333 42.666667 0 21.333333-21.333333 42.666667-46.933333 42.666666h-465.066667z m507.733333 170.666667c0 25.6-21.333333 42.666667-51.2 42.666667h-452.266666c-29.866667 0-51.2-17.066667-51.2-42.666667s21.333333-42.666667 51.2-42.666667h452.266666c29.866667 0 51.2 17.066667 51.2 42.666667z m140.8-85.333333l221.866667-238.933334-221.866667-238.933333c-17.066667-17.066667-17.066667-51.2 0-68.266667 17.066667-17.066667 46.933333-17.066667 64 0l251.733334 273.066667c17.066667 17.066667 17.066667 51.2 0 68.266667l-251.733334 273.066666c-17.066667 17.066667-46.933333 17.066667-64 0-17.066667-17.066667-17.066667-46.933333 0-68.266666z" p-id="1141" fill="#fff"></path></svg>
        </div>
        <div class="category">直播分类</div>
        <div class="home">
          <router-link :to="{name: 'index'}" class="title">斗鱼TV</router-link>
          <img src="https://dss1.baidu.com/70cFfyinKgQFm2e88IuM_a/forum/pic/item/a08b87d6277f9e2f4fa7ea291230e924b899f305.jpg">
        </div>
    </nav>
</template>

<script>
export default {
    methods: {
        show(){
          this.$emit('open')
        }
    },
}
</script>

<style lang="stylus" scoped>
  #header
    background-color #ef6530
    color #fff
    font-size 1rem /* 16/16 */
    position fixed
    top 0
    height 3.125rem /* 50/16 */
    line-height 3.125rem /* 50/16 */
    width 100%
    display flex
    flex-direction row
    z-index 5
    .an
      position relative
      flex: 1 1 0%;
      text-align: center;
      svg
        width 2rem /* 20/16 */
        height 2rem /* 20/16 */
        position absolute
        top .5rem
        left .5rem
    .category
      flex: 5 1 0%
    .home
      flex 2 1 6%
      align-items: center;
      justify-content:center;
      display flex
      .title
        flex 2
        font-size 1.2rem
        color #fff
      img
        flex 1
        height 2.6rem /* 50/16 */
        width 2.6rem /* 50/16 */
</style>