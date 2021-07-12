<template>
<v-col :cols="columns(bContent.options.width.xs)" :sm="columns(bContent.options.width.sm)" :md="columns(bContent.options.width.md)" :lg="columns(bContent.options.width.lg)" :xl="columns(bContent.options.width.xl)">
 
  <section v-html="bContent.options.text">
   
    </section>
</v-col>
</template>

<script>
export default {
    name: "textColumn",
    props: ["bContent", "index"]
};
</script>
