<template>
<div class="box">
  <div class="box-header with-border">
    <h3 class="box-title">
       <button id="addbtn" class="btn btn-block btn-success"><span class="fa fa-plus"></span> 添加</button>
    </h3>
    <div class="box-tools">
      <div class="input-group input-group-sm" style="width: 150px;">
        <input type="text" value="" name="pos_search" class="form-control pull-right" placeholder="搜索">

        <div class="input-group-btn">
          <button type="button" id="possearch" class="btn btn-default"><i class="fa fa-search"></i></button>
        </div>
      </div>
    </div>
  </div>
  <!-- /.box-header -->
  <div class="box-body">
    <table class="table table-bordered">
      <tr>
        <th style="width: 10px">#</th>
        <th>公司Logo</th>
        <th>公司名称</th>
        <th>职位名称</th>
        <th>工作地点</th>
        <th>发布时间</th>
        <th>岗位薪资</th>
        <th style="width: 140px">操作</th>
      </tr>
      <!-- {{if data.length > 0}} -->
        <!-- {{each data}} -->
        <tr v-if="positionLists.length>0" v-for="(item, index) in positionLists" :key="index">
          <td>{{index+1}}</td>
          <td><img width="50" height="50" :src="positionLists[index].cover" alt=""></td>
          <td>{{positionLists[index].title}}</td>
          <td>{{positionLists[index].id}}</td>
          <td>{{positionLists[index].rate}}</td>
          <td>{{positionLists[index].is_new}}</td>
          <td>{{positionLists[index].playable}}</td>
          <td>
            <button class="btn btn-sm btn-primary pos-edit" posid=""><span class="fa fa-edit"></span> 修改</button>
            <button class="btn btn-sm btn-danger pos-remove" posid="" filename=""><span class="fa fa-remove"></span> 删除</button>
          </td>
        </tr>
        <!-- {{/each}} -->
      <!-- {{else}} -->
        <tr v-else>
          <td colspan="8">暂无记录。</td>
        </tr>
      <!-- {{/if}} -->
    </table>
  </div>
  <!-- /.box-body -->
  <div class="box-footer clearfix">
    <ul class="pagination pagination-sm no-margin pull-right">
      <li><a href="#">&laquo;</a></li>
      <!-- {{each pages}} -->
      <li class=""><a href="#"></a></li>
      <!-- {{/each}} -->
      <li><a href="#">&raquo;</a></li>
    </ul>
  </div>
</div>
<!-- /.box -->
</template>

<script>
import axios from 'axios'

export default {
    name:'PositionList',
    data() {
        return {
            positionLists:[],
        }
    },

    beforeRouteEnter (to, from, next) {
      // next(vm => {
      //   // 通过 `vm` 访问组件实例
      //   console.log(121)
      // })
      axios.get("/mock/users/isSignin.json").then((res)=>{
        if(res.data.name == "ma" && res.data.password =="ma1215"){
          next()
          // next( vm => {
          //   console.log(vm)
          // })
        }else{
          alert('请求受限，请先登录！')
        }
      })
    },

    mounted() {
      axios.get("/mock/users/positionList.json").then((res)=>{
        this.positionLists = res.data.subjects;

      })
    },
}
</script>
