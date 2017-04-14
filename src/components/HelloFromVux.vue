<template>
  <div>
    <div class="vux-demo">
      <img class="logo" src="../assets/vux_logo.png">
      <h1> </h1>
    </div>
    <group title="cell demo">
      <cell title="Vux" value="Cool" is-link></cell>
      <cell title="Hello" value="Hello-Vux" is-link link="/hello"></cell>
      <cell title="布局(Grid & Scroller)测试" value="test2" is-link link="/test2"></cell>
      <cell title="确认按钮测试" value="test3" is-link link="/test3"></cell>
      <cell title="图片展示" value="test4" is-link link="test4"></cell>
      <cell title="图片广告" value="test6" is-link link="test6"></cell>
      <cell title="标签导航" value="test7" is-link link="test7"></cell>
    </group>
    <div style="padding:15px;">
      <x-button @click.native="goTest5">X-Button(test5)</x-button>
      <x-button @click.native="goTest1" type="primary">Show(test1)</x-button>
    </div>
    <router-link :to="{ name: 'test1', params: { id: '1' }}">go test1</router-link>
    
    
  </div>
</template>

<script>
import { Group, Cell, XButton } from 'vux'

export default {
  components: {
    Group,
    Cell,
    XButton
  },
  data () {
    return {
     
      msg: 'Hello World!'
    }
  },

  methods: {
    goTest1() {
      this.$router.push({ name: 'test1', params: { id: '1' }})
      console.log('------goTest1-----')
    },
    goTest5() {
      this.$router.replace({ name: 'test5', params: {id: '5'}})
      console.log('--------goTest5------')
    }
  }
}
</script>

<style>
.vux-demo {
  text-align: center;
}
.logo {
  width: 100px;
  height: 100px
}
</style>
