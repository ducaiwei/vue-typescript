<template>
<div id="wrapper">
    <div class="left-title" ref="titleBox">
        <List :contents="[]" :selectContent="{}"></List>
        <div class="tool-box" ref="toolBox">
            <i class="iconfont icon-search search" @click="showSearchBox"></i>
            <i class="iconfont icon-plus plus" @click="showAddFn"></i>
        </div>
    </div>
    <div  class="right-content" ref="rightContent">
      <router-view/>
    </div>
</div>
</template>
<script lang="ts">
import { Component, Vue, Emit } from 'vue-property-decorator';
import List from '@/components/List.vue';

@Component({
    components: {
      List,
    },
})
export default class Home extends Vue {
  private showSearch = false;
  @Emit()
  public showAddFn() {
    this.$router.push({name: 'edit'});
  }
  @Emit()
  public showSearchBox() {
    this.showSearch = true;
  }
}
</script>
<style lang="scss" scoped>
 ::-webkit-scrollbar {
      width: 8px;
      height: 8px;
      background-color: #f0f2f5;
  }

  ::-webkit-scrollbar-thumb {
      border-radius: 8px;
      background-color: #b5babf;
  }
  ::-webkit-scrollbar-track {
      border-radius: 8px;
      background-color: #f0f2f5;
  }
  #wrapper {
    position: relative;
    height: 100%;
    width: 100%;
    overflow: hidden;
    &:after {
      content: "";
      display: block;
      clear: both;
    }
  }
  .left-title {
    position: relative;
    width: 20%;
    height: 100%;
    float: left;
    background: #373d47;
    overflow-x: hidden;
    box-sizing: border-box;
  }
  .right-content {
    position: relative;
    height: 100%;
    margin-left: 20%;
    box-sizing: border-box;
    text-align: left;
    .content-code {
      height: 100%;
      .CodeMirror {
        height: 100%;
      }
    }
  }
  .drag-line {
    position: absolute;
    right: left;
    top: 0;
    height: 100%;
    width: 5px;
    background: #fff;
    z-index: 9;
    cursor: w-resize;
  }
  .tool-box {
    position: fixed;;
    height: 40px;
    width: 20%;
    background: #373d47;
    bottom: 0;
    left: 0;
    z-index: 99;
  }
  .plus, .search {
    display: block;
    position: absolute;
    bottom: 10px;
    color: #979da7;
    cursor: pointer;
  }
  .search {
    right: 10px;
  }
  .plus {
    left: 10px;
  }
</style>

