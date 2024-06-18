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


export default function ExtrasTable({ extrasData, payrollData }) {

  return (
    <>
    <Box sx={{flexGrow: 1, textAlign: "center"}}>
    <Typography
            variant="h6"
            noWrap
            component="a"
          >
            Expenses
          </Typography>
    </Box>

    <TableContainer component={Paper} elevation={1}>
      <Table sx={{ minWidth: "50%" }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Labor</TableCell>
            <TableCell align="right">Fixed</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        <TableRow
              key={payrollData.totalPay}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {payrollData.totalPay}
              </TableCell>
              <TableCell align="right">{extrasData.profitCorrection}</TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
    <Box sx={{flexGrow: 1, textAlign: "center"}}>
        <Typography
            noWrap
            component="a"
          >
            {extrasData.lastMod}
          </Typography>
    </Box>
    </>
  );
}