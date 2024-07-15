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


export default function WashTable({ washData, damagesData, storeData }) {

  return (
    <>
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
            <TableCell>Sales</TableCell>
            <TableCell align="right">Members</TableCell>
            <TableCell align="right">Vending&nbsp;</TableCell>
            <TableCell align="right">Damages&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        <TableRow
              key={washData.sales}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {washData.sales}
              </TableCell>
              <TableCell align="right">{washData.washMembers}</TableCell>
              <TableCell align="right">{storeData.vendingSales}</TableCell>
              <TableCell align="right">{damagesData.damagesWash}</TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}