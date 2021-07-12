<template>
<main class="post individual">
    <h1>{{ $route.params }}</h1>
    <pageHeader :headerData="page.pageSettings" />
    <span v-html="page.pageSettings.text"></span>
    <v-card light v-for="bloc in page.blocs" :key="bloc.id">
        {{ bloc }}
    </v-card>
</main>
</template>
<script>
export default {
    async asyncData({ $http, route }) {
        console.log(route.params);
        const pData = await $http.$get(
            'https://quikblocs.firebaseio.com/projects/test%20_Ov3x7vYA1IOI6L6Lu5iSpSRSYHu1/pages.json?orderBy=%22url%22&startAt=%22'+route.params.pathMatch+'%22&endAt=%22'+route.params.pathMatch+'%22'
        );
        let page = Object.values(pData)[0];
        return { page };
    },
};
</script>
