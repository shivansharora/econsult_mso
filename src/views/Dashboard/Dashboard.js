import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from '@material-ui/core';

import PersonAddIcon from '@material-ui/icons/PersonAdd';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import Custombuttons from '../../components/CustomButtons/Button';
import Card from '../../components/Card/Card';
import CardHeader from '../../components/Card/CardHeader';
import CardIcon from '../../components/Card/CardIcon';
// import CardBody from '../../components/Card/CardBody';
import CardFooter from '../../components/Card/CardFooter';
import { Link as RouterLink } from 'react-router-dom';
import styles from "../../assets/jss/material-dashboard-react/views/dashboardStyle";
import Paper from '@material-ui/core/Paper';
// import Header from './components/Header/Header';
import DateRange from "@material-ui/icons/DateRange";
import BookIcon from '@material-ui/icons/Book';
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import Accessibility from "@material-ui/icons/Accessibility";

import { Page } from 'components';
const useStyles = makeStyles(styles);



const Dashboard = () => {
  const classes = useStyles();

  return (
    <Page
      className={classes.root}

    >
      <Grid container spacing={3}>
      <Grid item xs={12} sm={3} md={3} >
          <Card className={classes.card1}>
            <CardHeader color="primary" stats icon>
              <CardIcon color="primary">
                <Accessibility />
              </CardIcon>
              <p className={classes.cardCategory}>Total Patient</p>
              <h3 className={classes.cardTitle} style={{ fontWeight: 500 }}>
                10
              </h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <DateRange />
                Today's Data
                </div>
            </CardFooter>
          </Card>
        </Grid>
        <Grid item xs={12} sm={3} md={3} >
          <Card className={classes.card1}>
            <CardHeader color="warning" stats icon>
              <CardIcon color="warning">
                <BookIcon />
              </CardIcon>
              <p className={classes.cardCategory}>Pending Appointment</p>
              <h3 className={classes.cardTitle} style={{ fontWeight: 500 }}>
                10
              </h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <DateRange />
                Today's Data
                </div>
            </CardFooter>
          </Card>
        </Grid>
        <Grid item xs={12} sm={3} md={3} >
          <Card className={classes.card1}>
            <CardHeader color="danger" stats icon>
              <CardIcon color="danger">
                <DoneOutlineIcon />
              </CardIcon>
              <p className={classes.cardCategory}>Consultations Completed</p>
              <h3 className={classes.cardTitle} style={{ fontWeight: 500 }}>
                10
              </h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <DateRange />
                Today's Data
                </div>
            </CardFooter>
          </Card>
        </Grid>
        <Grid item xs={12} sm={3} md={3} >
          <Card className={classes.card1}>
            <CardHeader color="warning" stats icon>
              <CardIcon color="info">
                <Accessibility />
              </CardIcon>
              <p className={classes.cardCategory}>Patients Waiting</p>
              <h3 className={classes.cardTitle} style={{ fontWeight: 500 }}>
                10
              </h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <DateRange />
                Today's Data
                </div>
            </CardFooter>
          </Card>
        </Grid>
        {/* <Grid item xs={12} sm={3} md={3} >
          <Card className={classes.card1}>
            <CardHeader color="primary" stats icon>
              <CardIcon color="primary">
                <LocalHospitalIcon />
              </CardIcon>
              <p className={classes.cardCategory}>Doctors Online</p>
              <h3 className={classes.cardTitle} style={{ fontWeight: 500 }}>
                10
              </h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <DateRange />
                Today's Data
                </div>
            </CardFooter>
          </Card>
        </Grid> */}
      </Grid>
      {/* <Header /> */}
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={6} >
          <Paper className={classes.paper} style={{ backgroundColor: 'rgb(75, 160, 147)', boxShadow: '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)' }}>
            <Card style={{ backgroundColor: '#f2fbfb' }}>
              <CardHeader color="success" stats icon>
                <CardIcon color="success">
                  <PersonAddIcon />
                </CardIcon>
                <p className={classes.cardCategory}>Create Patient</p>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <Custombuttons
                    component={RouterLink}
                    to="create_patient">
                    Create Patient
                      </Custombuttons>
                </div>
              </CardFooter>
            </Card>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={6} >
          <Paper className={classes.paper} style={{ backgroundColor: 'rgb(75, 160, 147)', boxShadow: '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)' }}>
            <Card style={{ backgroundColor: '#f2fbfb' }}>
              <CardHeader color="success" stats icon>
                <CardIcon color="success">
                  <LocalHospitalIcon />
                </CardIcon>
                <p className={classes.cardCategory}>View Doctors Category</p>

              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <Custombuttons
                    component={RouterLink}
                    to="doctor_category"
                  >View Doctors</Custombuttons>
                </div>
              </CardFooter>
            </Card>
          </Paper>
        </Grid>
      </Grid>
    </Page>
  );
};

export default Dashboard;
