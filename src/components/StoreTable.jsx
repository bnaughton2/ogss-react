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


export default function FuelTable({ data }) {

  return (
    <>
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
      <Table sx={{ minWidth: "50%", tableLayout: 'fixed' }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Sales</TableCell>
            <TableCell align="center">Members</TableCell>
            <TableCell align="center">Drink Club&nbsp;</TableCell>
            <TableCell align="right">Lottery&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        <TableRow
              key={data.sales}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {data.sales}
              </TableCell>
              <TableCell align="center">{data.members}</TableCell>
              <TableCell align="center">{data.memberSales}</TableCell>
              <TableCell align="right">{data.lotterySales}</TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}