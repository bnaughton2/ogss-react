import React, { useState, useEffect} from 'react';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ButtonGroup from '@mui/material/ButtonGroup';
import Grid from '@mui/material/Grid';

export default function DateRange({ setStartDate, setEndDate }) {
    const [displayStart, setDisplayStart] = useState(null);
    const [displayEnd, setDisplayEnd] = useState(null);

    const changeStartDate = date => {
        setDisplayStart(date);
        console.log(date);
        // setStartDate(e.target.value);
      };

    const changeEndDate = date => {
        setDisplayEnd(date);
        console.log(date);
        // setEndDate(e.target.value);
      };

  return (
    <>
        <Grid container spacing={1}  >
            <Grid container item xs={12} justifyContent="flex-end" alignItems="center">
                <ButtonGroup >
                    <Button variant="outlined">Today</Button>
                    <Button variant="outlined">This Week</Button>
                    <Button variant="outlined">This Month</Button>
                </ButtonGroup>
                <Typography style={{ whiteSpace: "pre-wrap" }}> | </Typography>
                <DatePicker 
                label="Start Date"
                value={displayStart}
                onChange={changeStartDate}
                slotProps={{ textField: { size: 'small' } }}
                sx={{width: '14%'}}
                />
                <DatePicker 
                label="End Date"
                value={displayEnd}
                onChange={changeEndDate}
                slotProps={{ textField: { size: 'small' } }}
                sx={{width: '14%'}}
                />
            </Grid>
        </Grid>
    </>
  );
}