<template>
  <div class="hello">
    
      <x-header :title="title2"></x-header>
    
    <h3>{{ msg }}</h3>
    <group>
      <datetime v-model="time" @on-change="change" :title="title1"></datetime>
      <datetime v-model="time2" @on-clear="setToday" placeholder='默认为当前时间（必填）' :min-year=2016 :max-year=2030 format="YYYY-MM-DD HH:mm" @on-change="change" title="" year-row="{value}年" month-row="{value}月" day-row="{value}日" hour-row="{value}点" minute-row="{value}分" confirm-text="完成" cancel-text="取消"></datetime>
      <datetime v-model="time2" :value.sync="time3" @on-clear="setToday" placeholder='默认为当前时间（必填）' :min-year=2016 :max-year=2030 format="YYYY-MM-DD HH:mm" @on-change="change" title="" year-row="{value}年" month-row="{value}月" day-row="{value}日" hour-row="{value}点" minute-row="{value}分" confirm-text="完成" cancel-text="取消"></datetime>
    

    </group>

    
  </div>
</template>

<script>
import {Datetime, Group, XButton, XHeader} from 'vux'
export default {
  name: 'hello',
  components: {
    Datetime,
    Group,
    XButton,
    XHeader
  },

  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      time:'',
      time3:'2017-12-12',
      title1:'timetest',
      
    }
  },

  ready() {
    console.log('ready','ok')
  },

  route: {
    activate(transition) {
      console.log('activate is ok','ok');
    },
    deactivate(transition) {
      console.log('deactivate is ok','ok');
    }
  },

  methods: {
    change(value) {
      console.log('time change', value);
    },
    setToday (value) {
      let now = new Date()
      let cmonth = now.getMonth() + 1
      let day = now.getDate()
      let hour = now.getHours()
      let minute = now.getMinutes()
      if (cmonth < 10) cmonth = '0' + cmonth
      this.time = now.getFullYear() + '-' + cmonth + '-' + day + ' '+ hour+':'+minute
      console.log('set time ok:',this.time);
    }
  },

  computed: {
    title2() {
      return '时间测试';
      console.log('title2',"ok")
    },
    time2() {
      let now = new Date()
      let cmonth = now.getMonth() + 1
      let day = now.getDate()
      let hour = now.getHours()
      let minute = now.getMinutes()
      if (cmonth < 10) cmonth = '0' + cmonth
      var time2 = now.getFullYear() + '-' + cmonth + '-' + day + ' '+ hour+':'+minute
      console.log('time','ok')
      return time2;
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
