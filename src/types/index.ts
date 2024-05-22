export type UserType = {
  id: number;
  name?: string;
  email?: string;
  password?: string;
  fullName?: null | string;
  dateOfBirth?: null | string;
  deletedAt?: null | Date;
  createdAt?: string;
  updatedAt?: string;
};
