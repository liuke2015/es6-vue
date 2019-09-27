<template>
  <div id="testES6"></div>
</template>

<script>
  //以下是语法练习的引入文件
  /*import "@assets/js/lesson17"*/

  /*import {A,test,Hello} from "@assets/js/lesson18"*/
  /*import {A} from "@assets/js/lesson18"*/
  /*import * as lesson from "@assets/js/lesson18"*/
  /*import lesson18 from "@assets/js/lesson18"*///exprot default的时候用这种方法

  //以下是项目实战的引入文件
  /*import "babel-polyfill";*/
  import lottery from "@assets/lottery"

  export default {
    name: "testES6",
    msg: "es6js练习入口文件",
    data() {
      return {}
    },
    methods: {}
  }
</script>

<style lang="less">
</style>
