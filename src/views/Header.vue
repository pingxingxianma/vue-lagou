<template>
    <header class="main-header">

  <!-- Logo -->
  <a href="index2.html" class="logo">
    <!-- mini logo for sidebar mini 50x50 pixels -->
    <span class="logo-mini"><b>拉勾</b></span>
    <!-- logo for regular state and mobile devices -->
    <span class="logo-lg"><b>拉勾</b>管理系统</span>
  </a>

  <!-- Header Navbar -->
  <nav class="navbar navbar-static-top" role="navigation">
    <!-- Sidebar toggle button-->
    <a href="#" class="sidebar-toggle" data-toggle="offcanvas" role="button">
      <span class="sr-only">切换导航</span>
    </a>
    <!-- Navbar Right Menu -->
    <div class="navbar-custom-menu">
      <ul class="nav navbar-nav">
        <!-- Messages: style can be found in dropdown.less-->
        <li class="dropdown messages-menu">
          <!-- Menu toggle button -->
          <a href="#" class="dropdown-toggle" data-toggle="dropdown">
            <i class="fa fa-envelope-o"></i>
            <span class="label label-success">4</span>
          </a>
          <ul class="dropdown-menu">
            <li class="header">You have 4 messages</li>
            <li>
              <!-- inner menu: contains the messages -->
              <ul class="menu">
                <li><!-- start message -->
                  <a href="#">
                    <div class="pull-left">
                      <!-- User Image -->
                      <img src="../assets/images/user2-160x160.jpg" class="img-circle" alt="User Image">
                    </div>
                    <!-- Message title and timestamp -->
                    <h4>
                      Support Team
                      <small><i class="fa fa-clock-o"></i> 5 mins</small>
                    </h4>
                    <!-- The message -->
                    <p>Why not buy a new awesome theme?</p>
                  </a>
                </li>
                <!-- end message -->
              </ul>
              <!-- /.menu -->
            </li>
            <li class="footer"><a href="#">查看所有消息</a></li>
          </ul>
        </li>
        <!-- /.messages-menu -->

        <!-- Notifications Menu -->
        <li class="dropdown notifications-menu">
          <!-- Menu toggle button -->
          <a href="#" class="dropdown-toggle" data-toggle="dropdown">
            <i class="fa fa-bell-o"></i>
            <span class="label label-warning">10</span>
          </a>
          <ul class="dropdown-menu">
            <li class="header">You have 10 notifications</li>
            <li>
              <!-- Inner Menu: contains the notifications -->
              <ul class="menu">
                <li><!-- start notification -->
                  <a href="#">
                    <i class="fa fa-users text-aqua"></i> 5 new members joined today
                  </a>
                </li>
                <!-- end notification -->
              </ul>
            </li>
            <li class="footer"><a href="#">全部</a></li>
          </ul>
        </li>
        <!-- Tasks Menu -->
        <li class="dropdown tasks-menu">
          <!-- Menu Toggle Button -->
          <a href="#" class="dropdown-toggle" data-toggle="dropdown">
            <i class="fa fa-flag-o"></i>
            <span class="label label-danger">9</span>
          </a>
          <ul class="dropdown-menu">
            <li class="header">You have 9 tasks</li>
            <li>
              <!-- Inner menu: contains the tasks -->
              <ul class="menu">
                <li><!-- Task item -->
                  <a href="#">
                    <!-- Task title and progress text -->
                    <h3>
                      设计按钮
                      <small class="pull-right">20%</small>
                    </h3>
                    <!-- The progress bar -->
                    <div class="progress xs">
                      <!-- Change the css width attribute to simulate progress -->
                      <div class="progress-bar progress-bar-aqua" style="width: 20%" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
                        <span class="sr-only">20% Complete</span>
                      </div>
                    </div>
                  </a>
                </li>
                <!-- end task item -->
              </ul>
            </li>
            <li class="footer">
              查看所有任务
            </li>
          </ul>
        </li>
        <!-- User Account Menu -->
        <li class="dropdown user user-menu">
          <!-- Menu Toggle Button -->
          <a href="#" class="dropdown-toggle" data-toggle="dropdown">
            <!-- The user image in the navbar-->
            <template v-if="isSignin">
              <img src="../assets/images/user2-160x160.jpg" class="user-image" alt="User Image">
              <!-- hidden-xs hides the username on small devices so only the image appears. -->
              <span class="hidden-xs">{{greeting}}</span>
            </template>
            <template v-else>
              <div id="click-btn">
                <span @click="changeButtonType('signin')">登录</span>
                <span @click="changeButtonType('signup')">注册</span>
              </div>
            </template>
            <!-- {{/if}} -->
          </a>
          <ul class="dropdown-menu">
            <!-- The user image in the menu -->
            <!-- {{if !isSignin}} -->
            <template v-if="!isSignin">
              <li class="user-header" id="user-header">
                <form role="form">
                  <div class="box-body">
                    <div class="form-group user">
                      <label for="exampleInputEmail1">用户名：</label>
                      <input type="text" class="form-control" v-model="userinfo.username" placeholder="请输入用户名">
                    </div>
                    <div class="form-group">
                      <label for="exampleInputPassword1">密码：</label>
                      <input type="password" class="form-control" v-model="userinfo.password" placeholder="请输入密码">
                    </div>
                  </div>
                </form>
              </li>
            </template>

            <template v-else>
              <li class="user-header">
                <img src="../assets/images/user2-160x160.jpg" class="img-circle" alt="User Image">
              </li>
            </template>
            <!-- {{/if}} -->

            <!-- Menu Footer-->
            <li class="user-footer">
              <div class="pull-left">
                <a href="javascript:void(0)" class="btn btn-default btn-flat">关闭</a>
              </div>
              <template v-if="!isSignin">
                <div class="pull-right">
                  <a href="javascript:void(0)" @click="handleSubmitClick()" class="btn btn-default btn-flat">提交</a>
                </div>
              </template>
              
              <template v-else>
                <div class="pull-right">
                  <a href="javascript:void(0)" @click="handleSignoutClick()" class="btn btn-default btn-flat">退出</a>
                </div>
              </template>
              
              <!-- {{/if}} -->
            </li>
          </ul>
        </li>
        <!-- Control Sidebar Toggle Button -->
        <li>
          <a href="#" data-toggle="control-sidebar"><i class="fa fa-gears"></i></a>
        </li>
      </ul>
    </div>
  </nav>
