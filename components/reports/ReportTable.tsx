import { TableHeader } from "@/components/ui/table"
import { useTable, useSortBy, useFilters, usePagination } from "react-table"
import { Table, TableBody, TableCell, TableHead, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select } from "@/components/ui/select"

interface ReportTableProps {
  columns: any[]
  data: any[]
}

export function ReportTable({ columns, data }: ReportTableProps) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 10 },
    },
    useFilters,
    useSortBy,
    usePagination,
  )

  return (
    <div>
      <Table {...getTableProps()}>
        <TableHeader>
          {headerGroups.map((headerGroup, i) => (
            <TableRow {...headerGroup.getHeaderGroupProps()} key={i}>
              {headerGroup.headers.map((column) => (
                <TableHead {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                  <span>{column.isSorted ? (column.isSortedDesc ? " 🔽" : " 🔼") : ""}</span>
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row)
            return (
              <TableRow {...row.getRowProps()} key={i}>
                {row.cells.map((cell) => {
                  return <TableCell {...cell.getCellProps()}>{cell.render("Cell")}</TableCell>
                })}
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
      <div className="pagination mt-4 flex items-center justify-between">
        <Button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {"<"}
        </Button>{" "}
        <span>
          Página{" "}
          <strong>
            {pageIndex + 1} de {pageOptions.length}
          </strong>{" "}
        </span>
        <Button onClick={() => nextPage()} disabled={!canNextPage}>
          {">"}
        </Button>{" "}
        <span>
          | Ir para página:{" "}
          <Input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0
              gotoPage(page)
            }}
            style={{ width: "100px" }}
          />
        </span>{" "}
        <Select
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value))
          }}
        >
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Mostrar {pageSize}
            </option>
          ))}
        </Select>
      </div>
    </div>
  )
}

