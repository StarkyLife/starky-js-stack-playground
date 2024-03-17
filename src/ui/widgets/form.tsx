import { Button, Group, Stack, Title } from "@mantine/core";
import { useUnit } from "effector-react";
import React, { PropsWithChildren, useCallback } from "react";
import { $canGoNext, $canGoPrev, $currentStep, currentStepApi } from "../../core/atoms/steps";
import { $loading } from "../../core/atoms/loading";
import { imitateAsyncFx } from "../../core/actions/imitate-async.ts";
import { StepType } from "../../core/types";

export const FormWidget: React.FC<PropsWithChildren> = ({ children }) => {
  const isLoading = useUnit($loading);
  const canGoPrev = useUnit($canGoPrev);
  const canGoNext = useUnit($canGoNext);

  const goPrev = useCallback(() => currentStepApi.prev(), []);
  const goNext = useCallback(() => currentStepApi.next(), []);
  const handleSubmit = useCallback(() => imitateAsyncFx(), []);

  return (
    <Stack>
      <Title>Заполните форму</Title>
      {children}
      <Group grow>
        <Button disabled={!canGoPrev} onClick={goPrev}>Prev</Button>
        <Button disabled={!canGoNext} onClick={goNext}>Next</Button>
      </Group>
      <Button disabled={isLoading} onClick={handleSubmit}>Submit</Button>
    </Stack>
  );
};

export const FormWidgetStep: React.FC<PropsWithChildren & { type: StepType }> = ({
  type,
  children,
}) => {
  const currentStep = useUnit($currentStep);

  if (type !== currentStep) return;

  return children;
};
