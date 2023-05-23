<template>
    <div>
        <p>MemoList View</p>
        <div v-for="category in categories" :key=category.id>
            <button @click="onClick(category.id)">{{ category.name }}</button>
            <p v-for="memo in memoList[category.id]" :key=memo.id>{{ memo.title }}</p>
        </div>
    </div>
</template>

<script>
import Api from "../Api.js"

export default {
    name: 'MemoList',
    data: function(){
        return {
            memoList: []
        }
    },
    props: {
        token: String,
        categories: [],
    },
    methods: {
        onClick: async function(id){
            const requestMemoList = await Api.apiResponse(`/memo/${id}`, this.token, 'GET')
            this.memoList[id] = await requestMemoList.json()
            console.log(this.memoList)
        }
    }
}
</script>

<style scoped>

</style>
