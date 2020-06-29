import { tagReducer } from './tag/tag.reducer';

import { combineReducers } from 'redux';

export const allReducers = combineReducers({
    tag: tagReducer,
});
