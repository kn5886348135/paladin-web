<template>
  <div class="menu">
    <div class="container">
      <div class="col1">
        <h2>列表1</h2>
      </div>
      <div class="col2">
        <!-- <h2>列表2</h2> -->
        <!-- <div class="swiper-container">
          <div class="bigswiper"> -->
        <div class="swiper-wrap">
          <swiper class="swiper" :options="swiperOption">
            <swiper-slide class="slide1">swiper1</swiper-slide>
            <swiper-slide class="slide3">swiper2</swiper-slide>
            <swiper-slide class="slide2">swiper3</swiper-slide>
            <swiper-slide class="slide4">swiper4</swiper-slide>
            <swiper-slide class="slide5">swiper5</swiper-slide>
            <swiper-slide class="slide6">swiper6</swiper-slide>
            <swiper-slide class="slide7">swiper7</swiper-slide>
            <swiper-slide class="slide8">swiper8</swiper-slide>
          </swiper>
        </div>
      </div>
      <!-- <div class="smallswiper">
            <div class="swiper-wrap">
              <swiper class="swiper" :options="swiperOption">
                <swiper-slide>
                  <div>
                    <div class="smallswiper11"></div>
                    <div class="smallswiper12"></div>
                    <div class="smallswiper13"></div>
                  </div>
                </swiper-slide>
                <swiper-slide><div></div></swiper-slide>
                <swiper-slide><div></div></swiper-slide>
              </swiper>
            </div>
          </div> -->
      <!-- </div>
      </div> -->

      <div class="col3">
        <h2>列表3</h2>
      </div>
    </div>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
  name: "Menu",
  components: { Swiper, SwiperSlide },
  data() {
    return {
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 50,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
    };
  },
};
</script>
<style lang="scss">
.menu {
  // width: 50%;
  height: 500px;
  text-align: center;
  display: block;
  position: relative;
  .container {
    display: inline-block;
    .col1 {
      width: 100px;
      height: 500px;
      padding-right: 10px;
      float: left;
    }
    .col2 {
      width: 580px;
      padding-left: 10px;
      padding-right: 10px;
      height: 500px;
      float: left;
    }
    .col3 {
      width: 200px;
      float: left;
      height: 500px;
      padding-left: 10px;
    }
  }
}

.swiper-wrap {
  height: 500px;
}

.swiper-container {
  text-align: center;
  .bigswiper {
    float: left;
  }
  .smalswiper {
    float: right;
  }
}
</style>
