export const paginationHandler = (
  page: number = 1,
  pageSize: number = 20
): { skip: number; take: number } => {
  const skip: number = ((page - 1) * pageSize) | 0;

  return { skip, take: pageSize | 20 };
};
