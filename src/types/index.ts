export type UserType = {
  id: number;
  name?: string;
  email: string;
  password?: string;
  fullName?: null | string;
  avatar?: null | string;
  dateOfBirth?: null | string;
  deletedAt?: null | Date;
  createdAt?: string;
  updatedAt?: string;
};

export type BookType = {
  authorName: string;
  cover: string;
  dateOfIssue: string;
  description: string;
  genre: string;
  hardCoverPrice: number;
  id: number;
  name: string;
  paperBackPrice: number;
  rating: number;
  status: string;
};

export type CartType = {
  id: number;
  bookId: number;
  userId: number;
  count: number;
};

export type GenreType = {
  id: number;
  name: string;
};
