import React, { useState, useEffect} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box";


export default function ProfitTable({ data }) {

  return (
    <>
    <Box sx={{flexGrow: 1, textAlign: "center"}}>
    <Typography
            variant="h6"
            noWrap
            component="a"
          >
            Gas
          </Typography>
    </Box>

    <TableContainer >
      <Table sx={{ minWidth: "50%", borderBottom: "1px solid", borderTop: "1px solid", borderColor: "lightgray" }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Profit</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        <TableRow
              key={data && data.gas.profit}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {data && data.gas.profit}
              </TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>

    <Box sx={{flexGrow: 1, textAlign: "center"}}>
    <Typography
            variant="h6"
            noWrap
            component="a"
          >
            Oil
          </Typography>
    </Box>

    <TableContainer >
      <Table sx={{ minWidth: "50%" }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Profit</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        <TableRow
              key={data && data.oil.profit}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {data && data.oil.profit}
              </TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>

    <Box sx={{flexGrow: 1, textAlign: "center"}}>
    <Typography
            variant="h6"
            noWrap
            component="a"
          >
            Store
          </Typography>
    </Box>

    <TableContainer >
      <Table sx={{ minWidth: "50%" }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Profit</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        <TableRow
              key={data && data.store.profit}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {data && data.store.profit}
              </TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>

    <Box sx={{flexGrow: 1, textAlign: "center"}}>
    <Typography
            variant="h6"
            noWrap
            component="a"
          >
            Carwash
          </Typography>
    </Box>

    <TableContainer >
      <Table sx={{ minWidth: "50%" }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Profit</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        <TableRow
              key={data && data.wash.profit}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {data && data.wash.profit}
              </TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>

    <Box sx={{flexGrow: 1, textAlign: "center"}}>
    <Typography
            variant="h6"
            noWrap
            component="a"
          >
            Total Profit
          </Typography>
    </Box>

    <TableContainer  elevation={1}>
      <Table sx={{ minWidth: "50%" }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Total Profit</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        <TableRow
              key={data && data.extras.totalProfit}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {data && data.extras.totalProfit}
              </TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>

    <Typography

        noWrap
        component="a"
        >
            ‎
    </Typography>
    </>
  );
}