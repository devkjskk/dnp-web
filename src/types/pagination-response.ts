export type PaginationResponse<T> = {
  items: T[];
  meta: {
    totalItems: number;
  };
};
