<template>
        <iframe
          class="dy-inframe"
          frameborder="0"
          :src="roomId"></iframe>
      </template>
      <script>
      export default {
        name: 'room',
        computed: {
          roomId() {
            return '//m.douyu.com/' + this.$route.params.id
          }
        }
      }
      </script>
      <style lang="stylus">
      .dy-inframe 
        width: 100%
        height: 1050px
        overflow-x: hidden
        overflow-y: auto
      </style>
      