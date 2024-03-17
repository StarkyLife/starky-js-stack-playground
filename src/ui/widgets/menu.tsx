import { Stack, Stepper, Title } from "@mantine/core";
import { useUnit } from "effector-react";
import React from "react";
import { $currentStepIndex, $steps } from "../../core/atoms/steps";
import { StepType } from "../../core/types";

const stepsMap: Record<StepType, JSX.Element> = {
  'personal': <Stepper.Step label="Step 1" description="ФИО" />,
  'bank': <Stepper.Step label="Step 2" description="Банковские реквизиты" />,
};

export const MenuWidget: React.FC = () => {
  const steps = useUnit($steps);
  const currentStepIndex = useUnit($currentStepIndex);

  return (
    <Stack>
      <Title>Меню</Title>
      <Stepper active={currentStepIndex} orientation="vertical" size="lg">
        {steps.map(type => stepsMap[type])}
      </Stepper>
    </Stack>
  );
};
