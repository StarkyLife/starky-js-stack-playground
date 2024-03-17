import { TextInput } from "@mantine/core";
import { useStoreMap } from "effector-react";
import React, { ChangeEvent, useCallback } from "react";
import { $formData, formApi } from "../../core/atoms/form-data";
import { MainFormData } from "../../core/types";

type Props = {
  field: keyof MainFormData;
  label: string;
};

export const ConnectedTextInput: React.FC<Props> = ({ field, ...inputProps }) => {
  const value = useStoreMap($formData, (data) => data[field]);
  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => formApi.set({ field, value: e.target.value }),
    [field]
  );

  return <TextInput value={value} onChange={handleChange} {...inputProps} />
};
