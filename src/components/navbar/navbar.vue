<template>
  <div id="wrap">
    <div class="nav_left">
      <slot name="left"></slot>
    </div>
    <div class="nav_center">
      <slot name="center"></slot>
    </div>
    <div class="nav_right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>
<style lang="scss" scoped>
/deep/ .van-cell {
 line-height: 0px;
 padding: 6px;
}
#wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 45px;
  background: lightblue;
  .nav_left {
    width: 60px;
    text-align: center;
  }
  .nav_right {
    width: 60px;
    text-align: center;
  }
  .nav_center {
    flex: 1;
    text-align: center;
  }
}
</style>