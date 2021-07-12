<template>
<v-col :cols="columns(bContent.options.width.xs)" :sm="columns(bContent.options.width.sm)" :md="columns(bContent.options.width.md)" :lg="columns(bContent.options.width.lg)" :xl="columns(bContent.options.width.xl)">
    <section>
        <v-row align="center">
            <v-col cols="12" sm="10" :md="columns(bContent.options.width.md) <= 6 ? 12 : 6" :lg="columns(bContent.options.width.lg) <= 6 ? 12 : 6" :class="bContent.options.swap_sides || bContent.options.width.md <= 50 || bContent.options.width.lg <= 50 ? 'order-md-1 order-lg-1' : 'order-md-2 order-lg-2'">
               
               <img v-if="bContent.options.image.value" :src="bContent.options.image.value[0]" alt=""/>
              <!--  <v-carousel v-if="bContent.options.image.value && bContent.options.image.value.length >= 1" :show-arrows="bContent.options.image.value.length > 1 ? true : false" cycle hide-delimiters continuous interval="5000" :height="bContent.options.width < 12 || $vuetify.breakpoint.xs ? 280 : 500" class=" hideBtn image">
                
                    <v-carousel-item v-for="(image, i) in bContent.options.image.value" :key="i" :src="image" :alt="imageAlts[image]">
                        - <v-btn color="primary" top x-small fab class=" my-2 mx-2" @click="changeImage('image','bloc', bContent.id, bContent.options.image.value, true)">
                            <v-icon class="">{{mdiImage}}</v-icon>
                        </v-btn>
                        <v-btn color="primary" top x-small fab class=" my-2" @click="removeImage(i)">
                            <v-icon class="">{{mdiClose}}</v-icon>
                        </v-btn>
                    </v-carousel-item>
                </v-carousel>
                -->
                <div v-else class="img-placeholder">
                    <v-skeleton-loader light type="image"></v-skeleton-loader>
                </div>
            </v-col>
            <v-col cols="12" :md="columns(bContent.options.width.md) <= 6 ? 12 : 6" :lg="columns(bContent.options.width.lg) <= 6 ? 12 : 6" class="justify-center px-5 py-5" :class="bContent.options.swap_sides && bContent.options.width.md <= 50  ? 'order-md-2 order-lg-2' : 'order-md-1 order-lg-1'">
                <div class="px-md-12">
                    <div v-html="bContent.options.text.value"></div>
                    <v-btn v-if="!bContent.options.link.custom && bContent.options.link.title" x-large primary class="primary" :to="bContent.options.link.id" nuxt>
                        {{bContent.options.link.title}}
                    </v-btn>
                    <v-btn v-else-if="bContent.options.link.custom && bContent.options.link.value" x-large class="primary" color="primary" @click="extPath(bContent.options.link.value)">
                        {{bContent.options.link.title}}
                    </v-btn>
                </div>
            </v-col>
        </v-row>
    </section>
</v-col>
</template>

<script>
export default {
    name: "imageTextSplit",
    props: ["bContent", "index"],
    
};
</script>

<style lang="scss" scoped>
    img{
        width: 100%
    }
</style>
