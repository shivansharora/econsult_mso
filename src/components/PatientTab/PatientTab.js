import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import Vitals from '../FormsTable/Vitals';
import Files from '../FilesDropzone/FilesDropzone';
import {  Grid } from '@material-ui/core';
import Report from '../../assets/img/report1.png';
import Radio from '../../assets/img/radio.png';
import Lifestyle from '../FormsTable/Lifestyle';
import CurrentMedication from '../FormsTable/CurrentMedication';
import AllergyTable from '../FormsTable/Allergy';
import MedicalProblem from '../FormsTable/MedicalProblem';
import FamilyHistory from '../FormsTable/FamilyHistory';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
  },
  indicator: {
    backgroundColor: '#3daa99'
  },
}));

export default function ScrollableTabsButtonAuto() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
        //   textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          classes={{ indicator: classes.indicator }}
          style={{ color:'#3daa99' }}
         
          aria-label="scrollable auto tabs example"
        >
          <Tab  style={{ minWidth:'140px' }} label="Medical Problem" {...a11yProps(0)} />
          <Tab  style={{ minWidth:'140px' }} label="Current Medication" {...a11yProps(1)} />
          <Tab  style={{ minWidth:'120px' }} label="Document" {...a11yProps(2)} />
          <Tab  style={{ minWidth:'90px' }} label="Vitals" {...a11yProps(3)} />
          <Tab  style={{ minWidth:'100px' }} label="Lifestyle" {...a11yProps(4)} />
          <Tab  style={{ minWidth:'140px' }} label="Family History" {...a11yProps(5)} />
          <Tab  style={{ minWidth:'100px' }} label="Allergy" {...a11yProps(6)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <MedicalProblem/>
      </TabPanel>
      <TabPanel value={value} index={1}>
       <CurrentMedication/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Grid container spacing={3}>
        <Grid item xs={12} sm={4} md={4} >
        <Files label=" Select Documents"
         img="/images/undraw_add_file2_gvbb.svg"
        />
          </Grid>
          <Grid item xs={12} sm={4} md={4} >
        <Files label=" Select Pathology Report"
         img={Report}
        />
          </Grid>
          <Grid item xs={12} sm={4} md={4} >
        <Files label=" Select Radiology Report"
         img={Radio}
        />
          </Grid>
         </Grid>
        
      </TabPanel>
      <TabPanel value={value} index={3}>
      <Vitals />
      </TabPanel>
      <TabPanel value={value} index={4}>
      <Lifestyle/>
      </TabPanel>
      <TabPanel value={value} index={5}>
        <FamilyHistory/>
      </TabPanel>
      <TabPanel value={value} index={6}>
        <AllergyTable/>
      {/* <Allergy/> */}
      </TabPanel>
    </div>
  );
}