<template>
<v-container>
    <v-card class="header mb-12 rounded-card" elevation="0">
        <div v-if="!headerData.featured_image" class="header__default ">
            <span></span>
        </div>
        <v-img v-if="headerData.featured_image && !slider.length" :src="headerData.featured_image" class="header__background" cover gradient="to top right, rgba(0,0,0,.33), rgba(0,0,0,.7)" />
        <v-carousel v-else :show-arrows="slider.length > 1 ? true : false" cycle hide-delimiters continuous interval="2500" :height="600" class="header__background">
            <v-carousel-item class="hideBtn" v-for="(image, index) in slider" :key="index" :src="image">
            </v-carousel-item>
        </v-carousel>
        <div class="header__over"></div>
        <v-row align="center" class="justify-space-around py-16 text-center header__content py-12">
            <h1 class="display-3">{{headerData.title}}</h1>
            <v-col order-md="1" class=" white--text">
                <span v-html="headerData.text"></span>
                <template v-if="headerData.link">
                    <v-btn v-if="!headerData.link.custom && headerData.link.title" x-large color="qPink" rounded :to="'/projects/'+currentProject+'/?pageID='+headerData.link.id" nuxt>
                        {{headerData.link.title}}
                    </v-btn>
                    <v-btn v-else-if="headerData.link.custom && headerData.link.value" large class="qPink" rounded @click="extPath(headerData.link.value)">
                        {{headerData.link.title}}
                    </v-btn>
                </template>
            </v-col>
        </v-row>
    </v-card>
</v-container>
</template>

<script>
// <VueVideoWrapper :player="'vimeo'" videoId="518099808" :autoplay="true" :muted="true" :resize="true" :fitParent="true" :loop="true" :controls="false"/>
// import VueVideoWrapper from 'vue-video-wrapper'
export default {
    name: 'pageHeader',
    props: ['headerData'],
    computed: {
        slider() {
            if (this.headerData.headslider !== undefined) {
                return this.headerData.headslider
            } else {
                return {}
            }
        }
    },
}
</script>

<style lang="scss">
.header {
    position: relative !important;
    overflow: hidden;
    min-height: 100px;
    width: 100%;
    border-radius: 30px !important;
    display: block;

    h1 {
        font-size: 3.75rem !important;
        font-weight: 300;
        line-height: 3.75rem;
        letter-spacing: -0.0083333333em !important;
        font-family: "Roboto", sans-serif !important;
    }

    &__over {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        width: 100%;
        z-index: 1;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.4)
    }

    .fr-box.fr-basic .fr-wrapper,
    .theme--dark .fr-element {
        background: transparent;
    }

    &__btns {
        z-index: 2;
        position: absolute;
        top: 10px;
        left: 10px;
        height: 100px;
        width: 300px;
    }

    &__content {
        z-index: 1;
        position: relative;
        display: block;
        margin: auto;
        max-width: 700px;
    }

    &__default {
        position: absolute !important;
        width: 100%;
        height: 100%;
        z-index: 1;
        position: relative;
        top: 0;
        left: 0;
        background-size: cover;
        z-index: 0;
        position: relative;
        height: 100%;

        span {
            height: 100%;
            position: absolute;
            top: 0;
            display: block;
            left: 0;
            width: 100%;
            background-color: #1f1e3085
        }
    }

    &__background {
        position: absolute !important;
        width: 100%;
        height: 100%;
        z-index: 1;
        position: relative;
    }
}
</style>
