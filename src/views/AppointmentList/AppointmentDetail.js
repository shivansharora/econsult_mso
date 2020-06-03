import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from '@material-ui/core';

import Card from '../../components/Card/Card';

import CardBody from '../../components/Card/CardBody';
import CardHeader from '../../components/Card/CardHeader';

import { Page } from 'components';

import avatar from "../../assets/img/patient.png";
import styles from "../../assets/jss/material-dashboard-react/views/DoctorBio";

const useStyles = makeStyles(styles);

const AppointmentDetail = () => {
	const classes = useStyles();
	return (
		<Page
			style={{ padding: 16 }}

		>
			<Grid container spacing={3}>
				<Grid item xs={12} sm={9} md={9} >
					<Card style={{ marginLeft: '20px', boxShadow: '0 2px 8px rgba(0,0,0,0.30), 0 10px 12px rgba(0,0,0,0.22)' }} >
						<CardHeader style={{ width: '147px', padding: '14px' }} color="success" >

							<h4 className={classes.cardTitleWhite}>Appointment Detail</h4>
						</CardHeader>
						<CardBody>
							<form >
								<Grid container spacing={2}>
									<Grid item xs={12} sm={6} md={6} >
										<div className={classes.stats}>
											<Typography className={classes.typo} variant="body2">Patient Name</Typography>
											<br />
											<Typography className={classes.typoResult} variant="h6">
												Arun Kumar
                                        </Typography>

										</div>
									</Grid>
									<Grid item xs={12} sm={6} md={6} >
										<div className={classes.stats}>
											<Typography className={classes.typo} variant="body2">Doctor</Typography>
											<br />
											<Typography className={classes.typoResult} variant="h6">
												Avinash
                                        </Typography>

										</div>
									</Grid>
									<Grid item xs={12} sm={6} md={6} >
										<div className={classes.stats}>
											<Typography className={classes.typo} variant="body2">Category</Typography>
											<br />
											<Typography className={classes.typoResult} variant="h6">
												Category 1
                                        </Typography>

										</div>
									</Grid>
									<Grid item xs={12} sm={6} md={6} >
										<div className={classes.stats}>
											<Typography className={classes.typo} variant="body2">Appointment Date and Time</Typography>
											<br />
											<Typography className={classes.typoResult} variant="h6">
												03 June 2020
											</Typography>

										</div>
									</Grid>
									<Grid item xs={12} sm={6} md={6} >
										<div className={classes.stats}>
											<Typography className={classes.typo} variant="body2">Camp Type</Typography>
											<br />
											<Typography className={classes.typoResult} variant="h6">
												
											</Typography>

										</div>
									</Grid>
									<Grid item xs={12} sm={6} md={6} >
										<div className={classes.stats}>
											<Typography className={classes.typo} variant="body2">Promo Code </Typography>
											<br />
											<Typography className={classes.typoResult} variant="h6">
												
											</Typography>

										</div>
									</Grid>
									
							
								</Grid>
							</form>
						</CardBody>
					</Card>
				</Grid>
			</Grid>
		</Page>
	);
};

export default AppointmentDetail;
