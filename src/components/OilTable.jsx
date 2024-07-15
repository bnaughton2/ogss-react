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


export default function OilTable({ oilData, damagesData }) {

  return (
    <>
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
            <TableCell>Sales</TableCell>
            <TableCell align="right">Emissions</TableCell>
            <TableCell align="right">Vin Checks&nbsp;</TableCell>
            <TableCell align="right">Damages&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        <TableRow
              key={oilData.sales}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {oilData.sales}
              </TableCell>
              <TableCell align="right">{oilData.emissions}</TableCell>
              <TableCell align="right">{oilData.vinChecks}</TableCell>
              <TableCell align="right">{damagesData.damagesOil}</TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}