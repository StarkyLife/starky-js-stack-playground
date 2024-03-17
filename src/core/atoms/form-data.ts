import { createApi, createStore } from "effector";
import { MainFormData, MainFormSetData } from "../types";

export const $formData = createStore<MainFormData>({
  lastname: '',
  firstname: '',
  middlename: '',
  magicNumber: '',
  cardNumber: '',
  activeUntil: '',
  cardSecret: '',
});
export const formApi = createApi($formData, {
  set: (current, data: MainFormSetData) => ({
    ...current,
    [data.field]: data.value,
  })
});
