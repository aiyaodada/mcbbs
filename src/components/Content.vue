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
                <el-image style="width: 20% !important;height: 100px;"
                    src="public/images/guanggao/爱逍遥logo (1).png"></el-image>
            </div>
            <div style="margin-top: 20px;">
                <div class="nav_top"></div>
                <div class="df jcsb">
                    <div class="nav_left"></div>
                    <div class="nav_content">
                        <slot></slot>
                    </div>
                    <div class="nav_right"></div>
                </div>
                <div class="nav_bottom"></div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'Centen',
    components: {
    },
    data() {
    }
};
</script>
  
<style scoped>
.nav {
    height: 40px;
    color: #fff;
    line-height: 40px;
    background: url(public/images/header/nav.png);
}

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
</style>