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
import x from '../assets/images/x.png';
import check from '../assets/images/check.png';

export default function ChecklistComponent({ title, progress, mtd, loadProgress=true, altTitle}){


    return(
        <>
        {progress != 100 ? 
        <Avatar variant={"rounded"} alt="The image" src={x}  style={{
            width: 25,
            height: 25,
        }} />: 
        <Avatar variant={"rounded"} alt="The image" src={check}  style={{
            width: 25,
            height: 25,
        }} />}
        <Typography variant="caption" display="block">{title} </Typography>
        {loadProgress ? 
        <>
        <Typography variant="caption" display="block">Progress: {progress}%</Typography>
        <LinearProgress variant="determinate" value={progress} sx={{marginLeft: '10%', marginRight: '10%'}}/>
        </>
        :
        <Typography variant="caption" display="block">{altTitle}</Typography>
        }
        
        {/* <Typography variant="caption" display="block">MTD: {mtd}</Typography> */}
        </>
    );
}