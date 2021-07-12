<template>
<v-container>
    <v-app-bar light style="background-color: transparent; box-shadow: none ">
         <v-toolbar-title v-if="!$store.state.globals.logo" class="text-center">
            <nuxt-link class="headerFont mb-0" style="font-size: 20px !important; color: #000; text-decoration: none" @click.stop :to="'/'" >My website</nuxt-link>
        </v-toolbar-title>
        <nuxt-link v-else tag="img" :src="$store.state.globals.logo" :to="'/'" height="80">
        </nuxt-link>
         <v-spacer></v-spacer>
        <ul class="px-0" v-if="$store.state.globals.menus && $store.state.globals.menus.main">
            <template v-for="page in $store.state.globals.menus.main" >
                <li class="nav-item" :key="page.id" v-if="page">
                    <nuxt-link @click.stop :to="'/'+page.url" :style="!page.published ? 'opacity: 0.3' : null" :class="$route.query.pageID == page.id ? 'active': null">{{page.name}}</nuxt-link>
                </li>
            </template>
        </ul>
        <v-spacer v-if="socialAct"></v-spacer>
        <v-btn v-if="$store.state.globals.social.instagram" @click="extPath($store.state.globals.social.instagram)" icon>
            <v-icon>mdi-instagram</v-icon>
        </v-btn>
        <v-btn v-if="$store.state.globals.social.facebook" @click="extPath($store.state.globals.social.facebook)" icon>
            <v-icon>mdi-facebook</v-icon>
        </v-btn>
        <v-btn icon v-if="$store.state.globals.social.linkedin" @click="extPath($store.state.globals.social.linkedin)">
            <v-icon>mdi-linkedin</v-icon>
        </v-btn>
        <v-btn v-if="$store.state.globals.social.twitter" @click="extPath($store.state.globals.social.twitter)" icon>
            <v-icon>mdi-twitter</v-icon>
        </v-btn>
        <v-btn v-if="$store.state.globals.social.youtube" @click="extPath($store.state.globals.social.youtube)" icon>
            <v-icon>mdi-youtube</v-icon>
        </v-btn>
    </v-app-bar>
</v-container>
</template>
<script>
export default {
    name: 'navbar',
    data: function () {
        return {
            active: false,
            showMenu: false,
        }
    },
    computed:{
        socialAct(){
            if(this.$store.state.globals.social.instagram || this.$store.state.globals.social.facebook || this.$store.state.globals.social.linkedin || this.$store.state.globals.social.twitter || this.$store.state.globals.social.youtube){
                return true
            }
        }
    },
    methods: {
        toggleNavClass() {
            if (this.active == false) {
                return 'navigation'
            } else {
                return 'sticky-nav'
            }
        }
    },
}
</script>
<style lang="scss">
.nav-item {
    list-style: none;
    margin-right: 2em;
    text-decoration: none;
    display: inline-block;
    text-transform: capitalize;
    .active {
       // color: $primary;
        text-decoration: underline;
    }
    a {
        text-decoration: none;
        color: inherit;
        transform: capitalize;
    }
}
</style>
