<template>
  <Layout class="main-container">
    <Sider ref="side1" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed">
      <Menu :active-name="menuActiveName" theme="dark" width="auto" :class="menuitemClasses">
        <MenuItem v-for="(item, i) in menus" :key="i" :name="item.url" :to="item.url" >
          <Icon class="iconfont iconadd" :class="item.icon"></Icon>
          <span>{{item.name}}</span>
        </MenuItem>
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
        {name: '项目列表', icon: 'iconliebiao', url: 'projectList'},
        {name: '创建项目', icon: 'iconadd', url: 'addProject'}
      ],
      menuActiveName: 'projectList'
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
