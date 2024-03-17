import { Container, Grid, Stack } from "@mantine/core";
import React from "react";
import { MenuWidget } from "../widgets/menu";
import { FormWidget, FormWidgetStep } from "../widgets/form";
import { SummaryWidget } from "../widgets/summary";
import { LoadingWidget } from "../widgets/loading";
import { ConnectedTextInput } from "../widgets/connected-inputs";

export const MainPage: React.FC = () => (
  <Container size="lg">
    <Grid gutter="xl">
      <Grid.Col span={12}>
        <SummaryWidget />
      </Grid.Col>
      <Grid.Col span={8}>
        <FormWidget>
          <FormWidgetStep type="personal">
            <Stack>
              <ConnectedTextInput field="lastname" label="Фамилия" />
              <ConnectedTextInput field="firstname" label="Имя" />
              <ConnectedTextInput field="middlename" label="Отчество" />
              <ConnectedTextInput field="magicNumber" label="Счастливое число" />
            </Stack>
          </FormWidgetStep>
          <FormWidgetStep type="bank">
            <Stack>
              <ConnectedTextInput field="cardNumber" label="Номер карты" />
              <ConnectedTextInput field="activeUntil" label="Срок годности" />
              <ConnectedTextInput field="cardSecret" label="Секретное число" />
            </Stack>
          </FormWidgetStep>
        </FormWidget>
      </Grid.Col>
      <Grid.Col span={4}>
        <MenuWidget />
      </Grid.Col>
    </Grid>
    <LoadingWidget />
  </Container>
);
