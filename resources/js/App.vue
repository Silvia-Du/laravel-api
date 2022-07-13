<template>
  <div>
    <div class="container">

        <h1>Tutti i nostri blog post</h1>

        <div class="row">

            <div class="col-12 post p-1" v-for="(post, index) in posts" :key="`post${index}`">
                <div class="box p-3 rounded-lg d-flex">
                    <div class="box-left">

                        <h3>Titolo:{{ post.title }}</h3>
                        <p>{{ post.content }}</p>
                        <p>Tempo di lettura: {{ post.reading_time }}</p>
                        <p>Autore:{{ post.author }}</p>
                    </div>
                    <div v-if="post.tags != []" class="box-right debug p-3">
                        <h3>I tag associati a questo post</h3>
                        <h3 v-for="(tag, index) in post.tags" :key="`tag${index}`">
                            <span class="badge badge-warning">{{ tag.name }}</span>
                        </h3>
                    </div>
                </div>
            </div>
        </div>

    </div>
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
