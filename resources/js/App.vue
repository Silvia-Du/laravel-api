<template>
  <div>
    <h1>Ciaone da App Comp</h1>
  </div>
</template>

<script>
export default {
    name: 'App',

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
