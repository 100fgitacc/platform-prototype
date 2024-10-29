// store.js
import { configureStore, createSlice } from '@reduxjs/toolkit';

// Создание слайса
const exploreSlice = createSlice({
    name: 'explore',
    initialState: {
        setExploreCourse: false,
        isSidebarHidden: false,
        activeMenuItem: null,
        isDashboard: false,
    },
    reducers: {
        setExplore: (state) => {
            state.setExploreCourse = true;
        },
        resetExplore: (state) => {
            state.setExploreCourse = false;
        },
        toggleSidebar: (state) => {
            state.isSidebarHidden = !state.isSidebarHidden;
        },
        resetSidebar: (state) => {
            state.isSidebarHidden = !state.isSidebarHidden;
        },
        setActiveMenuItem: (state, action) => {
            state.activeMenuItem = action.payload; 
        },
        setIsDashboard: (state, action) => {
            state.isDashboard = action.payload; 
        },
    },
});

// Экспорт действий
export const { setExplore, resetExplore, toggleSidebar, resetSidebar, setActiveMenuItem,setIsDashboard } = exploreSlice.actions;

// Настройка хранилища
const store = configureStore({
    reducer: {
        explore: exploreSlice.reducer,
    },
});

export default store;
