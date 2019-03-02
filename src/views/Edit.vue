<template>
    <div class="edit-box">
        <textarea name="" id="" cols="30" rows="10"></textarea>
    </div>
</template>
<script lang="ts">
import { Component, Vue, Emit } from 'vue-property-decorator';
import { Getter, Action } from 'vuex-class';
@Component
export default class Edit extends Vue {
    @Action('addNote') private actionAddNote: any;
    @Getter('getNote') private getterNote: any;
    private mounted() {
        this.actionAddNote('dsererer');
    }
}
</script>
<style lang="scss" scoped>
</style>
