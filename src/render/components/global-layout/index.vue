<template>
  <div class="global-layout">
    <!-- 侧边栏 -->
    <div class="glob-slider">
      <global-sider />
    </div>

    <!-- 主体内容 -->
    <div class="main-container">
      <!-- 顶部栏 -->
      <global-header />
      <router-view />
    </div>
  </div>
</template>

<style lang="less" scoped>
@import url('./index.less');
</style>
