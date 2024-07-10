import "../css/main.css";
import React, { useState, useEffect} from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import FuelTable from "../components/FuelTable";
import OilTable from "../components/OilTable";
import WashTable from "../components/WashTable";
import StoreTable from "../components/StoreTable";
import ExtrasTable from "../components/ExtrasTable";
import ProfitTable from "../components/ProfitTable";
import Checklist from "../components/Checklist";
import WaitTable from "../components/WaitTable";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';


export default function Dashboard() {
    const [dashboardData, setDashboardData] = useState();
    const [gasData, setGasData] = useState({});
    const [oilData, setOilData] = useState({});
    const [payrollData, setPayrollData] = useState({});
    const [storeData, setStoreData] = useState({});
    const [washData, setWashData] = useState({});
    const [damagesData, setDamagesData] = useState({});
    const [extrasData, setExtrasData] = useState({});

    const isLargeScreen = useMediaQuery('(min-width: 900px)');
    const tmp = {"waitStore": 0, "waitSales": 0, "waitLoad": 0}

    const fetchData = () => {
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                startDate: "2024-02-27",
                endDate: "2024-02-28"
              })
            };
    
          fetch('http://ec2-3-16-115-196.us-east-2.compute.amazonaws.com:8000/api/v1/dashboard', requestOptions).then((response) => 
            response.json()
            ).then((data) => {
              setDashboardData(data);
              setStoreData(data.store);
              setGasData(data.gas);
              setOilData(data.oil);
              setPayrollData(data.payroll);
              setDamagesData(data.damages);
              setWashData(data.wash);
              setExtrasData(data.extras);
            });

    }
    
    useEffect(() => {
        fetchData()
    }, []);

    return (
    <>
        {!dashboardData? (<div id="loading">Loading</div>)  :
        <Grid container spacing={1}>
        
        <Grid item xs={12} md={4} >
        {!isLargeScreen ? 
        <Accordion xs={12} md={4}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>Checklist / Wait Times</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Checklist />
        <WaitTable data={tmp}/>
        </AccordionDetails>
      </Accordion> :
      <>
      <Checklist />
      <Paper elevation={1} sx={{marginTop: "2%"}}>
        <WaitTable data={tmp}/>
      </Paper>
      </>
      }
            
        </Grid>
        <Grid item xs={12} md={5}>
          {!isLargeScreen ? 

        <Accordion defaultExpanded xs={12} md={4}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>Sales</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Paper elevation={1}>
                <FuelTable data={gasData} />
                <OilTable oilData={oilData} damagesData={damagesData} />
                <StoreTable data={storeData} />
                <WashTable washData={washData} damagesData={damagesData} storeData={storeData} />
                <ExtrasTable extrasData={extrasData} payrollData={payrollData} />
            </Paper>
        </AccordionDetails>
      </Accordion>  :
            <Paper elevation={1}>
                <FuelTable data={gasData} />
                <OilTable oilData={oilData} damagesData={damagesData} />
                <StoreTable data={storeData} />
                <WashTable washData={washData} damagesData={damagesData} storeData={storeData} />
                <ExtrasTable extrasData={extrasData} payrollData={payrollData} />
            </Paper>
            }

        </Grid>
        <Grid item xs={12} md={3}>
          {!isLargeScreen ?
          <Accordion xs={12} md={4}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography>Profit</Typography>
          </AccordionSummary>
          <AccordionDetails>
          <Paper elevation={1}> 
                <ProfitTable data={dashboardData} />
          </Paper>
          </AccordionDetails>
        </Accordion> 
          :
          <Paper elevation={1}> 
                <ProfitTable data={dashboardData} />
          </Paper>
          }
            
        </Grid>
    </Grid>
        }
    </>
    );
}