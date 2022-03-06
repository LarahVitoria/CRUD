export const genderList =[
  {
    value: "female",
    label: "Feminino",
  },
  {
    value: "male",
    label: "Masculino",
  },
];

export const statusList =[
  {
    value: "active",
    label: "Ativo",
  },
  {
    value: "inactive",
    label: "Inativo",
  },
];

export interface User {
  id: number;
  name: string;
  email: string;
  gender: string;
  status: string;
};