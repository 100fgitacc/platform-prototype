// store.js
import { configureStore, createSlice } from '@reduxjs/toolkit';

// Создание слайса
const exploreSlice = createSlice({
    name: 'explore',
    initialState: {
        setExploreCourse: false,
    },
    reducers: {
        setExplore: (state) => {
            state.setExploreCourse = true;
        },
        resetExplore: (state) => {
            state.setExploreCourse = false;
        },
    },
});

// Экспорт действий
export const { setExplore, resetExplore } = exploreSlice.actions;

// Настройка хранилища
const store = configureStore({
    reducer: {
        explore: exploreSlice.reducer,
    },
});

export default store;
