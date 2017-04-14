<template>
  <div class="hello">
    <x-header :title="title"></x-header>
    <group-title>rows = 3</group-title>
    <grid rows="3">
        <grid-item :label="label1" v-for="i in 6" :key="i" link="/hello">
            <img slot="icon" src="../assets/vux_logo.png" >
        </grid-item>
    </grid>

    <group>
      <cell is-link title="pullup" link="/hello">Pullup</cell>
      <cell is-link title="pulldown" link="/hello">Pulldown</cell>
      <cell is-link title="pulldownpullup" link="/hello">PulldownPullup</cell>
    </group>

    <divider>{{ title }}</divider>
    <scroller lock-y :scrollbar-x=false>
      <div class="box1">
        <div class="box1-item" v-for="i in 7"><span>{{' ' + i + ' '}}</span></div>
      </div>
    </scroller>

    <divider>{{title }}</divider>
    <scroller lock-y scrollbar-x>
      <div class="box1">
        <div class="box1-item" v-for="i in 7"><span>{{' ' + i + ' '}}</span></div>
      </div>
    </scroller>

    <divider>{{title }}</divider>
    <scroller lock-y scrollbar-x :bounce=false>
      <div class="box1">
        <div class="box1-item" v-for="i in 7"><span>{{' ' + i + ' '}}</span></div>
      </div>
    </scroller>

    <divider>{{ title }} scrollTop: {{scrollTop}}</divider>
    <scroller lock-x height="200px" @on-scroll="onScroll" ref="scrollerEvent">
      <div class="box2">
        <p v-for="i in 80">placeholder {{i}}</p>
      </div>
    </scroller>

    <x-button type="primary" @click.native="$refs.scrollerEvent.reset({top:0})">reset</x-button>

    <divider>{{ title }}</divider>
    <scroller lock-x scrollbar-y height="200px" ref="scroller">
      <div class="box2">
        <p v-for="i in 20" v-if="showList1">placeholder {{ i + '' + i }}</p>
        <p v-for="i in 10" v-if="!showList1">placeholder {{ i }}</p>
        <x-button style="margin:10px 0;" type="primary" @click.native="onClickButton">{{ title }}</x-button>
        <group>
          <cell @click.native="onCellClick" title="Title" value="Value"></cell>
        </group>
      </div>
    </scroller>
    <x-button @click.native="changeList" type="primary">{{ title }}</x-button>

  </div>
</template>

<script>
import {Datetime, Divider, Cell , Spinner, Scroller, Group, XButton, XHeader, Grid, GridItem, GroupTitle} from 'vux'
export default {
  name: 'test2',
  components: {
    Datetime,
    Group,
    XButton,
    XHeader,
    Grid,
    GridItem,
    GroupTitle,
    Scroller,
    Divider,
    Spinner,
    Cell 
  },

  data () {
    return {
     label1:"test",
     //title:"标题",//优先从data取值
     showList1: true,
      scrollTop: 0
      
    }
  },

  mounted() {
      this.$nextTick(() => {
      this.$refs.scrollerEvent.reset({top: 0})
    })
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
    initId() {
        
        console.log('init id :', id);
    },

    changeList () {
      this.showList1 = false
      this.$nextTick(() => {
        this.$refs.scroller.reset({
          top: 0
        })
      })
    },
    onScroll (pos) {
      console.log('on scroll', pos)
      this.scrollTop = pos.top
    },
    //弹窗
    onCellClick () {
      window.alert('cell click')
    },
    onClickButton () {
      window.alert('click')
    }
   
  },

  computed: {
    title() {
    
    
        console.log('this id :',this.$route.params.id);
        return '布局(Grid & Scroller)测试';
      
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

.box1 {
  height: 100px;
  position: relative;
  width: 1490px;
}
.box1-item {
  width: 200px;
  height: 100px;
  background-color: #ccc;
  display:inline-block;
  margin-left: 15px;
  float: left;
  text-align: center;
  line-height: 100px;
}
.box1-item:first-child {
  margin-left: 0;
}
.box2-wrap {
  height: 300px;
  overflow: hidden;
}
</style>
