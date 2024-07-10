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


export default function WaitTable({ data }) {

  return (
    <>
    <Box sx={{flexGrow: 1, textAlign: "center"}}>
    <Typography
            variant="h6"
            noWrap
            component="a"
          >
            Wait Times
          </Typography>
    </Box>

    <TableContainer component={Paper}>
      <Table sx={{ minWidth: "50%" }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="center">C-Store</TableCell>
            <TableCell align="center">CW Sales</TableCell>
            <TableCell align="center">CW Load&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        <TableRow
              key={data.waitStore}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center" component="th" scope="row">
                {data.waitStore}
              </TableCell>
              <TableCell align="center">{data.waitSales}</TableCell>
              <TableCell align="center">{data.waitLoad}</TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}