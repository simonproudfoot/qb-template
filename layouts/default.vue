<template>
<v-app dark>
    <navbar />
    <v-container>
        <nuxt keep-alive />
    </v-container>
</v-app>
</template>
<script>
export default {
    data() {
        return {
            title: 'Vuetify.js'
        }
    }
}
</script>
