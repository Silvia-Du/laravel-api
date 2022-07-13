<template>
  <div>
    <MainComp :postList="posts" />
  </div>
</template>

<script>

//import components

import MainComp from './MainComp.vue';
export default {
    name: 'App',

    components: {
        MainComp
    },

    data(){
        return{
            postApiUrl: '/api/posts',
            posts: null,
        }
    },

    methods: {
        getPosts(){
            axios.get(this.postApiUrl)
            .then(response =>{
                this.posts = response.data.posts;
                console.log(this.posts);

            })
        }
    },

    mounted(){
        this.getPosts();
    }
}
</script>

<style>

</style>
