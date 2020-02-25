<template>
  <div id="app">
      <v-header @open="show"></v-header>
      <div class="router">
        <router-view></router-view>
      </div>
      <!-- 蒙层 -->
      <v-category @close="close" :categorys="categorys" :nav-status="LeftNavStatus"></v-category>
  </div>
</template>

<script>
  import VHeader from './components/v-header.vue';
  import VCategory from './components/v-category.vue';
  import { category } from './api/serve.js';
export default {
  name: 'App',
  components: {
    VHeader,
    VCategory
  },
  data() {
    return {
      LeftNavStatus:false,
      categorys: []
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData(){
      category().then(res=>{
        this.categorys = res.data.cate1Info
      })
    },
    show(){
      this.LeftNavStatus = true
    },
    close() {
      this.LeftNavStatus = false
    }
  },
}
</script>
<style lang="stylus" scoped>
.router
  margin-top 3.125rem /* 50/16 */
</style>
