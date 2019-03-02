import { State } from './state';
const mutations = {
    ADDNOTE(state: State, note: string) {
        state.note = note;
    },
};
export default mutations;
