import { GetterTree, Getter } from 'vuex';
import { State } from './state';
const getNote: Getter<State, any> = (state: State) => {
    return state.note;
};
const getterTree: GetterTree<State, any> = {
    getNote,
};
export default getterTree;
