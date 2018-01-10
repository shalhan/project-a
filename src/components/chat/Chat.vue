<template>
  <div v-if="!isLoading">
    <div class="row">
      <div class="col-md-3">
        <chat-histories :selected_chat="selected_chat" @updateSelectedChat="updateSelectedChat"></chat-histories>
      </div>
      <div class="col-md-6">
        <chat-content :selected_chat="selected_chat"></chat-content>
      </div>
    </div>

  </div>
  <div v-else>
    <spinner></spinner>
  </div>
</template>

<script>
import ChatHistories from './_part/ChatHistories.vue'
import ChatContent from './_part/ChatContent.vue'


export default {
  name: 'Chat',
  components: {
    'chat-histories': ChatHistories,
    'chat-content': ChatContent
  },
  data () {
    return {
      msg: 'This is chat page',
      isLoading: true,
      selected_chat: 1
    }
  },
  mounted(){
    setTimeout(()=>{
      this.isLoading = false;
    },3000);
  },
  methods: {
    updateSelectedChat: function(id)
    {
      this.selected_chat = id;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
