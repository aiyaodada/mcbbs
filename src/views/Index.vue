<template>
  <div>

    <div class="nav">
      <div class="container">
        <div class="df jcsb">
          <div>
            我的世界官网
          </div>
          <div style="width: 16%;">
           <el-input size="mini" placeholder="请输入内容" style="width: 100%;">
            <i slot="suffix" class="el-icon-search"></i>
           </el-input>
          </div>
        </div>
      </div>
    </div>
    <div class="container" style="margin-top: 20px;">

      <div class="df jcsb">
        <el-image style="width: 40% !important;height: 100px;"
          src="https://remcbbs.com/data/attachment/common/template/boardimg_20240325p0e983p4.png"></el-image>
        <el-image style="width: 20% !important;height: 100px;" src="public/images/guanggao/爱逍遥logo (1).png"></el-image>
      </div>

      <div style="margin-top: 20px;">
        <div class="nav_top"></div>
        <div class="df jcsb">
          <div class="nav_left"></div>
          <div class="nav_content">
            <Banner />
            <Plate :data="pluginsData" />
            <Plate :data="modsData" />
            <Plate :data="pluginsData" />
            <Plate :data="pluginsData" />
          </div>
          <div class="nav_right"></div>
        </div>
        <div class="nav_bottom"></div>
      </div>

    </div>

    <div class="container">
    </div>
    <Footer style="margin-top: 20px;" />
  </div>
</template>

<script>
import Banner from "@/components/Banner.vue"
import Plate from "@/components/Plate.vue"
import Footer from "@/components/Footer.vue"
export default {
  name: 'Index',
  components: {
    Banner,
    Plate,
    Footer
  },
  data() {
    return {
      activeIndex: '1',
      pluginsData: {
        title: "版主推荐 - 插件",
        url: "http://baidu.com/",
        data: [
          { id: "1", type: "1", style: "1", name: "[1.12.2] 淬炼插件", url: "http://baidu.com" },
          { id: "2", type: "1", style: "1", name: "[1.20.4] 淬炼插件", url: "http://baidu.com" },
          { id: "3", type: "1", style: "1", name: "[1.19.1] 淬炼插件", url: "http://baidu.com" },
          { id: "4", type: "1", style: "1", name: "[1.16.5] 淬炼插件", url: "http://baidu.com" },
          { id: "5", type: "1", style: "1", name: "[1.12.x] 淬炼插件", url: "http://baidu.com" },
          { id: "6", type: "1", style: "1", name: "[1.12.1] 淬炼插件", url: "http://baidu.com" },
          { id: "7", type: "1", style: "1", name: "[1.17.1] 淬炼插件", url: "http://baidu.com" },
          { id: "8", type: "1", style: "1", name: "[1.20.1] 淬炼插件", url: "http://baidu.com" },
        ]
      },
      modsData: {
        title: "版主推荐 - Mod",
        url: "http://baidu.com/",
        data: [
          { id: "1", type: "1", style: "1", name: "[全版本] 创世神", url: "http://baidu.com" },
          { id: "2", type: "1", style: "1", name: "[1.20.1] 拔刀剑", url: "http://baidu.com" },
          { id: "3", type: "1", style: "1", name: "[1.7.10] 植物魔法", url: "http://baidu.com" },
          { id: "4", type: "1", style: "1", name: "[1.12] 神奇宝贝", url: "http://baidu.com" },
          { id: "5", type: "1", style: "1", name: "[1.12.x] 淬炼插件", url: "http://baidu.com" },
          { id: "6", type: "1", style: "1", name: "[1.12.1] 淬炼插件", url: "http://baidu.com" },
          { id: "7", type: "1", style: "1", name: "[1.17.1] 淬炼插件", url: "http://baidu.com" },
          { id: "8", type: "1", style: "1", name: "[1.20.1] 淬炼插件", url: "http://baidu.com" },
        ]
      }
    };
  },
  methods: {
  }
};
</script>

<style scoped>
.nav_top {
  width: 100%;
  height: 59px;
  background: url(public/images/container/nav_top.png);
}

.nav_left {
  width: 84px;
  background: url(public/images/container/nav_left.png) left top repeat-y;
}

.nav_content {
  width: 85.4%;
  background: #faf2db;
}

.nav_right {
  width: 84px;
  background: url(public/images/container/nav_right.png) right top repeat-y;
}

.nav_bottom {
  width: 100%;
  height: 59px;
  background: url(public/images/container/nav_bottom.png);
}

.nav {
  height: 40px;
  color: #fff;line-height: 40px;
  background: url(public/images/header/nav.png);
}
</style>