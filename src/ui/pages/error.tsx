import { Box } from "@mantine/core";
import React from "react";
import { Errorwidget } from "../widgets/error";

export const ErrorPage: React.FC = () => (
  <Box className="w-screen h-screen flex justify-center items-center">
    <Errorwidget />
  </Box>
);
