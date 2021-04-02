<template>
    <div>

        <div style="margin: 20px;"></div>
        <el-form ref="mockform" :model="mock" label-width="120px">
            <el-form-item label="请输入路径:">
                <el-input v-model="mock.path" size="small"></el-input>
            </el-form-item>
            <el-form-item label="请输入参数:">
                <el-input size="small" v-model="mock.param"></el-input>
            </el-form-item>
            <el-form-item label="请输入方法名:">
                <el-input size="small" v-model="mock.method"></el-input>
            </el-form-item>
            <el-form-item label="返回值类型:">
                <el-radio-group v-model="mock.type">
                    <el-radio :label="0">固定返回</el-radio>
                    <el-radio :label="1">随机返回</el-radio>
                    <el-radio :label="2">传入返回</el-radio>

                </el-radio-group>
            </el-form-item>
            <el-form-item label="传入返回值:">
                <el-input size="small" v-model="mock.returnValue"></el-input>
            </el-form-item>
            <el-row style="margin: 20px;text-align: right">
                <el-button type="primary" @click="onSubmit" round>创建</el-button>
            </el-row>
        </el-form>


    </div>
</template>

<script>
    export default {
        name: "Test1",
        data() {
            return {

                radio: 0,
                mock: {

                    id: '',
                    method: '',
                    path: '',
                    param: '',
                    type: '',
                    responseVal: ''
                }
            };
        },
        methods: {
            onSubmit() {
                this.postRequest('/hello',this.mock).then(resp=>{
                    if(resp){

                    }
                })
            }
        }
    }
</script>

<style scoped>

</style>