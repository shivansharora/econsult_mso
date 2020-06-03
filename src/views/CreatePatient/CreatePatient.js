
import React, { useState,useEffect } from "react";
// @material-ui/core components
import { makeStyles,withStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';

// core components
// import Webcam from 'react-webcam';
import Button from '../../components/CustomButtons/Button';
import Card from '../../components/Card/Card';
import CardHeader from '../../components/Card/CardHeader';
import CardIcon from '../../components/Card/CardIcon';
import CardBody from '../../components/Card/CardBody';
import CardFooter from '../../components/Card/CardFooter';
import CardAvatar from '../../components/Card/CardAvatar';
// import avatar from "../../assets/Patient image/Patient.png";
import avatar from "../../assets/img/patient.png";
import { green } from '@material-ui/core/colors';

import { Link as RouterLink } from 'react-router-dom';
// import Switch from '@material-ui/core/Switch';

import TextField from '@material-ui/core/TextField';
// import { useFormFields } from '../../customHooks/useFormFields';
import useForm from '../../customHooks/useForm';
import validate from './Validation'
import maritalStatus from './maritalStatus';
import Gender from './gender';
import MenuItem from '@material-ui/core/MenuItem';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import CustomInput from '../../components/CustomInput/CustomInput';
import moment from 'moment';
import {
	FormControlLabel,
	Checkbox,
	colors
} from "@material-ui/core";

const styles = theme => ({
	root: {
		flexGrow: 1,
		padding: '17px'
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: 'center',
		color: theme.palette.text.secondary,
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
	formControl: {
		// margin: theme.spacing(1),
		minWidth: 150,
	},
	danger: {
		color: 'brown'
	}
});

const useStyles = makeStyles(styles);


const GreenCheckbox = withStyles({
	root: {
		color: green[400],
		'&$checked': {
			color: green[600],
		},
	},
	checked: {},
})((props) => <Checkbox color="default" {...props} />);

const CreatePatient = (props) => {
	const classes = useStyles();
	const [dob, setSelectedDate] = React.useState(new Date(moment()));
	const uploadedImage = React.useRef(null);
	const imageUploader = React.useRef(null);
	const [camIsOn, setState] = useState(false);
	const {
		values,
		errors,
		handleChange,
		handleSubmit,
	} = useForm(register, validate);

	function register() {
		const formData = {
			name: values.name,
			mobile: values.mobile,
			email: values.email,
			dob: dob,
			age: values.age,
			marital_status: values.marital_status,
			gender: values.gender,
			address: values.address,
			city_id: values.city_id,
			state_id: values.state_id,
			pincode: values.pincode,
			emergency_contact_no: values.emergency_contact_no,
			alternate_contact_no: values.alternate_contact_no,
			emergency_contact_person: values.emergency_contact_person,
			emergency_contact_relationship: values.emergency_contact_relationship,
			uploadedImage:uploadedImage
		}
		values.imageUploader=uploadedImage
		console.log(values);
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
	 
	const age=()=>{
		return(
			<Grid item xs={12} sm={3} md={3} >
			<CustomInput
				required
				id="age"
				name="age"
				label="Age"
				value={values.age || ''}
				changed={handleChange}
				fullWidth

			/>
			{/* {errors.age && (
				<p className={classes.danger}>{errors.age}</p>
			)} */}
		</Grid>
		)
	}

	return (
		<div className={classes.root}>
			<form onSubmit={handleSubmit}>
			<Grid container spacing={2}>
			
				<Grid item xs={12} sm={9} md={9} >
					<Card style={{ marginTop: '23px' }}>
						<CardHeader style={{ width: '147px', padding: '14px' }} color="success" >
							<CardIcon color="success">
								<PersonAddIcon />
							</CardIcon>
							<h4 className={classes.cardTitleWhite}>Create Patient</h4>
						</CardHeader>
						<CardBody>
								<Grid container spacing={2}>
									<Grid item xs={12} sm={12} md={12} >
										<CustomInput
											required
											inputProps={{
												autoFocus: true
											}}
											id="name"
											name="name"
											label="Full Name"
											value={values.name || ''}
											changed={handleChange}

										/>
										{errors.name && (
											<p className={classes.danger}>{errors.name}</p>
										)}

									</Grid>
									<Grid item xs={12} sm={6} md={6} >
										<CustomInput
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
									
								
									<Grid item xs={12} sm={3} md={3} >
										<FormControlLabel
											control={<GreenCheckbox
												checked={values.tentative_age || false}
												style={{ marginLeft: '-6px' }}
												color="primary"
												name="tentative_age"
												onChange={handleChange}
											/>}
											label="Tentative Age"
										/>
									</Grid>
									{values.tentative_age === true ?
											age() : 	<Grid item xs={12} sm={3} md={3} >
											<TextField
												id="dob"
												label="DOB"
												type="date"
												name="dob"
												value={values.dob || ''} onChange={handleChange}
												className={classes.textField}
												InputLabelProps={{
													shrink: true
												}}
											/>
	
											{/* {errors.dob && (
												<p className={classes.danger}>{errors.dob}</p>
											)} */}
										</Grid>}
									<Grid item xs={12} sm={3} md={3}>
										<TextField className={classes.formControl}
											id="marital_status"
											name="marital_status"
											select
											label="Marital Status"
											value={values.marital_status || ''}
											onChange={handleChange}
										>
											{maritalStatus.map(option => (
												<MenuItem key={option.value} value={option.value}>
													{option.label}
												</MenuItem>
											))}
										</TextField>
										{errors.marital_status && (
											<p className={classes.danger}>{errors.marital_status}</p>
										)}
									</Grid>
									<Grid item xs={12} sm={3} md={3}>
										<TextField className={classes.formControl}
											id="gender"
											select
											label="Gender"
											name="gender"
											value={values.gender || ''}
											onChange={handleChange}
										>
											{Gender.map(option => (
												<MenuItem key={option.value} value={option.value}>
													{option.label}
												</MenuItem>
											))}

										</TextField>
										{errors.gender && (
											<p className={classes.danger}>{errors.gender}</p>
										)}
									</Grid>
									
									<Grid item xs={12} sm={12} md={12} >
										<CustomInput
											required
											id="address"
											name="address"
											label="Address"
											autoComplete="address"
											value={values.address || ''}
											changed={handleChange}
										/>
										{errors.address && (
											<p className={classes.danger}>{errors.address}</p>
										)}
									</Grid>
									<Grid item xs={12} sm={4} md={4} >
										<TextField style={{ minWidth: 200 }}
											id="state_id "
											select
											name="state_id"
											label="State"
											value={values.state_id || ''}
											onChange={handleChange}

										>
											<MenuItem value={10}>Delhi</MenuItem>
											<MenuItem value={20}>Lucknow</MenuItem>
											<MenuItem value={30}>Others</MenuItem>
											))}
										</TextField>
										{errors.state_id && (
											<p className={classes.danger}>{errors.state_id}</p>
										)}
									</Grid>
									<Grid item xs={12} sm={4} md={4} >
										<TextField style={{ minWidth: 200 }}
											id="city_id"
											select
											name="city_id"
											label="City"
											value={values.city_id || ''}
											onChange={handleChange}

										>
											<MenuItem value={10}>Basti</MenuItem>
											<MenuItem value={20}>Barabanki</MenuItem>
											<MenuItem value={30}>Others</MenuItem>
											))}
										</TextField>
										{errors.city_id && (
											<p className={classes.danger}>{errors.city_id}</p>
										)}
									</Grid>
									
									<Grid item xs={12} sm={4} md={4} >
										<CustomInput
											required
											id="pincode"
											name="pincode"
											label="Pincode"
											value={values.pincode || ''}
											changed={handleChange}
										/>
										{errors.pincode && (
											<p className={classes.danger}>{errors.pincode}</p>
										)}
									</Grid>
									<Grid item xs={12} sm={6} md={6} >
										<CustomInput
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
									</Grid>
									<Grid item xs={12} sm={6} md={6} >
										<CustomInput
											required
											id="alternate_contact_no"
											name="alternate_contact_no"
											label="Alternate Number"
											value={values.alternate_contact_no || ''}
											changed={handleChange}
										/>
										{errors.alternate_contact_no && (
											<p className={classes.danger}>{errors.alternate_contact_no}</p>
										)}
									</Grid>
									<Grid item xs={12} sm={6} md={6} >
										<CustomInput
											required
											id="emergency_contact_person"
											name="emergency_contact_person"
											label="Emergency Contact Person"
											value={values.emergency_contact_person || ''}
											changed={handleChange}
										/>
										{errors.emergency_contact_person && (
											<p className={classes.danger}>{errors.emergency_contact_person}</p>
										)}
									</Grid>
									<Grid item xs={12} sm={6} md={6} >
										<CustomInput
											required
											id="emergency_contact_relationship"
											name="emergency_contact_relationship"
											label="Emergency Contact Relationship"
											value={values.emergency_contact_relationship || ''}
											changed={handleChange}
										/>
										{errors.emergency_contact_relationship && (
											<p className={classes.danger}>{errors.emergency_contact_relationship}</p>
										)}
									</Grid>

								</Grid>
								<CardFooter style={{ float: 'right' }}>
									<Button type="submit"  >Register</Button>
									<Button
										component={RouterLink}
										to="/patient_list"
									>
										Cancel</Button>
								</CardFooter>
						</CardBody>
					</Card>

				</Grid>
				<Grid item xs={12} sm={3} md={3}>
					<Card style={{ marginTop: '45px', boxShadow: 'rgba(0, 0, 0, 0.3) 0px 2px 8px, rgba(0, 0, 0, 0.22) 0px 10px 12px' }} className={classes.card}>
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

							<Grid container spacing={0}>
								<Grid item xs={12} sm={12} md={12} >
									{/* <Webcam /> */}
									<Button style={{ marginLeft: 45 }}
										component={RouterLink}
										to="create_patient/webcam"
									>Upload Image</Button>
								</Grid>
							</Grid>
						</CardBody>
					</Card>
				</Grid>
			</Grid>
			</form>

		</div>
	);
}

export default CreatePatient;