<template>
  <div id="app">
    <p>{{ categories }}</p>
    <login-form @token=setToken @categories="setCategories"></login-form>
    <div v-if="isLogin">
      <memo-list :token="token" :categories="categories"></memo-list>
      <memo-edit></memo-edit>
    </div>
  </div>
</template>

<script>
import LoginForm from './components/LoginForm.vue'
import MemoList from './components/MemoList.vue'
import MemoEdit from './components/MemoEdit.vue'

export default {
  name: 'App',
  data: function(){
    return {
      token: '',
      isLogin: false,
      categories: [],
    }
  },
  components: {
    LoginForm,
    MemoList,
    MemoEdit
  },
  methods: {
    setCategories: function(categories){
      this.categories = categories
      this.isLogin = true
    },
    setToken: function(token){
      this.token = token
    }
  }
}
</script>

<style>

</style>
