export type UserType = {
  id: number;
  email: string;
  password?: string;
  fullName?: null | string;
  dateOfBirth?: null | string;
  deletedAt?: null | Date;
  createdAt?: string;
  updatedAt?: string;
};
