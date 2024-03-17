import { createStore } from "effector";

export const $error = createStore<string | null>(null);
