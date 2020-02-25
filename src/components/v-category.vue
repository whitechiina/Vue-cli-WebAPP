<template>
    <div>
        <div class="container" :class="{'show-sidebar':navStatus}">
        <div class="list">
            <ul>
                <li v-for="category in categorys" 
                :key="category.shortName" @click="show">
                    <a @click="go(category)">
                        <span class="name">{{category.cate1Name}}</span>
                        <span class="icon">
                            <svg t="1582514057926" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2080" width="200" height="200"><path d="M915.110634 526.94854c-11.698858-11.698858-30.697002-11.698858-42.39586 0L490.852065 908.711259c-11.698858 11.698858-11.698858 30.697002 0 42.395859s30.697002 11.698858 42.39586 0l381.762718-381.762718c11.798848-11.698858 11.798848-30.697002 0.099991-42.39586z" fill="#FF6600" p-id="2081"></path><path d="M534.247827 908.811249l-381.962699-381.962699c-11.698858-11.698858-30.697002-11.698858-42.395859 0s-11.698858 30.697002 0 42.39586l381.962699 381.962699c11.698858 11.698858 30.697002 11.698858 42.395859 0s11.698858-30.697002 0-42.39586z" fill="#FF6600" p-id="2082"></path><path d="M915.110634 72.992872c-11.698858-11.698858-30.697002-11.698858-42.39586 0L490.852065 454.75559c-11.698858 11.698858-11.698858 30.697002 0 42.39586s30.697002 11.698858 42.39586 0l381.762718-381.762718c11.798848-11.698858 11.798848-30.697002 0.099991-42.39586z" fill="#FF6600" p-id="2083"></path><path d="M534.247827 454.855581l-381.962699-381.962699c-11.698858-11.698858-30.697002-11.698858-42.395859 0s-11.698858 30.697002 0 42.395859l381.962699 381.962699c11.698858 11.698858 30.697002 11.698858 42.395859 0s11.698858-30.697002 0-42.395859z" fill="#FF6600" p-id="2084"></path></svg>
                        </span>
                    </a>
                </li>
            </ul>
        </div>
        
    </div>
    <!-- 右侧蒙层 -->
    <div class="right" v-show="navStatus" @click="show">
    </div>
    </div>
</template>

<script>
export default {
    props: {
        navStatus: {
            type: Boolean,
            default: false
        },
        categorys: {
            type: Array,
            default: () => []
        }
    },
    methods: {
        show(){
            this.$emit('close')
        },
        go(category) {
            this.$cookie.set('cateName', category.cate1Name)
            this.$router.push({ name: 'list', query: { id: category.cate1Id }})
        }
    },
}
</script>

<style lang="stylus" scoped>
    .container
        background: #282828
        position: fixed
        -webkit-transform: translateZ(0)
        transform: translateZ(0)
        height: 100%
        width: 14rem
        left: -14rem
        z-index: 500
        top: 0
        bottom: 0
        -webkit-transition: all 0.3s ease
        transition: all 0.3s ease
        &.show-sidebar 
            -webkit-transform: translateX(14rem)
            transform: translateX(14rem)
    .list
        width 100%
        height 100%
        padding .3125rem /* 5/16 */
        ul
            li
                line-height 3.125rem /* 50/16 */
                padding 0rem .6rem
                clear both
                position relative
                a
                    color #9a9a9a
                    font-size 1rem /* 16/16 */
                    .name
                        float left
                    .icon
                        float right
                        width 1rem
                        height 1rem
                        margin-top .4rem
    .right
        position: fixed;
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 5;
        background: rgba(0, 0, 0, 0.7);
</style>