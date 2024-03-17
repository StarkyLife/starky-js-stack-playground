import { createEvent, sample } from "effector";
import { MainFormSetData } from "../types";
import { $formData, formApi } from "../atoms/form-data";

export const updateMagicNumber = createEvent<number>();

sample({
  clock: updateMagicNumber,
  source: $formData,
  filter: (formData) => !formData.magicNumber,
  fn: (_, magicNumber): MainFormSetData => ({ field: 'magicNumber', value: magicNumber.toString() }),
  target: formApi.set,
});
