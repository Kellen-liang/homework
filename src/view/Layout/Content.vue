<template>
  <div class="container">
    <div class="content-box" @click="navTo(item.src)" v-for="(item,index) of data" :key="index">
      <div class="content-img"><img :src="item.img" alt=""></div>
      <div class="content-info">
        <div class="info-top">
          <p>未来远景|半径之缘</p>
          <p>空间-商业空间设计</p>
        </div>
        <div class="info-user">
          <img src="./imgs/矢量图/eye.svg" alt="" srcset=""><span>73</span>
          <img src="./imgs/矢量图/008对话框-5.svg" alt="" srcset=""><span>0</span>
          <img src="./imgs/矢量图/点赞.svg" alt="" srcset=""><span>0</span>
        </div>
      </div>
      <div class="author">
        <span>{{item.author}}</span>
        <span>2小时前</span>
      </div>
    </div>
  </div>
</template>

<script setup>
const data  =[
  {
    img: require("./imgs/content/1.webp"),
    author:"刘宏萱KarvOne",
    src:"https://online-shop-gamma.vercel.app/#/Login",
  },
  {
    img: require("./imgs/content/2.webp"),
    author:"陈嘉辉KarvOne",
    src:"https://personal-brown.vercel.app/#/",
  },
  {
    img: require("./imgs/content/3.webp"),
    author:"黄汉煜KarvOne",
    src:"https://fangwangyiyun.vercel.app/home",
  },
  {
    img: require("./imgs/content/4.webp"),
    author:"温浩文KarvOne",
    src:"http://monado-react-ts-template.vercel.app/",
  },
  {
    img: require("./imgs/content/5.webp"),
    author:"李儒森KarvOne",
    src:"https://lirusen.vercel.app/#/",
  },
  {
    img: require("./imgs/content/6.webp"),
    author:"李嘉慧KarvOne",
    src:"https://lijiahui.vercel.app/",
  },
  {
    img: require("./imgs/content/7.webp"),
    author:"梁志明KarvOne",
    src:"https://todolist-homework.vercel.app",
  },
  {
    img: require("./imgs/content/8.webp"),
    author:"百度KarvOne",
    src:"https://www.baidu.com",
  },

]

const navTo = (path)=>{
  let a = document.createElement("a")
  a.href = path
  a.target="_blank"
  a.click()
  a = null
}

</script>

<style lang="less" scoped>
.container {
  margin-top: 20px;
  width: 98%;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  flex-wrap: wrap;
  overflow: hidden;
  gap: 2%;

  &::after {
    content: "";
    display: block;
    flex: 1;
  }

  .content-box {
    cursor: pointer;
    display: inline-block;
    padding: 0;
    text-decoration: none;
    margin-top: 30px !important;
    background-color: #fff;
    box-sizing: border-box;
    margin: 0 5px 5px 0;
    width: 23%;
    height: 350px;
    box-shadow: -2px 2px 10px -1px #00000030;
    border-radius: 4px;
    overflow: hidden;

    .content-img {
      width: 100%;
      height: 60%;
      border-bottom: 1px solid black;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .content-info {
      font-size: 14px !important;
      box-sizing: border-box;
      padding: 15px;
      width: 100%;
      height: 30%;
      border-bottom: 1px solid #00000021;

      .info-top {
        box-sizing: border-box;
        height: 50%;

        &>p:last-child {
          font-size: 12px;
          margin-top: 5px;
          color: gray;
        }
      }

      .info-user {
        display: flex;
        align-items: center;
        box-sizing: border-box;
        padding-top: 10px;
        height: 50%;
        line-height: 30px;

        img {
          margin-left: 10px;
          width: 20px;
          height: 20px;
        }

        &>span {
          color: rgb(191, 191, 191) !important;
        }
      }

    }

    .author {
      font-size: 14px;
      box-sizing: border-box;
      padding: 0 10px;
      width: 100%;
      height: 10%;
      display: flex;
      align-items: center;
      justify-content: space-between;

      &>span {
        display: block;
      }

      &>span:last-child {
        color: rgb(191, 191, 191) !important;
      }

      a {
        text-decoration: none;
        color: black;
      }

      &::before {
        display: block;
        content: '';
        width: 5px;
        height: 8px;
        background-color: rgb(195, 243, 149);
      }
    }
  }
}
</style>