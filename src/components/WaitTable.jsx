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
import Toolbar from '@mui/material/Toolbar';
import FilterListIcon from '@mui/icons-material/FilterList';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';


export default function WaitTable({ data }) {

  return (
    <>
    <Toolbar variant="dense">
    <Typography
          sx={{ flex: '1 1 100%' }}
          variant="h6"
          id="tableTitle"
          component="div"
          align="center"
        >
          Wait Times
        </Typography>
    <Tooltip title="Toggle Alerts/Percents">
          <IconButton>
            <FilterListIcon />
          </IconButton>
        </Tooltip>    
    </Toolbar>
    <TableContainer >
      <Table sx={{ minWidth: "50%", tableLayout: 'fixed' }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="center">C-Store</TableCell>
            <TableCell align="center">CW Sales</TableCell>
            <TableCell align="center">CW Load</TableCell>
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