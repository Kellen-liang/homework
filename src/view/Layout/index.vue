<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <el-menu  :default-active="activeIndex" mode="horizontal" background-color="rbg(255, 227, 0)" text-color="black">
          <img src="./imgs/logo.png" alt="" srcset="">
          <el-menu-item index="1" style="margin-left: 300px;">首页</el-menu-item>
          <el-menu-item index="2">发现</el-menu-item>
          <el-menu-item index="3">共创</el-menu-item>
          <el-menu-item index="4">活动</el-menu-item>
          <el-menu-item index="5">正版素材</el-menu-item>
          <el-menu-item index="6">课程</el-menu-item>
          <el-menu-item index="7">版权保护</el-menu-item>
        </el-menu>
      </el-header>
      <el-main>
        <SlideShow />
        <Content />
      </el-main>
    </el-container>
  </div>
</template>

<script setup>

import SlideShow from "./SlideShow.vue";
import {
  ElContainer,
  ElHeader,
  ElMain,
  ElMenu,
  ElMenuItem,
} from "element-plus";
import Content from "./Content.vue";
import { ref } from 'vue'

const activeIndex = ref('1')

</script>

<style lang="less" scoped>
.el-header {
  background: rgb(255, 227, 0);
  color:  black;
  .el-menu {
    .el-menu-item {
      border: none !important;
      &:hover {
        color: rgb(255, 227, 0) !important;
        background-color: rgb(40, 40, 40);
      }
    }
    .is-active {
      background: none;
      color: black !important;
      font-weight: bold;
      border-bottom: none !important;
    }
    .el-sub-menu {
      &:hover {
        color: rgb(255, 227, 0) !important;
        background-color: rgb(40, 40, 40);
      }
      &>.el-menu-item  {
        &:hover {
          background: rgb(255, 227, 0) !important;
        }
      }
    }
    .is-opened {
      color: rgb(255, 227, 0) !important;
      background-color: rgb(40, 40, 40) ;
    }
  }
}
.el-main {
  width: 80vw;
  // height: 90vh;
  margin: 20px auto;
  // background-color: aqua;
  padding: 0;
  border-radius: 5px;
  overflow: hidden;
}
</style>