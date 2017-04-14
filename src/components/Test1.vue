<template>
  <div class="hello">
    <x-header :title="title"></x-header>
    <div v-if="id3==='1'">
        id is one
    </div>
    <div v-else>
        id is not one
        
    </div>
  
    
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
     id:'123'
      
    }
  },

  ready() {
      this.initId;
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
        this.id = this.route.params.id;
        console.log('init id :', id);
    }
   
  },

  computed: {
    title() {
    this.id = this.$route.params.id
    console.log('title',"ok")
    console.log('this id :',this.$route.params.id);
      return '判断测试';
      
    },
    id3() {
        console.log('this id3 :',this.$route.params.id);
        return this.$route.params.id;
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
