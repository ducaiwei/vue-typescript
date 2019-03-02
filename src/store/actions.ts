import { Commit, Action, ActionTree } from 'vuex';
import { State } from './state';
const addNote: Action<State, any> = (context: {commit: Commit}, note: string) => {
    context.commit('ADDNOTE', note);
};
const actions: ActionTree<State, any> =  {
    addNote,
};
export default actions;
