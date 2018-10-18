<template>
    <div class="footer">
      <router-link to="/home">
        <i class="iconfont icon-shouye"></i>
        <span>首页</span>
      </router-link>
      <router-link to="/list">
        <i class="iconfont icon-list"></i>
        <span>列表</span>
      </router-link>
      <router-link to="/collect">
        <i class="iconfont icon-shoucang"></i>
        <span>收藏</span>
      </router-link>
      <router-link to="/detail">
        <i class="iconfont icon-xiangqing"></i>
        <span>详情</span>
      </router-link>
      <router-link to="/add">
        <i class="iconfont icon-tianjia"></i>
        <span>添加</span>
      </router-link>
    </div>
</template>

<script>
    export default {
        data() {
            return {}
        },
        methods: {},
        computed: {},
        components: {}
    }
</script>
<!--

-->
<style scoped lang="less">
  .footer {
    background: red;
    left: 0;
    bottom: 0;
    position: fixed;
    width: 100%;
    height: 50px;
    display: flex;
  }
  a {
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: center;
    justify-content: center;
  }
  a.router-link-active{
    color: white;
  }
</style>

