import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from "@material-ui/core/styles";


import Card from "../../../../components/Card/Card";
import CardAvatar from "../../../../components/Card/CardAvatar";
import CardBody from "../../../../components/Card/CardBody";
import avatar from "../../../../assets/img/patient.png";
import styles from "../../../../assets/jss/material-dashboard-react/views/PatientViewCard";
import PatientTab from '../../../../components/PatientTab/PatientTab';
import CustomButton from '../../../../components/CustomButtons/Button';


import DateRangeIcon from '@material-ui/icons/DateRange';
import WcIcon from '@material-ui/icons/Wc';
import TodayIcon from '@material-ui/icons/Today';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import ContactlessIcon from '@material-ui/icons/Contactless';
import EmailIcon from '@material-ui/icons/Email';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import LocationOnIcon from '@material-ui/icons/LocationOn';


const useStyles = makeStyles(styles);

const PatientDetail = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>

      <Grid container spacing={2} style={{ marginTop: '41px' }}>

        <Grid item xs={12} sm={3} md={3} >
          <Card profile className={classes.card} >
            <CardAvatar profile>
              <a href="#pablo" onClick={e => e.preventDefault()}>
                <img src={avatar} alt="..." />
              </a>
            </CardAvatar>
            <CardBody style={{ marginTop: '-15px' }}>

              <h6 className={classes.cardCategory} style={{ textAlign: 'center' }}>Anmol Jain
            </h6><br />
              <Grid container spacing={0}>
                <Grid item xs={12} sm={12} md={12} >
                  <div className={classes.stats}>
                    <TodayIcon />
                    <span style={{ fontWeight: 400 }}>Age:</span>
                    <span>27</span>
                  </div>
                </Grid>
                <Grid item xs={12} sm={12} md={12} >
                  <div className={classes.stats}>
                    <WcIcon />
                    <span style={{ fontWeight: 400 }}>Gender:</span>
                    <span> Male</span>
                  </div>
                </Grid>
                <Grid item xs={12} sm={12} md={12} >
                  <div className={classes.stats}>
                    <DateRangeIcon />
                    <span style={{ fontWeight: 400 }}>DOB:</span>
                    <span>20/06/1995</span>
                  </div>
                </Grid>
                <Grid item xs={12} sm={12} md={12} >
                  <div className={classes.stats}>
                    <SupervisedUserCircleIcon />
                    <span style={{ fontWeight: 400 }}>Marital Status:</span>
                    <span>Single</span>
                  </div>
                </Grid>
                <Grid item xs={12} sm={12} md={12} >
                  <div className={classes.stats}>
                    <LocationOnIcon />
                    <span style={{ fontWeight: 400 }}>City:</span>
                    <span>Delhi</span>
                  </div>
                </Grid>
                <Grid item xs={12} sm={12} md={12} >
                  <div className={classes.stats}>
                    <PhoneAndroidIcon />
                    <span style={{ fontWeight: 400 }}>Number:</span>
                    <span>7017483927</span>
                  </div>
                </Grid>
                <Grid item xs={12} sm={12} md={12} >
                  <div className={classes.stats}>
                    <ContactlessIcon />
                    <span style={{ fontWeight: 400 }}>Emergency No:</span>
                    <span>7017483927</span>
                  </div>
                </Grid>
                <Grid item xs={12} sm={12} md={12} >
                  <div className={classes.stats}>
                    <EmailIcon />
                    <span style={{ fontWeight: 400 }}>Email:</span>
                    <span>arorashivansh@gmail.com</span>
                  </div>
                </Grid><br />
                {/* <Grid item xs={12} sm={12} md={12} >
                  <div style={{ marginLeft: '63px' }} className={classes.stats}>
                    <CustomButton>Edit</CustomButton>
                  </div>
                </Grid> */}
              </Grid>
            </CardBody>
          </Card>
        </Grid>
        <Grid item xs={12} sm={9} md={9} >
          <PatientTab />
        </Grid>
      </Grid>
    </div>
  );
}

export default PatientDetail;