<template>
    <div class="main">
        <div class="live">
            <router-link class="room" tag="div" :to="{name: 'room', params: { id: lists.rid }}" v-for="(lists,index) in list" :key="index">
                <img class="live-img" v-lazy="lists.roomSrc">
                <div class="live-title">{{lists.roomName}}</div>
                <div class="live-info">
                    <span class="live-name">{{lists.nickname}}</span>
                    <span class="live-num">{{lists.hn}}</span>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
    import {
        home
    } from '../api/serve.js';
    export default {
        data() {
            return {
                list: []
            }
        },
        created() {
            this.getData()
        },
        methods: {
            getData() {
                home().then(res => {
                    this.list = res.data
                    let arr = []
                    this.list.forEach(item => {
                        item.list.forEach(item2 => {
                            arr.push(item2)
                            this.list = arr
                        })
                    })
                })
            }
        },
    }
</script>

<style lang="stylus" scoped>
.main
    width: 100%;
    .live
        width 100%
        .room
            position relative
            width 50%
            float left
            padding .3125rem /* 5/16 */
            .live-img
                width 100%
                box-sizing border-box
                border-radius .4125rem
            .live-info 
                position absolute
                bottom 1.625rem /* 26/16 */
                left 1rem
                color #fff
                .live-name
                    white-space: nowrap
                    text-overflow: ellipsis
                    overflow: hidden
                    max-width: 4.746666666rem
                    display: inline-block
                    padding-left: 0.1rem
                .live-num
                    float: right
                    padding-left: 3.6rem
</style>