<template>
  <div class="addproject-container" >
    <div class="addpriject-item">
      <div class="item-l">项目名称：</div>
      <div class="item-r">
        <Input placeholder="" style="width: 30%;" />
      </div>
    </div>
    <div class="addpriject-item">
      <div class="item-l">gitlab地址：</div>
      <div class="item-r">
        <Input placeholder="" style="width: 30%;" />
      </div>
    </div>
    <div class="addpriject-item">
      <div class="item-l">创建人：</div>
      <div class="item-r">
        <Input placeholder="" style="width: 30%;" />
      </div>
    </div>
    <div class="addpriject-item">
      <div class="item-l"></div>
      <div class="item-r">
        <Button type="primary" size="big" style="margin-right: 5px" @click="show(index)">添加</Button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'addProject',
  data () {
    return {
    }
  },
  components: {},
  created () {},
  mounted () {},
  methods: {}
}
</script>

<style scoped lang="less" >
.addproject-container{
  padding-top:30px;
  .addpriject-item{
    margin-bottom:15px;
    .item-l{
      width:100px;
      text-align:right;
      padding:0 10px;
      line-height: 30px;
      float:left;
    }
    .item-r{
      width:100%;
      margin-left:100px;
      height:30px;
    }
  }
}
</style>
