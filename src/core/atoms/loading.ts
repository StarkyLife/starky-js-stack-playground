import { createApi, createStore } from "effector";

export const $loading = createStore(false);
export const loadingApi = createApi($loading, {
  start: () => true,
  stop: () => false,
});
