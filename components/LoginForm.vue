<template>
    <header>
        <label>Memo App</label>
        <div>
            <label>Access Token</label>
            <input id="access_token" type="text" v-model="token" :disabled="inputDisabled">
            <button id="login" :disabled="btnDisabled" @click="login">LOGIN</button>
        </div>
    </header>
</template>

<script>
import Api from "../Api.js"

export default {
    name: 'LoginForm',
    data: function(){
        return {
            token: '',
            inputDisabled: false,
            btnDisabled: true,
        }
    },
    watch: {
        token(){
            if(/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(this.token)){
                this.btnDisabled = false;
            } else {
                this.btnDisabled = true;
            }
        }
    },
    methods: {
        login: async function(){
            console.log('login')
            this.inputDisabled = true;
            this.btnDisabled = true;
            const requestCategories = await Api.apiResponse('/category', this.token, 'GET')
            const categories = await requestCategories.json()
            this.$emit('categories', categories)
            this.$emit('token', this.token)
        }
    },
}
</script>

<style scoped>
header {
    color: #fff;
    background-color: blue;
}
</style>
