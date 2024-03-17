import { Affix, Progress } from "@mantine/core";
import { useUnit } from "effector-react";
import React from "react";
import { $loading } from "../../core/atoms/loading";

export const LoadingWidget: React.FC = () => {
  const isLoading = useUnit($loading);

  if (!isLoading) return;

  return (
    <Affix position={{ left: 0, right: 0, bottom: 0 }}>
      <Progress.Root size={40}>
        <Progress.Section value={100} animated>
          <Progress.Label>Сохраняем ваши данные</Progress.Label>
        </Progress.Section>
      </Progress.Root>
    </Affix>
  );
};
