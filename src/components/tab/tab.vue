<template>
    <el-menu default-active="2" @open="handleOpen" @close="handleClose" background-color="#001529" text-color="#697681" active-text-color="#fff">
      <el-submenu v-for = "(item, index) in items" :key="index" :index="item.index">
        <template slot="title" class="left">
          <i :class="item.mark"></i>
          <span>{{item.title}}</span>
        </template>
        <el-menu-item-group>
          <el-menu-item v-for = "(a, index) in item.text" :key="index" :index="a.index" style="background: black">
            <router-link tag="span" :to="a.to">{{a.txt}}</router-link>
          </el-menu-item>
        </el-menu-item-group>
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
          index: '1',
          show: true,
          text: [
            {
              txt: '分析页',
              to: '/dashboard1',
              index: '11'
            },
            {
              txt: '监控页',
              to: '/dashboard2',
              index: '12'
            },
            {
              txt: '工作台',
              to: '/dashboard3',
              index: '13'
            }
          ]
        },
        {
          mark: 'el-icon-edit-outline',
          title: '表单页',
          upDown: 'el-icon-arrow-up',
          index: '2',
          text: [
            {
              txt: '基础表单页',
              to: '/menu1',
              index: '21'
            },
            {
              txt: '分布表单页',
              to: '/menu2',
              index: '22'
            },
            {
              txt: '高级表单页',
              to: '/menu3',
              index: '23'
            }
          ]
        },
        {
          mark: 'el-icon-document',
          title: '列表页',
          upDown: 'el-icon-arrow-up',
          index: '3',
          text: [
            {
              txt: '查询表格页',
              to: '/list1',
              index: '31'
            },
            {
              txt: '标准列表',
              to: '/list2',
              index: '32'
            },
            {
              txt: '卡片列表',
              to: '/list3',
              index: '33'
            },
            {
              txt: '搜索列表',
              to: '/list4',
              index: 34
            }
          ]
        },
        {
          mark: 'el-icon-tickets',
          title: '详情页',
          upDown: 'el-icon-arrow-up',
          index: '4',
          text: [
            {
              txt: '基础详情页',
              to: '/detail1',
              index: '41'
            },
            {
              txt: '高级详情页',
              to: '/detail2',
              index: '42'
            }
          ]
        },
        {
          mark: 'el-icon-check',
          title: '结果页',
          upDown: 'el-icon-arrow-up',
          index: '5',
          text: [
            {
              txt: '成功页',
              to: '/dashboard1',
              index: '51'
            },
            {
              txt: '失败页',
              to: '/dashboard2',
              index: '52'
            }
          ]
        },
        {
          mark: 'el-icon-circle-close',
          title: '异常页',
          upDown: 'el-icon-arrow-up',
          index: '6',
          text: [
            {
              txt: '403',
              to: '/abnormal1',
              index: '61'
            },
            {
              txt: '404',
              to: '/abnormal1',
              index: '62'
            },
            {
              txt: '500',
              to: '/abnormal1',
              index: '63'
            }
          ]
        },
        {
          mark: 'el-icon-star-off',
          title: '个人页',
          upDown: 'el-icon-arrow-down',
          index: '7',
          text: [
            {
              txt: '个人中心',
              to: '/dashboard1',
              index: '71'
            },
            {
              txt: '个人设置',
              to: '/dashboard2',
              index: '72'
            }
          ]
        }
      ]
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style scoped>
  .el-menu-item{
    padding:0;
    width:100%;
    box-sizing: border-box;
  }
  .el-menu{
    border:none;
  }
</style>
