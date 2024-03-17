import { Stack, Text, Title } from "@mantine/core";
import { useStoreMap } from "effector-react";
import React from "react";
import { $formData } from "../../core/atoms/form-data";

export const SummaryWidget: React.FC = () => {
  const summary = useStoreMap($formData, data => Object.values(data).join(' - '));

  return (
    <Stack>
      <Title>Проверьте введенные данные</Title>
      <Text>{summary}</Text>
    </Stack>
  );
};
