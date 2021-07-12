<template>
<main>
    <p v-if="$fetchState.pending">Fetching mountains...</p>
    <p v-else-if="$fetchState.error">An error occurred :(</p>
    <div v-else>

         <pageHeader :headerData="page[0].pageSettings" />
        <v-container v-if="page.length">

            <v-row>
                <template v-for="(bloc, key) in page[0].blocs">
                    <LazyBlocsImagetextsplit v-if="bloc.name == 'image_and_text_split'" :index="key" :key="key" :bContent="bloc" />
                    <LazyBlocsGallery v-if="bloc && bloc.name  == 'gallery'" :index="key" :key="key" :bContent="bloc" />
                    <LazyBlocsTextColumn v-if="bloc && bloc.name  == 'text_column'" :index="key" :key="key" :bContent="bloc" />
                    <!-- <LazyPreviewblocsLargeImageBackgroundpreview v-if="bloc && bloc.name  == 'large_image_background'" :index="key" :key="key" :bContent="bloc" />
                    <LazyPreviewblocsTextColumnPreview v-if="bloc && bloc.name  == 'text_column'" :index="key" :key="key" :bContent="bloc" />
                    <LazyPreviewblocsPostsPreview v-if="bloc && bloc.name  == 'posts'" :index="key" :key="key" :bContent="bloc" />
                    <LazyPreviewblocsTwitterPreview v-if="bloc && bloc.name  == 'twitter'" :index="key" :key="key" :bContent="bloc" />
                    <LazyPreviewblocsCardPreview v-if="bloc && bloc.name  == 'card'" :index="key" :key="key" :bContent="bloc" />
                    <LazyPreviewblocsMapPreview v-if="bloc && bloc.name  == 'map'" :index="key" :key="key" :bContent="bloc" /> -->
                </template>
            </v-row>
        </v-container>
    </div>
    <!-- <LazyPageComponentsThemefooter /> -->
</main>
</template>

<script>
export default {
    data() {
        return {
            page: []
        }
    },
    async fetch() {
        try {
            let url = this.$route.params.pathMatch
            let data = await fetch('https://quikblocs.firebaseio.com/projects/test%20_Ov3x7vYA1IOI6L6Lu5iSpSRSYHu1/pages.json?orderBy="url"&equalTo="' + url + '"')
                .then((res) => res.json())

            this.page = Object.values(data)
        } catch (error) {
            console.log(error)
        }
    },

    watch: {
        '$route.query': '$fetch'
    },
};
</script>
