<template>
<v-col :cols="columns(bContent.options.width.xs)" :sm="columns(bContent.options.width.sm)" :md="columns(bContent.options.width.md)" :lg="columns(bContent.options.width.lg)" :xl="columns(bContent.options.width.xl)" class="bloc" :ref="'blocRef-' + bContent.id" :id="'bloc-' + index">
    <section>
        <div class="images-wrapper">
            <v-row>
                <v-col v-for="(image, i) in bContent.options.image.value" class="d-flex child-flex" cols="4" md="3" :key="i">
                    <v-img :src="image" aspect-ratio="1" />
                </v-col>
            </v-row>
        </div>
    </section>
</v-col>
</template>
<script>
export default {
    name: "gallery",
    props: ["bContent", "index"],
};
</script>
