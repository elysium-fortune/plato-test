import {
    AnyAction,
    combineReducers,
    configureStore,
    Reducer
} from '@reduxjs/toolkit';

import usersSlice from './users-slice';

const combinedReducer = combineReducers({
    users:usersSlice.reducer
})

export type RootState = ReturnType<typeof combinedReducer>;

const rootReducer: Reducer = (
    state: ReturnType<typeof store.getState>,
    action: AnyAction
) => {
    return combinedReducer(state,action);
}

const store = configureStore({
    reducer: rootReducer
})

export default store;