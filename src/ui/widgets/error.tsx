import { Stack, Text, Title } from "@mantine/core";
import { useUnit } from "effector-react";
import React from "react";
import { $error } from "../../core/atoms/error";

export const Errorwidget: React.FC = () => {
  const error = useUnit($error);

  return (
    <Stack ta="center">
      <Title c="red">ERROR</Title>
      {error && <Text c="gray">{error}</Text>}
    </Stack>
  );
};
