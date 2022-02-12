<template>
  <div class="menu">
    <div class="container">
      <div class="col1">
        <div class="category-container">
          <ul class="category-first">
            <li
              v-for="(items, index) in categoryTree"
              :key="index"
              class="cate_menu_item"
              @mouseenter="showChannel(items.channelNum)"
              @mouseleave="hiddenChannel(items.channelNum)"
            >
              <a
                v-for="item in items.productCategoryList"
                :key="item.id"
                target="_blank"
                class=""
                :href="item.linkUrl"
                >{{ item.categoryName }}<span>/</span></a
              >
            </li>
            <br />
          </ul>
          <div class="J_popCtn" v-show="true" @mouseleave="hiddenChannel()">
            <div v-for="(items, index) in categoryTree" :key="index">
              <div id="cate_part_col1">
                <div class="cate_channel">
                  <a
                    v-for="item in items.channelList"
                    :key="item.id"
                    target="_blank"
                    :href="item.linkUrl"
                    >{{ item.categoryName }}</a
                  >
                </div>
                <div class="cate_detail">
                  <a
                    v-for="item in items.titleList"
                    :key="item.id"
                    target="_blank"
                    :href="item.linkUrl"
                    >{{ item.categoryName }}</a
                  >
                </div>
              </div>
              <div id="cate_part_col2">
                <div class="cate_brand">
                  <a
                    v-for="item in items.brandList"
                    :key="item.id"
                    target="_blank"
                    class="cate_brand_1k"
                    :href="item.linkUrl"
                  >
                    <img
                      src="//misc.360buyimg.com/mtd/pc/common/img/blank.png"
                      width="83"
                      height="35"
                      alt=""
                    />
                  </a>
                </div>
                <div class="cate_promotion">
                  <a
                    v-for="item in items.promotionList"
                    :key="item.id"
                    target="_blank"
                    class="cate_promotion_1k"
                    :href="item.linkUrl"
                  >
                    <img
                      src="//misc.360buyimg.com/mtd/pc/common/img/blank.png"
                      width="168"
                      height="134"
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col2">
        <!-- <h2>列表2</h2> -->
        <!-- <div class="swiper-container">
          <div class="bigswiper"> -->
        <!-- <div class="swiper-wrap">
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
        </div> -->
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
import { GetCategoryTree } from "@/api/category";

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
      secondShow: false,
      categoryTree: {},
      categoryList: [],
      channelList: [],
      titleList: [],
      brandList: [],
      promotionList: [],
      channelNum: 0,
    };
  },
  mounted() {
    GetCategoryTree()
      .then((res) => {
        console.log(res);
        this.categoryTree = res.data.data;
        res.data.data.forEach((element) => {
          console.log(element);
          let category = {
            channelNum: element.channelNum,
            productCategoryList: element.productCategoryList,
          };
          this.categoryList.push(category);
          let channel = {
            channelNum: element.channelNum,
            list: element.channelList,
          };
          this.channelList.push(channel);

          let title = {
            channelNum: element.channelNum,
            list: element.titleList,
          };
          this.titleList.push(title);
          let brand = {
            channelNum: element.channelNum,
            list: element.brandList,
          };
          this.brandList.push(brand);
          let promotion = {
            channelNum: element.channelNum,
            list: element.promotionList,
          };
          this.promotionList.push(promotion);
        });
        console.log("channelList");
        console.log(this.channelList);
        this.channelNum = res.data.data.length;
        // this.categoryList = res.data.data.productCategoryList;
        // this.$message({
        //   type: "success",
        //   message: res.data,
        // });
        // this.loading = false;
        // this.countDown();
      })
      .catch((error) => {
        console.log(error);
        this.loading = false;
      });
  },
  methods: {
    showChannel() {
      this.secondShow = true;
      console.log("鼠标进入，显示二级目录");
    },
    hiddenChannel() {
      this.secondShow = false;
      console.log("鼠标离开，隐藏二级目录");
    },
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
      width: 190px;
      height: 500px;
      padding-right: 10px;
      float: left;
      font-size: 14px;
    }
    .col2 {
      width: 580px;
      height: 470px;
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

.category-first {
  list-style: none;
  margin: 0px;
  padding: 0px;
  overflow: hidden;
  float: left;
  li {
    float: left;
    padding-top: 10px;
    // display: inline;
  }
}
.swiper-wrap {
  height: 470px;
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

.cate_menu_item {
  overflow: hidden;
  padding-left: 18px;
}

.J_popCtn {
  position: absolute;
  left: 691px;
  width: 998px;
  min-height: 468px;
  border: 1px solid #f7f7f7;
  background-color: #fff;
  box-shadow: 2px 0 5px rgb(0, 0, 0);
  .cate_part {
    display: none;
    padding: 20px 0 10px;
    .cate_part_col1 {
      float: left;
      width: 800px;
    }
    .cate_part_col2 {
      float: left;
      width: 198px;
      .cate_brand {
        margin: auto;
        width: 168px;
        font-size: 0;
        .cate_brand_1k {
          overflow: hidden;
          display: inline-block;
          width: 83px;
          height: 35px;
          margin: 0 0 1px 1px;
          // background-color: #e7e7e7;
          background-color: #333;
        }
      }
      .cate_promotion {
        margin: 10px auto 0;
        width: 168px;
        .cate_promotion_1k {
          display: block;
          margin-bottom: 1px;
          height: 134px;
          background-color: #e7e7e7;
        }
      }
    }
  }
}

.cate_part_col1 {
  float: left;
  width: 800px;
}

.cate_channel {
  overflow: hidden;
  padding-left: 20px;
  height: 24px;
  .cate_channel_lk {
    float: left;
    margin-right: 10px;
    padding: 0 10px;
    height: 24px;
    background-color: #333;
    line-height: 24px;
    color: #fff;
  }
}
.cate_detail {
  overflow: hidden;
  padding: 10px 0 0 20px;
}

.category-second {
  position: absolute;
  width: 700px;
  margin-left: 200px;
  // height: 500px;
  z-index: 2;
  float: left;
  background-color: rgb(172, 247, 172);
  display: block;
  float: left;
  dl {
    position: relative;
    padding-left: 80px;
    display: block;
  }
  dt {
    // overflow: hidden;
    position: absolute;
    left: 0;
    top: 6px;
    width: 70px;
    text-align: right;
    font-weight: 700;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  dd {
    overflow: hidden;
    // padding: 5px 0;
    text-align: left;
    width: 500px;
  }
}
</style>
