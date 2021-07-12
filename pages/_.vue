<template>
<main>
    <pageHeader :headerData="page.pageSettings" />
    <v-container>
        <v-row>
            <template v-for="(bloc, key) in page.blocs">
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
    <!-- <LazyPageComponentsThemefooter /> -->
</main>
</template>

<script>
export default {
    async asyncData({ $http, route }) {
        console.log(route.params);
        const pData = await $http.$get(
            'https://quikblocs.firebaseio.com/projects/test%20_Ov3x7vYA1IOI6L6Lu5iSpSRSYHu1/pages.json?orderBy=%22url%22&startAt=%22' + route.params.pathMatch + '%22&endAt=%22' + route.params.pathMatch + '%22'
        );
        let page = Object.values(pData)[0];
        return { page };
    },
};
</script>
