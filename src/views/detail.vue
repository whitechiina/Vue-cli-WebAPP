<template>
    <div>
        <div class="title">
            <i><svg t="1582610094700" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3849" width="200" height="200"><path d="M888.32 158.4H135.68A71.76 71.76 0 0 0 64 230.08v448a71.76 71.76 0 0 0 71.68 71.68h358.4v80H355.2a17.92 17.92 0 1 0 0 35.84h313.6a17.92 17.92 0 1 0 0-35.84H529.92v-80h358.4A71.76 71.76 0 0 0 960 678.08v-448a71.76 71.76 0 0 0-71.68-71.68z m9 483.84h-770.6v-358.4h770.56z" fill="#ef6530" p-id="3850"></path></svg></i>
            <div class="name">
                <span class="one">{{cateName}}</span> -
                <span>{{gameName}}</span>   
            </div>
        </div>

        <div class="live">
            <router-link class="room" tag="div"  :to="{name: 'room', params: { id: lists.rid }}"  v-for="(lists,index) in detaillist" :key="index">
                <img class="live-img" v-lazy="lists.roomSrc">
                <div class="live-title">{{lists.roomName}}</div>
                <div class="live-info">
                    <span class="live-name">{{lists.nickname}}</span>
                    <span class="live-num">{{lists.hn}}</span>
                </div>
            </router-link>
        </div>
    
        <div class="more">
            <button @click="more">加载更多</button>
        </div>
    </div>
</template>

<script>
import {rooms} from '../api/serve.js'; 
export default {
    name: 'detail',
    props: {
        name: {
            type: String,
            default: ''
        }
    },
    data: () =>({
        gameName: '',
        cateName: '',
        detaillist: [],
        params: {
            name: '',
            page: 1
        }
    }),
    created () {
        this.getData()
    },
    mounted(){
        this.cateName = this.$cookie.get('cateName')
        this.gameName = this.$cookie.get('gameName')
    },
    methods: {
        getData(){
            rooms({ 
                page: this.params.page, 
                type: this.$route.query.name }).then(res => {
                this.detaillist = res.data.list
                console.log(this.detaillist)
            })
        },
        more(){
            this.params.page = ++this.params.page
            this.getData()
        }
    },
}
</script>

<style lang="stylus" scoped>
.title
    position relative
    padding .4rem
    i
        svg
            width 1.6rem
            height 1.6rem
    .name
        position absolute
        top .6rem
        left 2.2rem
        font-size 1rem
        .one
            color #ef6530
.live
    width 100%
    overflow hidden
    .room
        position relative
        width 50%
        float left
        padding .3125rem /* 5/16 */
        .live-img
            width 100%
            box-sizing border-box
            border-radius .4125rem /* 5/16 */
        .live-title
            white-space: nowrap
            text-overflow: ellipsis
        .live-info 
            position absolute
            bottom 1.625rem /* 26/16 */
            left 1rem
            color #fff
            overflow hidden
            .live-name
                white-space: nowrap
                text-overflow: ellipsis
                overflow: hidden
                max-width: 4.746666666rem
                display: inline-block
                padding-left: 0.1rem
            .live-num
                float: right
                padding-left: 6rem
.more
    text-align center
    width 100%
    padding-top 1.25rem /* 20/16 */
    button
        width 30%
        height 1.8rem /* 20/16 */
        border 1px solid red
        border-radius 1.25rem /* 20/16 */
        background-color #fff
        color #ef6530
        font-size 1rem  
</style>