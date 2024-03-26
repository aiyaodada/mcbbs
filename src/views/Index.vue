<template>
  <div>
    <Content>
      <Banner />
      <Plate :data="pluginsData" />
      <Plate :data="modsData" />
      <Plate :data="pluginsData" />
      <Plate :data="pluginsData" />
    </Content>
    <Footer style="margin-top: 20px;" />
  </div>
</template>

<script>
import Banner from "@/components/Banner.vue"
import Plate from "@/components/Plate.vue"
import Footer from "@/components/Footer.vue"
import Content from "@/components/Content.vue"
export default {
  name: 'Index',
  components: {
    Banner,
    Plate,
    Content,
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
</style>