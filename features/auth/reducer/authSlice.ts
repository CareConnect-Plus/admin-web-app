import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
    isAuthenticated: boolean;
    user: {
        id: string;
        name: string;
        email: string;
    } | null;
    lastActivity: number;
}

const initialState: AuthState = {
    isAuthenticated: false,
    user: null,
    lastActivity: Date.now(),
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login(
            state,
            action: PayloadAction<{ id: string; name: string; email: string }>,
        ) {
            state.isAuthenticated = true;
            state.user = action.payload;
        },
        logout(state) {
            state.isAuthenticated = false;
            state.user = null;
            state.lastActivity = 0;
        },
    },
});

export const { login, logout } = authSlice.actions;

export const selectIsAuthenticated = (state: { auth: AuthState }) =>
    state.auth.isAuthenticated;
export const selectUser = (state: { auth: AuthState }) => state.auth.user;
export const selectLastActivity = (state: { auth: AuthState }) =>
    state.auth.lastActivity;

export default authSlice.reducer;
