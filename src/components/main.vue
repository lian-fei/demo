<template>
  <Layout class="main-container">
    <Sider ref="side1" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed">
      <div class="main-login">logo</div>
      <Menu :active-name="menuActiveName" theme="dark" width="auto" :class="menuitemClasses">
        <Submenu v-for="(item, i) in menus" :key="i" :name="item.level" >
            <template slot="title" :to="item.url" >
                <Icon class="iconfont" :class="item.icon"></Icon>
                {{item.name}}
            </template>
            <MenuItem v-for="(child, i) in item.children" :key="i" :name="child.level" :to="child.url" >
              <Icon class="iconfont" :class="child.icon"></Icon>
              {{child.name}}
            </MenuItem>
        </Submenu>
      </Menu>
    </Sider>
    <Layout>
      <Header :style="{padding: 0}" class="layout-header-bar">
        <Icon
          @click.native="collapsedSider"
          :class="rotateIcon"
          :style="{margin: '0 20px'}"
          type="md-menu"
          size="24"
        ></Icon>

        <div class="crumbbox">
          <Breadcrumb>
            <BreadcrumbItem to="/">
                <Icon type="ios-home-outline"></Icon> 首页
            </BreadcrumbItem>
            <BreadcrumbItem to="/components/breadcrumb">
                <Icon class=" iconfont icongongju3"></Icon> 维修中心
            </BreadcrumbItem>
            <BreadcrumbItem>
                <Icon class=" iconfont iconshuye2" ></Icon> 接单车
            </BreadcrumbItem>
          </Breadcrumb>
        </div>
      </Header>
      <div class="browerbox">
        <div class="browerbj">
          <ul class="clearfix">
            <li><span></span>首页</li>
            <li class="current" ><span></span>接车单详情<i class="iconfont iconguanbi"></i></li>
            <li><span></span>接车单<i class="iconfont iconguanbi"></i></li>
            <li><span></span>新建接车单<i class="iconfont iconguanbi"></i></li>
          </ul>
        </div>
      </div>
      <Content class="content-box" :style="{margin: '10px', background: '#fff', minHeight: '260px'}">
        <router-view/>
      </Content>
    </Layout>
  </Layout>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      isCollapsed: false,
      menus: [
        {
          level: '1',
          name: '维修中心',
          icon: 'icongongju3',
          url: 'projectList',
          children: [
            {level: '1-1', name: '接单车', icon: 'iconshuye2', url: 'demo1'},
            {level: '1-2', name: '预约单', icon: 'iconshuye2', url: 'demo2'},
            {level: '1-3', name: '维修历史', icon: 'iconshuye2', url: 'demo3'}
          ]
        },
        {level: '2', name: '仓库管理', icon: 'iconshuye', url: 'demo4'},
        {
          level: '3',
          name: '财务管理',
          icon: 'iconqian',
          children: [
            {level: '3-1', name: '应付账款', icon: 'iconshuye2', url: 'demo4'},
            {level: '3-2', name: '应收账款', icon: 'iconshuye2', url: 'demo5'}
          ]},
        {level: '4', name: '经营报表', icon: 'iconbingtu', url: 'demo'},
        {level: '5', name: '客户管理', icon: 'iconduoren', url: 'demo'},
        {level: '6', name: '基础资料', icon: 'iconziliao', url: 'demo'},
        {level: '7', name: '数据管理', icon: 'iconshuju', url: 'demo'},
        {level: '8', name: '系统设置', icon: 'iconshezhi', url: 'demo'}
      ],
      menuActiveName: '1-1'
    }
  },
  computed: {
    rotateIcon () {
      return ['menu-icon', this.isCollapsed ? 'rotate-icon' : '']
    },
    menuitemClasses () {
      return ['menu-item', this.isCollapsed ? 'collapsed-menu' : '']
    }
  },
  methods: {
    collapsedSider () {
      this.$refs.side1.toggleCollapse()
    }
  }
}
</script>

<style scoped lang="less" >
.main-container{
  position: absolute;
  height: 100%;
  width: 100%;
  .main-login{
    height:64px;
    line-height: 64px;
    background: #515a6e;
    font-size:30px;
    color:#fff;
    text-align:center;
    font-weight: bold;
  }
  .content-box{
    overflow-y:auto;
  }
  .crumbbox{
    display: inline-block;
  }
  .browerbox{
    background:#e2e2e2;
    padding:5px 0;
    .browerbj{
      background:#f5f7f9;
      padding:5px 10px;
      li{
        float:left;
        margin-right:5px;
        padding:0 10px;
        line-height: 30px;
        color:#616477;
        border:solid 1px #eaeaea;
        background: #fff;
        font-size:12px;
        span{
          width:10px;
          height:10px;
          display: inline-block;
          border-radius: 50%;
          background: #e9eaec;
          margin-right:10px;
        }
        i{
          // background: red;
          position: relative;
          display: inline-block;
          font-size:12px;
          margin-left:10px;
        }
      }
      .current{
        color:#70b2ef;
      }
    }
  }
}
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.layout-header-bar {
  background: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
}
.layout-logo-left {
  width: 90%;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  margin: 15px auto;
}
.menu-icon {
  transition: all 0.3s;
}
.rotate-icon {
  transform: rotate(-90deg);
}
.menu-item span {
  display: inline-block;
  overflow: hidden;
  width: 69px;
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align: bottom;
  transition: width 0.2s ease 0.2s;
}
.menu-item i {
  transform: translateX(0px);
  transition: font-size 0.2s ease, transform 0.2s ease;
  vertical-align: middle;
  font-size: 16px;
}
.collapsed-menu span {
  width: 0px;
  transition: width 0.2s ease;
}
.collapsed-menu i {
  transform: translateX(5px);
  transition: font-size 0.2s ease 0.2s, transform 0.2s ease 0.2s;
  vertical-align: middle;
  font-size: 22px;
}
</style>
