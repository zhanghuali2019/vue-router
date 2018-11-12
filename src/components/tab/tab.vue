<template>
  <ul class="tab">
    <li class="tab-item">
      <span class="icon el-icon-time"></span><span class="tab-link">Dashborad</span><i class="icon-down el-icon-arrow-down"></i>
      <ul class="tab-child">
        <router-link tag="li" class="tab-item tab-item-child" to="/dashboard1">分析页</router-link>
        <router-link tag="li" class="tab-item tab-item-child" to="/dashboard2">监控页</router-link>
        <router-link tag="li" class="tab-item tab-item-child" to="/dashboard3">工作台</router-link>
      </ul>
    </li>
    <li class="tab-item">
      <span class="icon el-icon-edit-outline"></span><span class="tab-link">表单页</span><i class="icon-down el-icon-arrow-down"></i>
      <ul class="tab-child">
        <router-link tag="li" class="tab-item tab-item-child" to="/menu1">基础表单</router-link>
        <router-link tag="li" class="tab-item tab-item-child" to="/menu2">分步表单</router-link>
        <router-link tag="li" class="tab-item tab-item-child" to="/menu3">高级表单</router-link>
      </ul>
    </li>
    <li class="tab-item">
      <span class="icon el-icon-tickets"></span><span class="tab-link">列表页</span><i class="icon-down el-icon-arrow-down"></i>
      <ul class="tab-child">
        <router-link tag="li" class="tab-item tab-item-child" to="/list1">查询表格</router-link>
        <router-link tag="li" class="tab-item tab-item-child" to="/list2">标准列表</router-link>
        <router-link tag="li" class="tab-item tab-item-child" to="/list3">卡片列表</router-link>
        <router-link tag="li" class="tab-item tab-item-child" to="/list4">搜索列表</router-link>
      </ul>
    </li>
    <li class="tab-item">
      <span class="icon el-icon-document"></span><span class="tab-link">详情页</span><i class="icon-down el-icon-arrow-down"></i>
      <ul class="tab-child">
        <router-link tag="li" class="tab-item tab-item-child" to="/detail1">基础详情页</router-link>
        <router-link tag="li" class="tab-item tab-item-child" to="/detail2">高级详情页</router-link>
      </ul>
    </li>
    <li class="tab-item">
      <span class="icon el-icon-success"></span><span class="tab-link">结果页</span><i class="icon-down el-icon-arrow-down"></i>
      <ul class="tab-child">
        <router-link tag="li" class="tab-item tab-item-child" to="/result1">成功页</router-link>
        <router-link tag="li" class="tab-item tab-item-child" to="/result2">失败页</router-link>
      </ul>
    </li>
    <li class="tab-item">
      <span class="icon el-icon-circle-close"></span><span class="tab-link">异常页</span><i class="icon-down el-icon-arrow-down"></i>
      <ul class="tab-child">
        <router-link tag="li" class="tab-item tab-item-child" to="/abnormal1">403</router-link>
        <router-link tag="li" class="tab-item tab-item-child" to="/abnormal2">404</router-link>
        <router-link tag="li" class="tab-item tab-item-child" to="/abnormal3">500</router-link>
      </ul>
    </li>
    <li class="tab-item">
      <span class="icon el-icon-star-on"></span><span class="tab-link">个人主页</span><i class="icon-down el-icon-arrow-down"></i>
      <ul class="tab-child">
        <router-link tag="li" class="tab-item tab-item-child" to="/personal1">个人中心</router-link>
        <router-link tag="li" class="tab-item tab-item-child" to="/personal2">个人设置</router-link>
      </ul>
    </li>
  </ul>
</template>

<script type="text/ecmascript-6">
export default {
}
</script>

<style scoped>
  .tab{
    width:100%;
    height:100%;
    background: #030307;
    float:left;
  }
  .icon{
    padding:0 10px 0 10px
  }
  .icon-down{
    float:right;
  }
  .tab-item{
    width:100%;
    height:auto;
    color:white;
    padding:10px 0;
    text-align:left;
  }
  .tab-item:hover{
    cursor:pointer;
  }
  .tab-item-child{
    padding:10px 0 10px 30px;
  }
</style>
