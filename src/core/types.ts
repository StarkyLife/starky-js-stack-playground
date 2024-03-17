export type MainFormData = {
  lastname: string;
  firstname: string;
  middlename: string;
  magicNumber: string;
  cardNumber: string;
  activeUntil: string;
  cardSecret: string;
};

export type MainFormSetData = {
  field: keyof MainFormData;
  value: string;
};

export type StepType = 'personal' | 'bank';
