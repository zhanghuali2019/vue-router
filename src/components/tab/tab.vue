<template>
  <el-menu class="tab">
    <el-submenu class="tab-item tabItem" v-for = "(item, index) in items" :key="index">
      <template slot="title">
        <span class="icon" :class="item.mark"></span><span class="tab-link">{{item.title}}</span>
      </template>
      <transition name="el-zoom-in-top">
        <el-menu class="tab-child" @click.stop>
          <router-link tag="li" v-for = "(a, index) in item.text" :key="index" class="tab-item tab-item-child" :to="a.to">{{a.txt}}</router-link>
        </el-menu>
      </transition>
    </el-submenu>
  </el-menu>
</template>

<script type="text/ecmascript-6">
export default {
  data: function () {
    return {
      items: [
        {
          mark: 'el-icon-time',
          title: 'Dashboard',
          upDown: 'el-icon-arrow-up',
          show: true,
          text: [
            {
              txt: '分析页',
              to: '/dashboard1'
            },
            {
              txt: '监控页',
              to: '/dashboard2'
            },
            {
              txt: '工作台',
              to: '/dashboard3'
            }
          ]
        },
        {
          mark: 'el-icon-edit-outline',
          title: '表单页',
          upDown: 'el-icon-arrow-up',
          text: [
            {
              txt: '基础表单页',
              to: '/menu1'
            },
            {
              txt: '分布表单页',
              to: '/menu2'
            },
            {
              txt: '高级表单页',
              to: '/menu3'
            }
          ]
        },
        {
          mark: 'el-icon-document',
          title: 'Dashboard',
          upDown: 'el-icon-arrow-up',
          text: [
            {
              txt: '查询表格页',
              to: '/list1'
            },
            {
              txt: '标准列表',
              to: '/list2'
            },
            {
              txt: '卡片列表',
              to: '/list3'
            },
            {
              txt: '搜索列表',
              to: '/list4'
            }
          ]
        },
        {
          mark: 'el-icon-tickets',
          title: '详情页',
          upDown: 'el-icon-arrow-up',
          text: [
            {
              txt: '基础详情页',
              to: '/detail1'
            },
            {
              txt: '高级详情页',
              to: '/detail2'
            }
          ]
        },
        {
          mark: 'el-icon-check',
          title: '结果页',
          upDown: 'el-icon-arrow-up',
          text: [
            {
              txt: '成功页',
              to: '/dashboard1'
            },
            {
              txt: '失败页',
              to: '/dashboard2'
            }
          ]
        },
        {
          mark: 'el-icon-circle-close',
          title: '异常页',
          upDown: 'el-icon-arrow-up',
          text: [
            {
              txt: '403',
              to: '/abnormal1'
            },
            {
              txt: '404',
              to: '/abnormal1'
            },
            {
              txt: '500',
              to: '/abnormal1'
            }
          ]
        },
        {
          mark: 'el-icon-star-off',
          title: '个人页',
          upDown: 'el-icon-arrow-down',
          text: [
            {
              txt: '个人中心',
              to: '/dashboard1'
            },
            {
              txt: '个人设置',
              to: '/dashboard2'
            }
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>
  .tab{
    width:100%;
    height:100%;
    background: #001529;
    float:left;
  }
  .tabItem{
    color:#697681
  }
  .tabItem:hover{
    color:white;
  }
  .icon{
    padding:0 10px 0 10px;
    color: #697681;
  }
  .tab-link{
    color: #697681;
  }
  .tab-item{
    width:100%;
    height:auto;
    color: #d3d3d3;
    padding: 0;
    text-align:left;
    display:block;
  }
  .tab-item:hover{
    cursor:pointer;
    color:white;
  }
  .tab-item-child{
    padding:10px 0 10px 30px;
  }
  .tab-item-child:hover {
    background: blue;
  }
  .tab-child{
    background: #000000;
  }
  ul,li{
    list-style: none;
  }
</style>
