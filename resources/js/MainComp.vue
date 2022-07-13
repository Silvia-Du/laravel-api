<template>
    <div class="container">

        <h1>Tutti i nostri blog post</h1>

        <div class="row">

            <div class="col-12 post p-1" v-for="(post, index) in postList" :key="`post${index}`">
                <div class="box p-3 rounded-lg d-flex">
                    <div class="box-left px-3">

                        <h3>Titolo:{{ post.title }}</h3>
                        <p>{{ post.content }}</p>
                        <p>Tempo di lettura: {{ post.reading_time }}</p>
                        <p>Autore:{{ post.author }}</p>
                        <h3>Categoria:
                            <span class="badge badge-info">{{ post.category.name }}</span>
                        </h3>

                    </div>
                    <div v-if="post.tags.length > 0" class="box-right debug p-3">
                        <h3>I tag associati a questo post</h3>
                        <h3 v-for="(tag, index) in post.tags" :key="`tag${index}`">
                            <span class="badge badge-warning">{{ tag.name }}</span>
                        </h3>
                    </div>
                    <div v-else class="box-right debug p-3">
                        <h3>Nessun  tag associato a questo post</h3>

                    </div>

                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name:'MainComp',
    props:{
        postList: Array,
    },
}
</script>

<style>

</style>
