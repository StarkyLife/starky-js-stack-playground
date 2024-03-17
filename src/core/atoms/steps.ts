import { combine, createApi, createStore } from "effector";
import { StepType } from "../types";

export const $steps = createStore<StepType[]>(['personal', 'bank']);

export const $currentStepIndex = createStore(0);
export const currentStepApi = createApi($currentStepIndex, {
  next: (step) => step + 1,
  prev: (step) => step - 1,
});

export const $currentStep = combine(
  $steps,
  $currentStepIndex,
  (steps, current) => steps[current]
);
export const $canGoPrev = $currentStepIndex.map(
  (current) => current > 0,
);
export const $canGoNext = combine(
  $steps,
  $currentStepIndex,
  (steps, current) => current < steps.length - 1
);
