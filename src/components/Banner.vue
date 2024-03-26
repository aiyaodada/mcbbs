<template>
    <div>
        <el-carousel :interval="5000" arrow="always">
            <el-carousel-item>
                <el-image src="public/images/banner01.jpeg" fit="fill"></el-image>
            </el-carousel-item>
            <el-carousel-item>
                <el-image src="public/images/banner02.jpg" fit="fill"></el-image>
            </el-carousel-item>
            <el-carousel-item>
                <el-image src="public/images/banner03.jpg" fit="fill"></el-image>
            </el-carousel-item>
            <el-carousel-item>
                <el-image src="public/images/banner04.jpg" fit="fill"></el-image>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>
  
<script>

export default {
    name: 'IndexBanner',
    data() {
        return {
        };
    },
    methods: {
    }
};
</script>
  
<style scoped>
.el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
}

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
}
</style>