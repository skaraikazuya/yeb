<template>
    <div>
        <el-container >
            <el-header class="homeHeader">
                <div class="title">
                    MockServer
                </div>

            </el-header>
            <el-container>
                <el-aside width="200px">
                    <el-menu router>
                        <el-submenu index="1" v-for="(item,index) in this.$router.options.routes"
                                    :key="index" v-if="!item.hidden">
                            <template slot="title">
                                <i class="el-icon-menu"></i>
                                <span>{{item.name}}</span>
                            </template>
                            <el-menu-item :index="children.path"
                                          v-for="(children,indexj) in item
                                          .children">{{children.name}}

                            </el-menu-item>
                        </el-submenu>
                    </el-menu>
                </el-aside>

                <el-main>
                    <el-breadcrumb separator-class="el-icon-arrow-right" v-if="this.$router.currentRoute.path!='/home'">
                        <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
                        <el-breadcrumb-item>{{this.$router.currentRoute.name}}</el-breadcrumb-item>
                    </el-breadcrumb>
                    <div class="homeWelcome" v-if="this.$router.currentRoute.path=='/home'">
                        欢迎来到MockServer平台
                    </div>
                    <router-view/>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
    export default {
        name: "Home"

    }
</script>

<style>
    .homeHeader{
        background:#409eff;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 15px;
        box-sizing: border-box;
    }
    .homeHeader .title{
        font-size: 30px;
        font-family: "Times New Roman";
        color: white;
    }
    .homeWelcome{
        text-align: center;
        font-size: 30px;
        font-family: 华文楷体;

    }

</style>