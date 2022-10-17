import { useState } from "react";
import MuiTable from "@mui/material/Table";
import {
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
  TableFooter,
} from "@mui/material";


interface ITableProps {
  labels: string[];
  renderItem: () => JSX.Element[];
  hidePopup: (value: string) => void;
}

export const Table: React.FC<ITableProps> = ({
  labels,
  renderItem,
  hidePopup,
}) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(8);
  const tableLength = renderItem().length;
  const RenderItems = renderItem().slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage,
  );

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <TableContainer component={Paper} onClick={() => hidePopup("")}>
      <MuiTable aria-label="simple table">
        <TableHead>
          <TableRow>
            {labels.map((label, i) => (
              <TableCell key={i}>{label}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>{RenderItems}</TableBody>
        <TableFooter></TableFooter>
      </MuiTable>
      <TablePagination
        rowsPerPageOptions={[8, 16, 32]}
        component="div"
        count={tableLength}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableContainer>
  );
};
