import { createApi, createStore } from "effector";

export const $redirect = createStore<string | null>(null);
export const redirectApi = createApi($redirect, { reset: () => null });
