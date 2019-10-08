<template>
  <Layout class="main-container">
    <Sider ref="side1" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed">
      <div class="main-login"></div>
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
        <BreadcrumbItem to="/">
            <Icon type="ios-home-outline"></Icon> 首页
        </BreadcrumbItem>
        <BreadcrumbItem to="/demo2">
            <Icon type="logo-buffer"></Icon> 维修中心
        </BreadcrumbItem>
        <BreadcrumbItem>
            <Icon type="ios-cafe"></Icon> 接单车
        </BreadcrumbItem>
      </Header>
      <Content class="content-box" :style="{margin: '15px', background: '#fff', minHeight: '260px'}">
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
          icon: 'iconliebiao',
          url: 'projectList',
          children: [
            {level: '1-1', name: '接单车', icon: 'iconadd', url: 'demo1'},
            {level: '1-2', name: '预约单', icon: 'iconadd', url: 'demo2'},
            {level: '1-3', name: '维修历史', icon: 'iconadd', url: 'demo3'}
          ]
        },
        {level: '2', name: '仓库管理', icon: 'iconliebiao', url: 'demo4'},
        {
          level: '3',
          name: '财务管理',
          icon: 'iconliebiao',
          children: [
            {level: '3-1', name: '应付账款', icon: 'iconadd', url: 'demo4'},
            {level: '3-2', name: '应收账款', icon: 'iconadd', url: 'demo5'}
          ]},
        {level: '4', name: '经营报表', icon: 'iconliebiao', url: 'demo'}
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
    height:50px;
    background: green;
  }
  .ivu-layout-header{
    height:50px;
    line-height:50px;
  }
  .content-box{
    overflow-y:auto;
    padding:15px;
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
