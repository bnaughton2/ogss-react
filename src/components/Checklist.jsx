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
import { Image } from 'mui-image';
import x from '../assets/images/x.png';


export default function Checklist({data}){
    

    return(
        <Paper>
            <Box sx={{flexGrow: 1, textAlign: "center"}}>
            <Typography
                    variant="h6"
                    noWrap
                    component="a"
                >
                    Checklist
                </Typography>
            </Box>
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <Grid container item spacing={1} direction="row" alignItems="center" justifyContent="center">
                            <Grid item xs={4} align="center">
                                <Avatar variant={"rounded"} alt="The image" src={x}  style={{
                                        width: 25,
                                        height: 25,
                                    }} />
                                    <Typography variant="caption" >Open Car Wash</Typography>
                                    <Typography variant="caption" >Progress 0%</Typography>
                            </Grid>
                            <Grid item xs={4} align="center">
                                <Avatar variant={"rounded"} alt="The image" src={x}  style={{
                                        width: 25,
                                        height: 25,
                                    }} />
                            </Grid>
                            <Grid item xs={4} align="center">
                                <Avatar variant={"rounded"} alt="The image" src={x}  style={{
                                        width: 25,
                                        height: 25,
                                    }} />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>

                    </Grid>
                    <Grid item xs={12}>

                    </Grid>
                </Grid>
        </Paper>
    );
}