</header>
</template>

<script>
// import userModel from '../models/user'
// var wsCache = new WebStorageCache()

import axios from 'axios'
export default {
    name:'Header',
    data(){
        return{
            greeting:'',
            isSignin:false,
            buttonType:'',
            userinfo:{
              username:'ma',
              password:'ma1215'
              // username:'',
              // password:''
            }
        }
    },

    mounted() {
      axios.get("/mock/users/isSignin.json").then((res)=>{
        // console.log(res.data)
        if(res.data.name == "ma" && res.data.password =="ma1215"){
          this.greeting = `你好, ${res.data.name}`;
        }else{
          this.greeting = '',
          this.isSignin = false
        }
      })
    },

    methods: {
      changeButtonType(type){
        this.buttonType = type
      },

      async handleSubmitClick(){
        // const {userinfo, password} = this.userinfo;
        if(this.buttonType == 'signin'){
          // console.log('signin');
          // let result = await userModel.sign(this.userinfo, 'signin')
          // if(result.ret){
          //   wsCache.set('token', result.data.token);
          //   this.greeting = `你好，${result.data.username}`;
          //   this.isSignin = true
          // }
          axios.get("/mock/users/isSignin.json").then((res)=>{
            if(res.data.name == this.userinfo.username && res.data.password == this.userinfo.password){
              this.greeting = `你好, ${res.data.name}`;
              this.isSignin = true
            }else{
              this.greeting = '',
              this.isSignin = false
            }
          })
        }else{
          // let result = await userModel.sign(this.userinfo, 'signup')
          // console.log('signup');
        }
      },

      handleSignoutClick(){
        // wsCache.delete('token');
        this.greeting = '';
        this.isSignin = false;
      }
    },
}
</script>

<style lang="scss" scoped>

</style>




