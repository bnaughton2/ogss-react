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
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import LinearProgress from '@mui/material/LinearProgress';
import { Image } from 'mui-image';
import ChecklistComponent from './ChecklistComponent';
import x from '../assets/images/x.png';
import Toolbar from '@mui/material/Toolbar';
import FilterListIcon from '@mui/icons-material/FilterList';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';


export default function Checklist({data}){
    const progress = 10;
    

    return(
        <Paper>
                <Toolbar variant="dense">
                <Typography
                    sx={{ flex: '1 1 100%' }}
                    variant="h6"
                    id="tableTitle"
                    component="div"
                    align="center"
                    >
                    Checklist
                    </Typography>
                <Tooltip title="Toggle MTD">
                    <IconButton>
                        <FilterListIcon />
                    </IconButton>
                    </Tooltip>    
                </Toolbar>
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <Grid container item spacing={1} direction="row" alignItems="center" justifyContent="center" marginBottom="2%" marginTop="2%">
                            <Grid item xs={4} align="center">
                                <ChecklistComponent title="Open Car Wash" progress={progress} mtd=""/>
                            </Grid>
                            <Grid item xs={4} align="center">
                                <ChecklistComponent title="Open Oil" progress={progress} mtd="(9/9) "/>
                            </Grid>
                            <Grid item xs={4} align="center">
                                <ChecklistComponent title="Open Oil" progress={progress} mtd=""/>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container item spacing={1} direction="row" alignItems="center" justifyContent="center" marginBottom="2%" marginTop="2%">
                            <Grid item xs={4} align="center">
                                <ChecklistComponent title="Site Operations" progress={progress} altTitle="7-10" loadProgress={false} mtd=""/>
                            </Grid>
                            <Grid item xs={4} align="center">
                                <ChecklistComponent title="Check-Ins" progress={progress} mtd=""/>
                            </Grid>
                            <Grid item xs={4} align="center">
                                <ChecklistComponent title="Site Operations" progress={progress} altTitle="1-4" loadProgress={false} mtd=""/>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container item spacing={1} direction="row" alignItems="center" justifyContent="center" marginBottom="4%" marginTop="2%">
                            <Grid item xs={4} align="center">
                                <ChecklistComponent title="Open Car Wash" progress={progress} mtd=""/>
                            </Grid>
                            <Grid item xs={4} align="center">
                                <ChecklistComponent title="Open Oil" progress={progress} mtd=""/>
                            </Grid>
                            <Grid item xs={4} align="center">
                                <ChecklistComponent title="Open Oil" progress={progress} mtd=""/>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
        </Paper>
    );
}