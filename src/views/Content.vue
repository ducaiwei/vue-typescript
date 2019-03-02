<template>
    <vue-markdown>## Tables</vue-markdown>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import VueMarkdown from 'vue-markdown';
@Component({
    components: {
        VueMarkdown,
    },
})
export default class NoteContent extends Vue {
}
</script>
<style lang="scss" scoped>
</style>
