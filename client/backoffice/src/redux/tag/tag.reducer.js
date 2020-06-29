import * as actions from './tag.action';

const initialState = [
    { id: 100, title: 'tag one', description: 'desc 1' },
    { id: 101, title: 'tag twenty two', description: 'desc 22' },
];

export const tagReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.TAG_ADD:
            return [...state, action.tag];
        case actions.TAG_EDIT:
            let newState = [...state];
            let findOldTag = newState.findIndex((t) => t.id === action.tag.id);
            newState[findOldTag] = action.tag;
            return newState;
        case actions.TAG_DELETE:
            return state.filter((t) => t.id !== action.id);
        default:
            return state;
    }
};
