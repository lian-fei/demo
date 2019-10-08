<template>
  <div class="projectList-container">
    <Table :columns="columns1" :data="data1">
      <!-- 操作 -->
      <template slot-scope="{ row, index }" slot="action">
        <Button type="primary" size="small" style="margin-right: 5px" @click="show(index)">打包</Button>
        <Button type="primary" size="small" style="margin-right: 5px" @click="show(index)">发布</Button>
      </template>
    </Table>
  </div>
</template>

<script>
export default {
  name: 'projectList',
  data () {
    return {
      columns1: [
        {
          title: 'id',
          type: 'index'
        },
        {
          title: '项目名称',
          key: 'name'
        },
        {
          title: '最新版本',
          key: 'name'
        },
        {
          title: '创建人',
          key: 'age'
        },
        {
          title: '操作',
          slot: 'action',
          align: 'center'
        }
      ],
      data1: [
        {
          name: 'John Brown',
          age: 18,
          address: 'New York No. 1 Lake Park',
          date: '2016-10-03'
        }
      ]
    }
  },
  components: {},
  created () {},
  mounted () {},
  methods: {}
}
</script>

<style scoped lang="less" >
  .projectList-container{
  }
</style>
