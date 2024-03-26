<template>
  <div class="box box-bg">
    <div class="box-title">
      <div class="df jcsb h100 px-1">
        <!-- <div><el-image src=""></el-image></div> -->
        <div class="text-center title">{{ data.title }}</div>
        <div class="subtitle">更多</div>
      </div>
    </div>
    <!-- <el-divider></el-divider> -->
    <div class="df jcsa fww">
      <div v-for="item in data.data" :key="item.id"
        style="width: 21%;background: #faf2db; margin: 10px 0px;text-align: center;height: 100px;">
        {{ item.name }}</div>
    </div>
  </div>
</template>
  
<script>
export default {
  name: 'Plugins',
  props: {
    data: {
      type: Object,
      default: ''
    }
  },
  data() {
    return {
    };
  },
  methods: {
  }
};
</script>
  
<style scoped>
.box {
  margin-top: 20px;
  width: 100%;
  height: 300px;
  border-radius: 6px;
}

.box-title {
  height: 40px;
  background: url(public/images/container/nav_title.png) top left repeat-x;
}

.title {
  /* background: #fff; */
  margin-top: 4px;
  /* width: 100px; */
  line-height: 35px;
  /* color: #54442a; */
  color: #f9fafc;
  font-weight: bold;
}
.subtitle{
  color: #f9fafc;
  line-height: 40px;
  font-size: 12px;
}

.el-row {
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }
}

.el-col {
  border-radius: 4px;
}

.bg-purple-dark {
  background: #99a9bf;
}

.bg-purple {
  background: #d3dce6;
}

.bg-purple-light {
  background: #e5e9f2;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>