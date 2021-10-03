import { TablePagination } from '@material-ui/core';
import { FC } from 'react'

interface PaginationProps {
  pageNumber: number,
	count: number,
	rowsPerPage: number,
	onPageChange: (event: unknown, page: number) => void,
	onRowsPerPageChange: (event: unknown) => void,
}

export const Pagination: FC<PaginationProps> = ({
	count,
	pageNumber,
	rowsPerPage,
	onPageChange,
	onRowsPerPageChange,
}) => {
  return (
    <TablePagination
      component="div"
      count={count}
      page={pageNumber}
      rowsPerPage={rowsPerPage}
      onPageChange={onPageChange}
      onRowsPerPageChange={onRowsPerPageChange}
    />
  );
};
