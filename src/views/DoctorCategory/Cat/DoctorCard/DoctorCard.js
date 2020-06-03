import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import WorkIcon from '@material-ui/icons/Work';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import StarIcon from '@material-ui/icons/Star';
import ScheduleIcon from '@material-ui/icons/Schedule';
import { Link as RouterLink } from 'react-router-dom';

import Card from '../../../../components/Card/Card'
import CardAvatar from "../../../../components/Card/CardAvatar";
import CardBody from "../../../../components/Card/CardBody";
import CardFooter from "../../../../components/Card/CardFooter";
import avatar from '../../../../assets/img/mask2.png';
import styles from "../../../../assets/jss/material-dashboard-react/views/doctorCategory";
import Custombuttons from '../../../../components/CustomButtons/Button';

const useStyles = makeStyles(styles);
const DoctorCard = (props) => {
  const { doctor } = props;
  const classes = useStyles();
  return (
    <Card profile className={classes.card} >
      <CardAvatar profile>
        <a href="#pablo" onClick={e => e.preventDefault()}>
          <img src={avatar} alt="..." />
        </a>
      </CardAvatar>
      <CardBody profile>
        <h6 className={classes.cardCategory}> {doctor.name}
        </h6>
        <div className={classes.stats}>
          <WorkIcon />{doctor.experience}
        </div> <br />
        <div className={classes.stats}>
          <AccountBalanceWalletIcon /> {doctor.number}
        </div><br />

        <div className={classes.stats}>
          <ScheduleIcon />Consultation Time :{doctor.consult_time}
        </div><br />
        <div className={classes.stats}>
          <StarIcon style={{ backgroundColor: '#FF9529' }} />{doctor.rating}
        </div><br />
      </CardBody>
      <CardFooter>
        <Custombuttons
          style={{ padding: '8px 3px', fontSize: '14px' }}
          component={RouterLink}
          to="book_appointment"
        >Book Appointment</Custombuttons>
        <Custombuttons
          style={{ padding: '8px 17px', fontSize: '14px' }}
          component={RouterLink}
          to="/doctor_category/1"
        >View Bio</Custombuttons>
      </CardFooter>
    </Card>
  );
}

export default DoctorCard;