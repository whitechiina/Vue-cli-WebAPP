<template>
    <div class="list">
        <a class="list-item" v-for="(item, index) in catelists" :key="index" @click="detail(item)">
            <img class="list-img" v-lazy="item.icon" alt="">
            <p class="list-title">{{ item.cate2Name }}</p>
        </a>
    </div>
</template>

<script>
import {category} from '../api/serve.js';
export default {
    name: 'list',
    data() {
        return {
            catelists: []  
        }
    },
    
    watch: {
    '$route.query.id'() {
      this.getData()
     }
    },
    created () {
        this.getData()
    },
    methods: {
        getData(){
            category({ type: '' }).then(res=>{
                console.log(res.data)
                const cate1Id = this.$route.query.id
                const cate2Info = res.data.cate2Info
                const result = cate2Info.filter(cate2 => cate2.cate1Id === cate1Id)
                this.catelists = result
            })
        },
        detail(item){
            this.$cookie.set('gameName', item.cate2Name)
            this.$router.push({
                name: 'detail',
                query: {name: item.shortName}
            })
        }
    },
}
</script>

<style lang="stylus" scoped>
.list
    width 100%
    height 100%
    background-color #fff
    .list-item
        margin: 0;
        padding: 0;
        float: left;
        width: 8.5rem /* 136/16 */
        height: 8.5rem /* 136/16 */
        border-right: 1px dashed #ddd;
        border-bottom: 1px dashed #ddd;
        text-align: center;
        font-size: 0.32rem;
        color: #000;
        margin-left: 1px;
        &:nth-child(3n)
            border-right: none;
        .list-img
            width 4rem
            height 4rem
            margin-top 1.4rem
            margin-bottom 1rem
        .list-title
            font-size .625rem /* 10/16 */
</style>