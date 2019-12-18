<template>
    <div>
        <div>
            欢迎使用拉勾网管理系统，系统采用Gulp+AdminLTE+Bootstrap+SMERouter+ArtTemplate+Express+EJS+MongoDB+Mongoose
        </div>
        <!-- 合并单元格 -->
        <!-- :tableHeight=7.6 -->
        <!-- :height="`${7.6 * 30}px`" -->
        <el-table
                class="tableList"
                :header-cell-style="headerStyle"
                
                
                :data="tableData"
                :cell-class-name="page1CellClassNameStyle"
                :span-method="page1ObjectSpanMethod"
                >
                <!-- 
                :cell-class-name="page1CellClassNameStyle"
                :span-method="page1ObjectSpanMethod" -->
            <el-table-column prop="type" width="90px" label="四个方面"></el-table-column>
            <el-table-column prop="outstandingProblems" width="550px" label="突出问题"></el-table-column>
            <el-table-column prop="specificProblems" label="具体问题"></el-table-column>
        </el-table>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Home',
    data() {
        return {
            tableData: [],
            sgfmArr:[],
            outstandingArr:[],

        }
    },
    mounted() {
        axios.get("/mock/users/table.json").then((res)=>{
            // console.log(res.data.extendData)
            this.tableData = res.data.extendData;
            this.rowspan(this.tableData)
        })
    },
    methods: {
        // 头部样式
            headerStyle({row, rowIndex}) {
                return {
                    background: "rgba(76, 164, 255, 0.2)",
                    "border-right": `${0.01 * 30}px solid #fff`,
                    // color: "#DBE4EE",
                    color: "#000",
                    "font-weight": "100"
                };
            },

            // 弹框中的table添加表格边框
            page1CellClassNameStyle({row, column, rowIndex, columnIndex}) {
                return "tableBorder";
            },

            // 具体问题弹框 表格合并行
            page1ObjectSpanMethod({row, column, rowIndex, columnIndex}) {
                // console.log(columnIndex)
                 // type 四个方面合并
                if (columnIndex === 0) {
                    const _row = this.sgfmArr[rowIndex];
                    const _col = _row > 0 ? 1 : 0;
                    return {
                        rowspan: _row,
                        colspan: _col
                    }
                }
                // outstandingProblems 突出问题合并
                if (columnIndex === 1) {
                    const _row = this.outstandingArr[rowIndex];
                    const _col = _row > 0 ? 1 : 0;
                    return {
                        rowspan: _row,
                        colspan: _col
                    }
                }
            },

            // 具体问题弹框 表格合并行
            rowspan(listData) {  //合并单元格
                this.sgfmArr = [];
                this.outstandingArr = [];
                // type 四个方面
                listData.forEach((item, index) => {
                    if (index === 0) {
                        this.sgfmArr.push(1);
                        this.sgfmDataTable1 = 0;
                    } else {
                        if (listData[index].type === listData[index - 1].type) {
                            this.sgfmArr[this.sgfmDataTable1] += 1;
                            this.sgfmArr.push(0);
                        } else {
                            this.sgfmArr.push(1);
                            this.sgfmDataTable1 = index;
                        }
                    }
                })
                // outstandingProblems 突出问题
                listData.forEach((item, index) => {
                    if (index === 0) {
                        this.outstandingArr.push(1);
                        this.outstandingData = 0;
                    } else {
                        if (listData[index].outstandingProblems === listData[index - 1].outstandingProblems && (this.sgfmArr[index - 1] > 1 || this.sgfmArr[index - 1] == 0) && this.sgfmArr[index] == 0 ) {
                            this.outstandingArr[this.outstandingData] += 1;
                            this.outstandingArr.push(0);
                        } else {
                            this.outstandingArr.push(1);
                            this.outstandingData = index;
                        }
                    }
                })
            },
    },
}
</script>

<style lang="scss" scoped>
    .tableList td, th {
        // padding: 0;
        border: 1px solid #000;
    }
    .tableList{
        height: 850px;
        overflow:scroll;
    }
    // td{
    //     border: 1px solid #000;
    // }
    // th {
    //     border: 1px solid #000;
    // }
    // el-table{
    //     table{
    //         border: 1px !important;
    //     }
    // }
    // table{
    //     border: 1px !important;
    // }
</style>
