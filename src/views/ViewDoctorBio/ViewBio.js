import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from '@material-ui/core';


import Custombuttons from '../../components/CustomButtons/Button';
import { Link as RouterLink } from 'react-router-dom';
import Card from '../../components/Card/Card';

import CardBody from '../../components/Card/CardBody';
import CardFooter from '../../components/Card/CardFooter';
import CardAvatar from '../../components/Card/CardAvatar';
import { Page } from 'components';

import avatar from "../../assets/img/patient.png";
import styles from "../../assets/jss/material-dashboard-react/views/DoctorBio";
import LocalHospitalTwoToneIcon from '@material-ui/icons/LocalHospitalTwoTone';
import AccountBalanceWalletTwoToneIcon from '@material-ui/icons/AccountBalanceWalletTwoTone';
import StarIcon from '@material-ui/icons/Star';

const useStyles = makeStyles(styles);

const DoctorBio = () => {
	const classes = useStyles();
	const stat = {
		color: '#352e2e',
		display: "inline-flex",
		fontSize: "14px",
		lineHeight: "26px",
		marginLeft: '-10px',
		"& svg": {
			top: "4px",
			width: "16px",
			height: "16px",
			position: "relative",
			marginRight: "3px",
			marginLeft: "3px"
		},
		"& .fab,& .fas,& .far,& .fal,& .material-icons": {
			top: "4px",
			fontSize: "16px",
			position: "relative",
			marginRight: "3px",
			marginLeft: "5px"
		}
	}
	return (
		<Page
			className={classes.root}

		>
			<Grid container spacing={3}>
				<Grid item xs={12} sm={3} md={3}>
					<Card style={{ marginTop: '45px' }} className={classes.card}>
						<CardAvatar profile>
							<a href="#pablo" onClick={e => e.preventDefault()}>
								<img src={avatar} alt="..." />
							</a>
						</CardAvatar>
						<CardBody >
							<h5 className={classes.cardCategory} style={{ textAlign: 'center', fontSize: '19px', fontWeight: 300 }}>Raj Kumar
                            </h5>
							<h5 className={classes.cardCategory} style={{ textAlign: 'center', display: 'inline-flex', marginLeft: '54px' }}>
								<LocalHospitalTwoToneIcon /> Cardiologist
                            </h5><br />
							<h5 className={classes.cardCategory} style={{ textAlign: 'center', display: 'inline-flex', marginLeft: '54px' }}>
								<AccountBalanceWalletTwoToneIcon />Fees :200
                            </h5>
							<br /><br />

							<Grid container spacing={1}>
								<Grid item xs={12} sm={12} md={12} >
									<div className={classes.stats} style={{ marginLeft: 57 }}>

										<span style={{ fontWeight: 400 }}>Consultation Time:</span>
										<div> 11:00AM-2:00PM</div>
										<div> 4:00PM-6:00Pm</div>

									</div>
								</Grid>
								<Grid item xs={12} sm={12} md={12} >
									<div className={classes.stat} style={{ display: 'inline-flex' }}>
										<StarIcon style={{ backgroundColor: '#FF9529', marginLeft: '54px', textAlign: 'center', fontSize: 14 }} />4.5/5
                            </div>
								</Grid>
								<CardFooter>
									<Custombuttons
										style={{ marginLeft: 10 }}
										component={RouterLink}
										to="/book_appointment"
									>Book Appointment</Custombuttons>
								</CardFooter>
							</Grid>
						</CardBody>
					</Card>
				</Grid>
				<Grid item xs={12} sm={9} md={9} >
					<Card style={{ marginLeft: '-1px', boxShadow: '0 2px 8px rgba(0,0,0,0.30), 0 10px 12px rgba(0,0,0,0.22)' }} >
						<CardBody>
							<form >
								<Grid container spacing={2}>
									<Grid item xs={12} sm={6} md={6} >
										<div className={classes.stats}>
											<Typography className={classes.typo} variant="body2">Qualification</Typography>
											<br />
											<Typography className={classes.typoResult} variant="h6">
												MMBS,MD
                                        </Typography>

										</div>
									</Grid>
									<Grid item xs={12} sm={6} md={6} >
										<div className={classes.stats}>
											<Typography className={classes.typo} variant="body2">College</Typography>
											<br />
											<Typography className={classes.typoResult} variant="h6">
												All India Institute Of Medical Sciences, New Delhi
                                        </Typography>

										</div>
									</Grid>
									<Grid item xs={12} sm={6} md={6} >
										<div className={classes.stats}>
											<Typography className={classes.typo} variant="body2">Registration No</Typography>
											<br />
											<Typography className={classes.typoResult} variant="h6">
												114587569
                                        </Typography>

										</div>
									</Grid>
									<Grid item xs={12} sm={6} md={6} >
										<div className={classes.stats}>
											<Typography className={classes.typo} variant="body2">Work Experiance</Typography>
											<br />
											<Typography className={classes.typoResult} variant="h6">
												6 Years
                                        </Typography>

										</div>
									</Grid>
									<Grid item xs={12} sm={6} md={6} >
										<div className={classes.stats}>
											<Typography className={classes.typo} variant="body2">Detailed Experience</Typography>
											<br />
											<Typography className={classes.typoResult} variant="h6">
												<ul>
													<li>Worked in AIIMS (2010-2018)</li>
													<li>Fortis Hospital, Shalimar Bagh(2018-2020)</li>
												</ul>
											</Typography>

										</div>
									</Grid>
									<Grid item xs={12} sm={6} md={6} >
										<div className={classes.stats}>
											<Typography className={classes.typo} variant="body2">Awards and Achievements</Typography>
											<br />
											<Typography className={classes.typoResult} variant="h6">
												<ul>
													<li>CHIEF OF THE DEPARTMENT OF FAMILY PRACTICE </li>
													<li>CHIEF OF THE DEPARTMENT OF FAMILY PRACTICE </li>
												</ul>
											</Typography>

										</div>
									</Grid>
									<Grid item xs={12} sm={6} md={6} >
										<div className={classes.stats}>
											<Typography className={classes.typo} variant="body2">Slots</Typography>
											<br />
											<Typography className={classes.typoResult} variant="h6">
												{/* <img src={ Online } style={{ width:43,height:30 }} />
                        
                                        <img src={ Online } style={{ width:43,height:30 }} />
                                        <img src={ Online } style={{ width:43,height:30 }} />
                                        <img src={ Online } style={{ width:43,height:30 }} />
                                        <img src={ Online } style={{ width:43,height:30 }} />
                                        <img src={ Online } style={{ width:43,height:30 }} /> */}
											</Typography>

										</div>
									</Grid>
									<Grid item xs={12} sm={6} md={6} >
										<div className={classes.stats}>
											<Typography className={classes.typo} variant="body2">Patient Viewed</Typography>
											<br />
											<Typography className={classes.typoResult} variant="h6">
												250
                                        </Typography>

										</div>
									</Grid>
									<Grid item xs={12} sm={12} md={12} >
										<div className={classes.stats}>
											<Typography className={classes.typo} variant="body2">Summary</Typography>
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

export default DoctorBio;
