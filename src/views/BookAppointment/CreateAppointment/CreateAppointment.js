import React, { useState, useEffect } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import { useForm, Controller } from "react-hook-form";
import { Link as RouterLink } from 'react-router-dom';

// core components
import Button from '../../../components/CustomButtons/Button';
import Card from '../../../components/Card/Card';
import CardHeader from '../../../components/Card/CardHeader';
import CardIcon from '../../../components/Card/CardIcon';
import CardBody from '../../../components/Card/CardBody';
import CardFooter from '../../../components/Card/CardFooter';
import CardAvatar from '../../../components/Card/CardAvatar';
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import BookIcon from '@material-ui/icons/Book';
import Type from '../Type';
import Category from '../Category'
import Doctor from '../Doctors'
import moment from 'moment';
import axios from '../../../utils/axios1';
import Spinner from '../../../components/Spinner/Spinner'


import {
	Select,
	MenuItem,
	FormControl,
	InputLabel,
	FormHelperText,
	TextField,
	Checkbox
} from "@material-ui/core";



const styles = theme => ({
	root: {
		padding: '16px'

	},
	input: {
		display: 'block',
		boxSizing: 'border-box',
		width: '100%',
		borderRadius: '4px',
		border: '1px solid black',
		padding: '10px 15px',
		marginBottom: '2px',
		fontSize: '14px'
	}
});
const useStyles = makeStyles(styles);

