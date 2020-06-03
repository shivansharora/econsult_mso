import React from "react";
import './UserProfile.css';

import { makeStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';

import Button from '../../components/CustomButtons/Button';
import Card from '../../components/Card/Card';
import CardHeader from '../../components/Card/CardHeader';
import CardIcon from '../../components/Card/CardIcon';
import CardBody from '../../components/Card/CardBody';
import CardFooter from '../../components/Card/CardFooter';
import CardAvatar from '../../components/Card/CardAvatar';
import avatar from "../../assets/img/patient.png";

import TextField from '@material-ui/core/TextField';
import useForm from '../../customHooks/useForm';
import validate from './Validation'
import LockIcon from '@material-ui/icons/Lock';

import WcIcon from '@material-ui/icons/Wc';
import TodayIcon from '@material-ui/icons/Today';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import ContactlessIcon from '@material-ui/icons/Contactless';
import EmailIcon from '@material-ui/icons/Email';
// import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import LanguageIcon from '@material-ui/icons/Language';


import PersonAddIcon from '@material-ui/icons/PersonAdd';
import CustomInput from '../../components/CustomInput/CustomInput';


const styles = theme => ({
	root: {
		padding: '16px'

	},
	card: {
		boxShadow: '0 2px 8px rgba(0,0,0,0.30), 0 10px 12px rgba(0,0,0,0.22)',
	},
	divider: {
		position: 'absolute',
		margin: '12px',
		maxWidth: '60px',
		borderRadius: '100%',
		// border: '1px dashed #aaa',
	},
	cardTitleWhite: {
		color: "#FFFFFF",
		marginTop: "0px",
		minHeight: "auto",
		fontWeight: "500",
		fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
		marginBottom: "3px",
		textDecoration: "none"
	},
	cardCategoryWhite: {
		margin: "0",
		fontSize: "14px",
		marginTop: "0",
		marginBottom: "0"
	},
	cardCategory: {
		color: 'black',
		margin: "0",
		fontSize: "14px",
		marginTop: "0",
		paddingTop: "10px",
		fontWeight: 400,
		marginBottom: "0",
		// textShadow: '2px 2px 5px grey'
	},
	stats: {
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
	},
	danger: {
		color: 'brown',
		marginTop: 4,
		fontSize: 15
	}
});


const useStyles = makeStyles(styles);

const UserProfile = (props) => {
	const classes = useStyles();
	const uploadedImage = React.useRef(null);
	const imageUploader = React.useRef(null);

	const {
		values,
		errors,
		handleChange,
		handleSubmit,
	} = useForm(update, validate);

	function update() {
		const formData = {
			mobile: values.mobile,
			email: values.email,
			age: values.age,
			// emergency_contact_no: values.emergency_contact_no,
			current_password: values.current_password,
			new_password: values.new_password,
			confirm_password: values.confirm_password
		}
		console.log(formData);
	}

	const handleImageUpload = e => {
		const [file] = e.target.files;
		if (file) {
			const reader = new FileReader();
			const { current } = uploadedImage;
			current.file = file;
			reader.onload = e => {
				current.src = e.target.result;
			};
			reader.readAsDataURL(file);
		}
	};

	return (
		<div className={classes.root}>
			<Grid container spacing={2}>
				<Grid item xs={12} sm={9} md={9} >
					<Card style={{ marginTop: '23px' }}>
						<CardHeader style={{ width: '147px', padding: '14px' }} color="success" >
							<CardIcon color="success">
								<PersonAddIcon />
							</CardIcon>
							<h4 className={classes.cardTitleWhite}>Edit Profile</h4>
						</CardHeader>
						<CardBody>
							<form onSubmit={handleSubmit} noValidate>
								<Grid container spacing={2}>
									<Grid item xs={12} sm={12} md={12} >
										<CustomInput
											required
											inputProps={{
												disabled: true
											}}
											id="name"
											name="name"
											label="Full Name"
											value="Raj Kumar"


										/>
									</Grid>
									<Grid item xs={12} sm={6} md={6} >
										<CustomInput
											className={`input ${errors.mobile && 'is-danger'}`}
											required
											id="mobile"
											name="mobile"
											label="Mobile"
											value={values.mobile || ''}
											changed={handleChange}

										/>
										{errors.mobile && (
											<p className={classes.danger}>{errors.mobile}</p>
										)}
									</Grid>
									<Grid item xs={12} sm={6} md={6} >
										<CustomInput
											className={`input ${errors.email && 'is-danger'}`}
											required
											id="email"
											name="email"
											label="Email"
											value={values.email || ''}
											changed={handleChange}

										/>
										{errors.email && (
											<p className={classes.danger}>{errors.email}</p>
										)}
									</Grid>
									<Grid item xs={12} sm={6} md={6} >
										<CustomInput
											className={`input ${errors.age && 'is-danger'}`}
											required
											id="age"
											name="age"
											label="Age"
											value={values.age || ''}
											changed={handleChange}
											fullWidth

										/>
										{errors.age && (
											<p className={classes.danger}>{errors.age}</p>
										)}
									</Grid>
									<Grid item xs={12} sm={6} md={6} >
										<CustomInput
											required
											id="gender"
											name="gender"
											label="Gender"
											value="Male"
											inputProps={{
												disabled: true
											}}
										/>
									</Grid>
									<Grid item xs={12} sm={12} md={12} >
										<CustomInput
											required
											id="address"
											name="address"
											label="Address"
											value="Delhi"
											inputProps={{
												disabled: true
											}}
										/>
									</Grid>
									<Grid item xs={12} sm={6} md={6} >
										<CustomInput
											required
											id="city"
											name="city"
											label="City"
											value="Delhi"
											inputProps={{
												disabled: true
											}}
										/>
									</Grid>
									<Grid item xs={12} sm={6} md={6} >
										<CustomInput
											required
											id="state"
											name="state"
											label="State"
											value="Delhi"
											inputProps={{
												disabled: true
											}}
										/>
									</Grid>
									<Grid item xs={12} sm={6} md={6} >
										<CustomInput
											required
											id="pincode"
											name="pincode"
											label="Pincode"
											value="247001"
											inputProps={{
												disabled: true
											}}
										/>
									</Grid>
									{/* <Grid item xs={12} sm={6} md={6} >
										<CustomInput
											className={`input ${errors.emergencyContact && 'is-danger'}`}
											required
											id="emergency_contact_no"
											name="emergency_contact_no"
											label="Emergency Contact"
											value={values.emergency_contact_no || ''}
											changed={handleChange}
										/>
										{errors.emergency_contact_no && (
											<p className={classes.danger}>{errors.emergency_contact_no}</p>
										)}
									</Grid> */}
									
									<div className="h-divider">
										<div className="shadow"></div>
										<div className="text2">
											<LockIcon
												className={classes.divider}

											/>
										</div>
									</div>
									<Grid item xs={12} sm={6} md={6} >
										<TextField
											required
											fullWidth
											type="password"
											id="current_password"
											name="current_password"
											label="Current Password"
											value={values.current_password || ''}
											onChange={handleChange}
										/>
										{errors.current_password && (
											<p className={classes.danger}>{errors.current_password}</p>
										)}
									</Grid>
									<Grid item xs={12} sm={6} md={6} >
										<TextField
											required
											fullWidth
											type="password"
											id="new_password"
											name="new_password"
											label="New Password"
											value={values.new_password || ''}
											onChange={handleChange}
										/>
										{errors.new_password && (
											<p className={classes.danger}>{errors.new_password}</p>
										)}
									</Grid>
									<Grid item xs={12} sm={6} md={6} >
										<TextField
											required
											fullWidth
											type="password"
											id="confirm_password"
											name="confirm_password"
											label="Confirm Password"
											value={values.confirm_password || ''}
											onChange={handleChange}
										/>
										{errors.confirm_password && (
											<p className={classes.danger}>{errors.confirm_password}</p>
										)}
									</Grid>

								</Grid>
								<CardFooter style={{ float: 'right' }}>
									<Button type="submit"  >Update</Button>
								</CardFooter>
							</form>
						</CardBody>
					</Card>

				</Grid>
				<Grid item xs={12} sm={3} md={3}>
					<Card style={{ marginTop: '45px' }} className={classes.card}>
						<CardAvatar profile>
							<input
								type="file"
								accept="image/*"
								onChange={handleImageUpload}
								ref={imageUploader}
								style={{
									display: "none"
								}}
							/>
							<div
								style={{
									height: "123px",
									width: "147px",
								}}
								onClick={() => imageUploader.current.click()}
							>
								<img
									ref={uploadedImage}
									src={avatar}
									alt="Select"
									style={{
										width: "89%",
										height: "100%",
										position: "acsolute",
										cursor: 'pointer'
									}}
								/>
							</div>
						</CardAvatar>
						<CardBody >
							<h6 className={classes.cardCategory} style={{ textAlign: 'center' }}>Raj Kumar
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
										<LanguageIcon />
										<span style={{ fontWeight: 400 }}>Language:</span>
										<span> Hindi</span>
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
										<span style={{ fontWeight: 400 }}>Mobile No:</span>
										<span>7017483927</span>
									</div>
								</Grid>
								{/* <Grid item xs={12} sm={12} md={12} >
									<div className={classes.stats}>
										<ContactlessIcon />
										<span style={{ fontWeight: 400 }}>Emergency No:</span>
										<span>7017483927</span>
									</div>
								</Grid> */}
								<Grid item xs={12} sm={12} md={12} >
									<div className={classes.stats}>
										<EmailIcon />
										<span style={{ fontWeight: 400 }}>Email:</span>
										<span>arorashivansh@gmail.com</span>
									</div>
								</Grid>
							</Grid>
						</CardBody>
					</Card>
				</Grid>
			</Grid>
		</div>
	);
}

export default UserProfile;