const CreateAppointment = (props) => {

	// console.log(props.match.params.id)

	const { control, handleSubmit, errors, register, watch, setValue } = useForm();


	const [startDate, setStartDate] = useState(new Date());
	const [checkType, setType] = useState();
	const [checkCategory, setCategory] = useState();
	const [patient, setPatient] = useState([])
	const [categories, setCategories] = useState([]);
	const [fees, setFess] = useState([]);
  const [IsPregnantCheck ,setIsPregnant]= useState()
  const [doctors ,setDoctors] = useState([])
  const [isSent, setIsSent] = useState(false)

	useEffect(() => {
		let mounted = true;


		const fetchPatient = () => {
			if (localStorage.getItem("jwt") != '' || localStorage.getItem("jwt") !== undefined) {
				let token = "Bearer " + localStorage.getItem("jwt");
				axios.get(`/patients/${props.match.params.id}`, { headers: { Authorization: token } }).then(response => {
					if (mounted) {
						setPatient(response.data);
						// console.log(response.data)
					}

				}).catch(error => {
					if (error.response.data != "") {
						alert(error.response.data.error);
					} else {
						alert(error.response.statusText);
					}
				});
			}
		}
		const fetchCategory = () => {
			axios.get('/get_doctor_categories ').then(response => {
				if (mounted) {
					setCategories(response.data);
					console.log(response.data)
					// for(let i=0;i<response.data.length ; i++){
					// console.log(response.data[i].fee)
					// setFess(response.data[i].fee)
					// }

				}

			}).catch(error => {
				if (error.response.data != "") {
					alert(error.response.data.error);
				} else {
					alert(error.response.statusText);
				}
			});
		};

		fetchCategory()
		fetchPatient()



		return () => {
			mounted = false;
		};
	}, []);

	useEffect(() => {
		setTimeout(() => {

			setValue("name", patient.name || '')

			if (patient.gender !== undefined) {
				if (patient.gender === 'male') {
					setIsPregnant(false)
				} else {
					setIsPregnant(true)
				}

			}

		});
	});


	// const type = watch('type');
	// const category = watch('category')
	const classes = useStyles();


	const CustomInput = React.forwardRef((props, ref) => {
		return (
			<input
				onClick={props.onClick}
				value={props.value}
				className={classes.input}
				type="text"
				placeholder="Select Appointment Date"
				readOnly={true}
			/>
		)
	})

	const CustomInputTime = React.forwardRef((props, ref) => {
		return (
			<input
				onClick={props.onClick}
				value={props.value}
				className={classes.input}
				type="text"
				placeholder="Select Appointment Time"
				readOnly={true}
			/>
		)
	})

	const getType = (doctor_type) => {
		setType(doctor_type)
	}

	const getCategory = (doctor_category_id) => {
		console.log(doctor_category_id)
		setCategory(doctor_category_id)
		if (localStorage.getItem("jwt") != '' || localStorage.getItem("jwt") !== undefined) {
			let token = "Bearer " + localStorage.getItem("jwt");
		axios.get(`/get_doctors_by_category_id_dropdown/${doctor_category_id}`,{ headers: { Authorization: token } }).then(response => {
				setDoctors(response.data);
				console.log(response.data)

		}).catch(error => {
			if (error.response.data != "") {
				alert(error.response.data.error);
			} else {
				alert(error.response.statusText);
			}
		});
		console.log(doctor_category_id)
	}
}

	const blockSpecialChar = (event) => {
		if (event.which == 13 || event.keyCode == 13) {
			return false;
		} else {
			var regex = new RegExp("^[.a-zA-Z0-9\b _ _%]+$");
			var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
			if (!regex.test(key)) {
				event.preventDefault();
				return false;
			}
		}
		return true;


	}

	const onSubmit = data => {
		setIsSent(false);
		if(patient.gender !== undefined){
			if(patient.gender === 'male' ){
			data.is_pregnant = 0
			}
		}
	
		if(data.is_pregnant === false ){
		data.is_pregnant = 0
	}
	if(data.is_pregnant === true ){
		data.is_pregnant = 1
	}
		const date= data.appointment_date.toLocaleDateString();
		const time = data.appointment_date.toLocaleTimeString()
		console.log(date)
		console.log(time.substr(0, 5))
		const patient_appointment = {

		 patient_id: props.match.params.id,
		 doctor_type: data.doctor_type,
		 doctor_category_id: data.doctor_category_id,
		 doctor_id: data.doctor_id,
		 is_pregnant: data.is_pregnant,
		 appointment_date: date,
		 appointment_time: time.substr(0, 5),
		 payment_paid: data.payment_paid,

		}
		console.log(patient_appointment)
		if (localStorage.getItem("jwt") != '' || localStorage.getItem("jwt") !== undefined) {
			let token = "Bearer " + localStorage.getItem("jwt");
			axios.post('/patient_appointments ', { patient_appointment: patient_appointment }, { headers: { Authorization: token } }).then(response => {
				console.log(response);
				setIsSent(true);
        setTimeout(
            function() {
                props.history.push("/book_appointment_list");
            },
            4000
				);
				alert(response.data.message);
			}).catch(error => {
				if (error.response.data != "") {
					alert(error.response.data.error);
				} else {
					alert(error.response.statusText);
				}
			});
		}
	};

	const appointmentForm = () =>{
		return(
			<div className={classes.root} style={{ marginTop: '3px' }} >
			<Grid container spacing={2}>
				<Grid item xs={12} sm={9} md={9} >
					<Card >
						<CardHeader style={{ width: '177px', padding: '11px' }} color="success" >
							<CardIcon color="success">
								<BookIcon />
							</CardIcon>
							<h4 className={classes.cardTitleWhite}>Create Appointment</h4>
						</CardHeader>
						<CardBody>
							<form onSubmit={handleSubmit(onSubmit)}>
								<Grid container spacing={2}>
									<Grid item xs={12} sm={12} md={12} >
										<Controller
											as={<TextField />}
											error={Boolean(errors.name)}
											name="name"
											rules={{ required: "Patient Name is required" }}
											control={control}
											defaultValue=''

											label="Patient Name"
											type="text"
											helperText={errors.name && errors.name.message}
											fullWidth
											onKeyPress={blockSpecialChar}


										/>
									</Grid>
									<Grid item xs={12} sm={4} md={4} >
										<FormControl
											style={{ minWidth: 230 }}
											error={Boolean(errors.type)}
										>
											<InputLabel id="demo-simple-select-label">
											 Doctor	Type
									        </InputLabel>

											<Controller
												as={
													<Select>
														{Type.map(option => (
															<MenuItem key={option.value} value={option.value}>
																{option.label}
															</MenuItem>
														))}
													</Select>
												}
												name="doctor_type"
												rules={{ required: "Type is required" }}
												control={control}
												onChange={([selected]) => {
													getType(selected.target.value);
													return selected;
												}}
												defaultValue=""
											/>
											<FormHelperText>
												{errors.type && errors.type.message}
											</FormHelperText>
										</FormControl>
									</Grid>

									{checkType === 'category' && (
										<React.Fragment>
											<Grid item xs={12} sm={4} md={4} >

												<FormControl
													style={{ minWidth: 230 }}
													error={Boolean(errors.category)}
												>
													<InputLabel id="demo-simple-select-label">
														Category
								                    </InputLabel>

													<Controller
														as={
															<Select>
																{categories.map(option => (
																	<MenuItem key={option.id} value={option.id}>
																		{option.category_title}
																	</MenuItem>
																))}
															</Select>
														}
														name="doctor_category_id"
														rules={{ required: "Category is required" }}
														control={control}
														defaultValue=""
														onChange={([selected]) => {
															getCategory(selected.target.value);
															return selected;
														}}
													/>
													<FormHelperText>
														{errors.category && errors.category.message}
													</FormHelperText>
												</FormControl>
											</Grid>

											{checkCategory && (
												<React.Fragment>
													<Grid item xs={12} sm={2} md={2} >

														<FormControl
															style={{ minWidth: 130 }}
															error={Boolean(errors.doctor_id)}
														>
															<InputLabel id="demo-simple-select-label">
																Doctors
							  							</InputLabel>

															<Controller
																as={
																	<Select>
																		{doctors.map(option => (
																			<MenuItem key={option.id} value={option.id}>
																				{option.name}
																			</MenuItem>
																		))}
																	</Select>
																}
																name="doctor_id"
																// rules={{ required: "Doctor is required" }}
																control={control}
																defaultValue=""
															/>
															<FormHelperText>
																{errors.doctor_id && errors.doctor_id.message}
															</FormHelperText>
														</FormControl>
													</Grid>
													<Grid item xs={12} sm={2} md={2} >

														<FormControl
															style={{ minWidth: 130 }}
															error={Boolean(errors.doctor)}
														>
															<InputLabel id="demo-simple-select-label">
																Fee
													  </InputLabel>

															<Controller
																as={
																	<Select>
																		{categories.map(option => (
																			<MenuItem key={option.id} value={option.fee}>
																				{option.fee}
																			</MenuItem>
																		))}
																	</Select>
																}
																name="payment_paid"
																rules={{ required: "Fee is required" }}
																control={control}
																defaultValue=""
															/>
															<FormHelperText>
																{errors.payment_paid && errors.payment_paid.message}
															</FormHelperText>
														</FormControl>
													</Grid>
												</React.Fragment>
											)}
										</React.Fragment>

									)}
									{checkType === 'individual' && (
										<Grid item xs={12} sm={4} md={4} >
											<FormControl
												style={{ minWidth: 230 }}
												error={Boolean(errors.doctor_id)}
											>
												<InputLabel id="demo-simple-select-label">
													Doctors
												</InputLabel>

												<Controller
													as={
														<Select>
															{Doctor.map(option => (
																<MenuItem key={option.value} value={option.value}>
																	{option.label}
																</MenuItem>
															))}
														</Select>
													}
													name="doctor_id"
													rules={{ required: "Doctor is required" }}
													control={control}
													defaultValue=""
												/>
												<FormHelperText>
													{errors.doctor_id && errors.doctor_id.message}
												</FormHelperText>
											</FormControl>
										</Grid>
									)}
									<Grid item xs={12} sm={12} md={12} >

										<Controller
											as={<ReactDatePicker />}
											error={Boolean(errors.appointment_date)}
											control={control}
											valueName="selected" // DateSelect value's name is selected
											onChange={([selected]) => selected}
											name="appointment_date"
											rules={{ required: "Appointment Date is required" }}
											showTimeSelect
											timeFormat="HH:mm"
											timeIntervals={15}
											timeCaption="time"
											dateFormat="yyyy-MM-dd HH:mm "
											helperText={errors.appointment_date && errors.appointment_date.message}
											minDate={moment().toDate()}
											isClearable
											customInput={<CustomInput />}
										/>
										{errors.appointment_date && <div style={{ color: 'red' }}> Appointment Date is required</div>}

									</Grid>
								
									{/* <Grid item xs={12} sm={6} md={6} >
										<FormControl
											style={{ minWidth: 230 }}
										// error={Boolean(errors.camp)}
										>
											<InputLabel id="demo-simple-select-label">
												Camp
												</InputLabel>

											<Controller
												as={
													<Select>
														<MenuItem value="Pathology Camp">Pathology Camp</MenuItem>
														<MenuItem value="Awareness Camp">Pathology Camp</MenuItem>
													</Select>
												}
												name="camp"
												// rules={{ required: "Camp is required" }}
												control={control}
												defaultValue=""
											/>
										
										</FormControl>
									</Grid> */}
									{/* <Grid item xs={12} sm={6} md={6} >
										<FormControl
											style={{ minWidth: 230 }}
										>
											<InputLabel id="demo-simple-select-label">
												Promo Code
												</InputLabel>

											<Controller
												as={
													<Select>
														<MenuItem value="Pathology Camp">Pathology Camp</MenuItem>
														<MenuItem value="Awareness Camp">Pathology Camp</MenuItem>
													</Select>
												}
												name="promo_code"
												control={control}
												defaultValue=""
											/>
											
										</FormControl>
									</Grid> */}
									{IsPregnantCheck &&(
									<Grid item xs={12} sm={12} md={12} >
										<label>Is Pregnant</label>
										<Controller control={control} as={<Checkbox />}
											name="is_pregnant"
											defaultValue={false}

										/>
									</Grid>
									)}
									<Grid item xs={12} sm={12} md={12} >
										<CardFooter style={{ float: 'right' }}>
											<Button type="submit" >Create</Button>
											<Button
												component={RouterLink}
												to="/book_appointment_list"
											>Cancel</Button>
										</CardFooter>
									</Grid>
								</Grid>
							</form>
						</CardBody>
					</Card>
				</Grid>

			</Grid>
		</div>
		)
	}

	return (
		<div>{isSent ? <Spinner/> : appointmentForm()}</div>     

	);
};

export default CreateAppointment;

